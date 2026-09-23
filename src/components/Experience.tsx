"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { career, careerLocations, careerRouteDistances } from "@/data/siteContent";
import RoadmapCyclist from "./RoadmapCyclist";
import RoadmapBackdrop from "./RoadmapBackdrop";
import { createRoadmap, cyclistDimensions } from "./roadmapGeometry";

const chapters = [...career].reverse();
const roadmap = createRoadmap(chapters.length);
const { landmarks } = roadmap;
const rideDuration = 4000;

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRiding, setIsRiding] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const bicycleRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const currentIndexRef = useRef(0);
  const progressRef = useRef(0);
  const ridingRef = useRef(false);
  const loopingRef = useRef(false);
  const animationRef = useRef<number | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const selected = selectedIndex === null ? null : chapters[selectedIndex];
  const next = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  const isOpen = selectedIndex !== null;

  const paintRoad = useCallback((index: number, progress: number) => {
    const scene = sceneRef.current;
    const world = worldRef.current;
    const bicycle = bicycleRef.current;
    if (!scene || !world || !bicycle) return;
    const position = roadmap.position(index, progress);
    const scale = scene.clientWidth / roadmap.viewportWidth;
    const tangent = roadmap.tangent(index, progress);
    const rotation = Math.atan2(tangent.y * scene.clientHeight / roadmap.height, tangent.x * scale) * 180 / Math.PI;
    world.style.transform = `translate3d(${-(position.x - landmarks[0].x) * scale}px, 0, 0)`;
    bicycle.style.transform = `translate3d(${position.x * scale}px, ${position.y * scene.clientHeight / roadmap.height}px, 0) translate(-50%, -${cyclistDimensions.ground / cyclistDimensions.height * 100}%) rotate(${rotation}deg)`;
    bicycle.style.opacity = "1";
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const timeouts = timeoutsRef.current;
    const observer = new ResizeObserver(() => paintRoad(currentIndexRef.current, progressRef.current));
    observer.observe(scene);
    paintRoad(0, 0);
    return () => {
      observer.disconnect();
      if (animationRef.current !== null) window.cancelAnimationFrame(animationRef.current);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, [paintRoad]);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    headingRef.current?.focus();
  }, [selectedIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  const ride = useCallback(() => {
    if (ridingRef.current || loopingRef.current) return;
    const index = currentIndexRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (index === chapters.length - 1) {
      if (reducedMotion) {
        currentIndexRef.current = 0;
        progressRef.current = 0;
        paintRoad(0, 0);
        setCurrentIndex(0);
        return;
      }
      loopingRef.current = true;
      setIsLooping(true);
      timeoutsRef.current.push(window.setTimeout(() => {
        currentIndexRef.current = 0;
        progressRef.current = 0;
        paintRoad(0, 0);
        setCurrentIndex(0);
      }, 350));
      timeoutsRef.current.push(window.setTimeout(() => {
        loopingRef.current = false;
        setIsLooping(false);
      }, 700));
      return;
    }

    ridingRef.current = true;
    setIsRiding(true);
    if (reducedMotion) {
      progressRef.current = 0;
      currentIndexRef.current = index + 1;
      paintRoad(index + 1, 0);
      setCurrentIndex(index + 1);
      ridingRef.current = false;
      setIsRiding(false);
      return;
    }

    let startedAt: number | null = null;
    const tick = (now: number) => {
      if (startedAt === null) startedAt = now;
      const progress = Math.min((now - startedAt) / rideDuration, 1);
      progressRef.current = progress;
      paintRoad(index, progress);
      if (progress < 1) animationRef.current = window.requestAnimationFrame(tick);
      else {
        progressRef.current = 0;
        currentIndexRef.current = index + 1;
        setCurrentIndex(index + 1);
        ridingRef.current = false;
        setIsRiding(false);
        animationRef.current = null;
      }
    };
    animationRef.current = window.requestAnimationFrame(tick);
  }, [paintRoad]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowRight" || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || target.closest("input, textarea, select, [contenteditable='true']"))) return;
      const dialogOpen = dialogRef.current?.open;
      const bounds = sectionRef.current?.getBoundingClientRect();
      if (!dialogOpen && (!bounds || bounds.bottom < 0 || bounds.top > window.innerHeight)) return;
      event.preventDefault();
      if (dialogOpen) dialogRef.current?.close();
      ride();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ride]);

  const openChapter = (index: number, opener: HTMLElement) => {
    openerRef.current = opener;
    setSelectedIndex(index);
  };

  const rideFromDialog = () => {
    dialogRef.current?.close();
    ride();
  };

  return (
    <section id="experience" className="experience-section section-pad" aria-labelledby="experience-title" ref={sectionRef}>
      <div className="site-shell">
        <div className="experience-intro">
          <div><span className="eyebrow dark-eyebrow">03 / THE JOURNEY</span><h2 id="experience-title">A winding road.<br /><em>Real work along the way.</em></h2></div>
          <p>Begin with enterprise ERP today, then cycle back through trading, healthcare and independent projects. Press the right arrow once to ride to the next stop.</p>
        </div>

        <div className={`roadmap-scene${isLooping ? " is-looping" : ""}`} ref={sceneRef} role="group" aria-label="Career roadmap, newest to oldest">
          <div className="roadmap-scene-label" aria-hidden="true"><span>NOW / {String(currentIndex + 1).padStart(2, "0")} OF {String(chapters.length).padStart(2, "0")}</span><span>→ INTO THE PAST</span></div>
          <div className="roadmap-world" ref={worldRef} style={{ width: `${roadmap.width / roadmap.viewportWidth * 100}%` }}>
            <svg className="roadmap-world-art" viewBox={`0 0 ${roadmap.width} ${roadmap.height}`} preserveAspectRatio="none" fill="none" aria-hidden="true">
              <defs><pattern id="roadmap-trees" width="220" height="180" patternUnits="userSpaceOnUse"><circle cx="24" cy="28" r="18" fill="#abc8ad" opacity=".45" /><circle cx="139" cy="119" r="15" fill="#a3bdac" opacity=".4" /><circle cx="26" cy="28" r="6" fill="#769e83" opacity=".35" /></pattern><pattern id="roadmap-grain" width="67" height="63" patternUnits="userSpaceOnUse"><circle cx="8" cy="14" r="1.2" fill="#315a4d" opacity=".15" /><circle cx="48" cy="42" r="1" fill="#315a4d" opacity=".14" /></pattern></defs>
              <rect width={roadmap.width} height={roadmap.height} fill="#e3ece1" /><rect width={roadmap.width} height={roadmap.height} fill="url(#roadmap-trees)" /><rect width={roadmap.width} height={roadmap.height} fill="url(#roadmap-grain)" />
              <g fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={roadmap.path} stroke="#a8c4ae" strokeWidth="101" /><path d={roadmap.path} stroke="#f5f6f1" strokeWidth="83" /><path d={roadmap.path} stroke="#647a70" strokeWidth="69" /><path d={roadmap.path} stroke="#758c80" strokeWidth="64" /><path d={roadmap.path} stroke="#e5e6cc" strokeWidth="2.5" strokeDasharray="16 17" /></g>
            </svg>
            <button className="roadmap-ride-zone" type="button" onClick={ride} aria-label={currentIndex === chapters.length - 1 ? "Return to the first chapter" : `Ride to ${chapters[currentIndex + 1].organization}`} />
            {chapters.map((chapter, index) => (
              <div className={`roadmap-stop roadmap-stop-${index % 2 === 0 ? "left" : "right"}${index === currentIndex ? " is-current" : ""}`} style={{ left: `${landmarks[index].x / roadmap.width * 100}%`, top: `${landmarks[index].y / roadmap.height * 100}%` }} key={chapter.slug}>
                <span className="roadmap-waypoint" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></span>
                <a className="roadmap-card" href={`/experience/${chapter.slug}`} onClick={(event) => { event.preventDefault(); openChapter(index, event.currentTarget); }} aria-label={`Open chapter ${index + 1}: ${chapter.role} at ${chapter.organization}`}>
                  <span className="roadmap-card-index">STOP {String(index + 1).padStart(2, "0")} / {chapter.period}</span><strong>{chapter.organization}</strong><span className="roadmap-card-role">{chapter.role}</span><span className="roadmap-card-description">{chapter.summary}</span><span className="roadmap-card-open">Open chapter <ArrowUpRight size={17} aria-hidden="true" /></span>
                </a>
              </div>
            ))}
            {chapters.map((chapter, index) => {
              if (index === chapters.length - 1) return null;
              const nextChapter = chapters[index + 1];
              const from = chapter.locationId;
              const to = nextChapter.locationId;
              if (from === to || to === "unspecified" || from === "unspecified") return null;
              const distance = careerRouteDistances[`${from}:${to}`] || careerRouteDistances[`${to}:${from}`] || 500;
              const nextLocation = careerLocations[to];
              const signX = (landmarks[index].x + landmarks[index + 1].x) / 2;
              const signY = Math.min(landmarks[index].y, landmarks[index + 1].y) - 60;
              return (
                <svg key={`sign-${chapter.slug}`} className="roadmap-sign" style={{ left: `${signX / roadmap.width * 100}%`, top: `${signY / roadmap.height * 100}%` }} viewBox="0 0 260 130" aria-hidden="true">
                  <rect x="0" y="0" width="260" height="102" rx="10" fill="#1a6b3c" />
                  <path d="M198 51l30-28v56Z" fill="#fff" />
                  <text x="22" y="42" fill="#fff" fontSize="22" fontWeight="700">{nextLocation?.signName ?? to.toUpperCase()}</text>
                  <text x="22" y="78" fill="#ffffffcc" fontSize="15">{String(distance).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} km</text>
                  <rect x="122" y="102" width="16" height="28" rx="3" fill="#5a5a5a" />
                </svg>
              );
            })}
            {chapters.map((chapter, index) => {
              const city = chapter.locationId;
              const position = landmarks[index];
              return (
                <div key={`bg-${chapter.slug}`} className="roadmap-backdrop" style={{ left: `${(position.x - 300) / roadmap.width * 100}%`, top: "0", width: `${600 / roadmap.width * 100}%`, height: "100%" }}>
                  <RoadmapBackdrop city={city} />
                </div>
              );
            })}
            <div className="roadmap-bicycle" ref={bicycleRef} style={{ transformOrigin: `50% ${cyclistDimensions.ground / cyclistDimensions.height * 100}%` }}><span>YOU ARE HERE</span><RoadmapCyclist riding={isRiding} /></div>
          </div>
        </div>
        <div className="roadmap-controls" role="status" aria-live="polite">
          <span>{isRiding ? `CYCLING TO ${chapters[Math.min(currentIndex + 1, chapters.length - 1)].organization.toUpperCase()}...` : currentIndex === chapters.length - 1 ? "AT THE BEGINNING · RIDE ONCE MORE TO RETURN TO NOW" : `STOP ${String(currentIndex + 1).padStart(2, "0")} / ${String(chapters.length).padStart(2, "0")} · ${chapters[currentIndex].organization.toUpperCase()}`}</span>
          <span className="roadmap-control-hint"><kbd>→</kbd> RIDE <span aria-hidden="true">/</span> TAP THE ROAD</span>
        </div>
      </div>

      <dialog ref={dialogRef} className="journey-dialog" aria-labelledby="journey-dialog-title" onClose={() => { setSelectedIndex(null); if (openerRef.current?.isConnected) openerRef.current.focus(); else sceneRef.current?.querySelector<HTMLButtonElement>(".roadmap-ride-zone")?.focus(); }}>
        {selected && selectedIndex !== null && (
          <div className="journey-dialog-layout">
            <div className="journey-dialog-main">
              <div className="journey-dialog-top"><span>CHAPTER {String(selectedIndex + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}</span><button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close chapter"><X size={23} aria-hidden="true" /></button></div>
              <div className="journey-dialog-content" key={selected.slug}>
                <span className="eyebrow dark-eyebrow">{selected.domain} · {selected.period}</span><h2 id="journey-dialog-title" tabIndex={-1} ref={headingRef}>{selected.organization}<span className="accent-period">.</span></h2><p className="journey-dialog-role">{selected.role}</p><p className="journey-dialog-summary">{selected.context}</p>
                <div className="journey-dialog-work"><span className="journey-label">THE WORK</span><ul>{selected.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul></div>
                <div className="journey-dialog-stack"><span className="journey-label">TECHNOLOGIES</span><p>{selected.technologies.join(" · ")}</p></div>
                <Link className="journey-dialog-link" href={`/experience/${selected.slug}`}>View full experience <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
            </div>
            <div className="journey-dialog-side">
              <div className="journey-dialog-side-top"><span>BACK THROUGH TIME</span><span>{String(selectedIndex + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}</span></div>
              <div className="journey-dialog-next">
                {next ? <button type="button" onClick={rideFromDialog} aria-label={`Ride toward ${next.organization}`}><span>{selectedIndex === currentIndex + 1 ? "RIDE TO THIS STOP" : "PREVIOUSLY"} / {next.period}</span><strong>{next.organization}</strong><span>{next.role}</span></button> : <button type="button" onClick={rideFromDialog}><span>THE BEGINNING</span><strong>Ride back to now.</strong></button>}
              </div>
              <p className="journey-dialog-hint">PRESS <kbd>→</kbd> TO RIDE · OR TAP THE NEXT STOP</p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
