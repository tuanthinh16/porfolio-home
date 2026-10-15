import { useEffect, useRef } from "react";
import styles from "./DeveloperDashboard.module.css";

export function AnimatedMetric({ value }: { value: number }) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const finish = () => {
      cancelAnimationFrame(frame);
      element.textContent = value.toString().padStart(2, "0");
    };
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      if (preference.matches) return;
      const start = performance.now();
      const update = (now: number) => {
        const progress = Math.min((now - start) / 900, 1);
        element.textContent = Math.round(value * (1 - (1 - progress) ** 3)).toString().padStart(2, "0");
        if (progress < 1) frame = requestAnimationFrame(update);
      };
      frame = requestAnimationFrame(update);
    }, { threshold: 0.5 });
    observer.observe(element);
    const onPreferenceChange = () => {
      if (preference.matches) finish();
    };
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
      finish();
    };
  }, [value]);

  return <><span className={styles.srOnly}>{value}</span><span ref={counterRef} className={styles.metricValue} aria-hidden="true">{value.toString().padStart(2, "0")}</span></>;
}

export function OrbitRoutes() {
  return (
    <svg className={styles.orbitRoutes} viewBox="0 0 300 300" aria-hidden="true">
      <g className={styles.orbitRing}>
        <circle cx="150" cy="150" r="125" fill="none" stroke="currentColor" strokeOpacity=".2" strokeDasharray="3 9" />
        <path d="M150 25a125 125 0 0 1 125 125" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="150" cy="25" r="4" fill="currentColor" />
        <circle cx="150" cy="275" r="3" fill="currentColor" />
      </g>
      <g className={styles.orbitRingInner}>
        <circle cx="150" cy="150" r="103" fill="none" stroke="currentColor" strokeOpacity=".15" />
        <path d="M47 150a103 103 0 0 1 103-103" fill="none" stroke="currentColor" strokeDasharray="5 4" />
        <circle cx="47" cy="150" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

export function ProjectIllustration({ kind }: { kind: string }) {
  if (kind === "erp") {
    return (
      <svg className={styles.projectSvg} viewBox="0 0 280 150" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeOpacity=".3">
          <path d="M140 33V58M140 92v14H65v13M140 106h75v13" />
          <path className={styles.svgPacket} pathLength="1" d="M140 33V58M140 92v14H65v13M140 106h75v13" strokeWidth="3" strokeOpacity="1" />
        </g>
        <g className={styles.svgNodeTop}><rect x="94" y="7" width="92" height="26" rx="6" /><text x="140" y="24">BOOKINGS</text></g>
        <g className={styles.svgHub}><rect x="70" y="58" width="140" height="34" rx="8" /><path d="m89 69 9-5 9 5-9 5-9-5Zm0 6 9 5 9-5m-18 6 9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.2" /><text x="154" y="79">STUDIO ERP</text></g>
        <g className={styles.svgNodeLeft}><rect x="23" y="119" width="84" height="25" rx="6" /><text x="65" y="135">TICKETS</text></g>
        <g className={styles.svgNodeRight}><rect x="173" y="119" width="84" height="25" rx="6" /><text x="215" y="135">PRODUCTS</text></g>
      </svg>
    );
  }
  if (kind === "health") {
    return (
      <svg className={styles.projectSvg} viewBox="0 0 280 150" aria-hidden="true">
        <g className={styles.svgPulseRings} fill="none" stroke="currentColor"><circle cx="140" cy="67" r="43" strokeOpacity=".18" /><circle cx="140" cy="67" r="57" strokeOpacity=".08" /></g>
        <path d="M10 76h260" fill="none" stroke="currentColor" strokeOpacity=".15" />
        <path className={styles.svgTrace} pathLength="1" d="M10 76h55l13-13 16 24 21-52 23 66 19-42 14 17h99" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle className={styles.svgSignal} cx="171" cy="76" r="5" fill="currentColor" />
        <text x="78" y="133">HIS</text><path className={styles.svgPacket} pathLength="1" d="M100 130h80" stroke="currentColor" /><text x="204" y="133">LIS</text>
      </svg>
    );
  }
  if (kind === "freelance") {
    return (
      <svg className={styles.projectSvg} viewBox="0 0 280 150" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeOpacity=".25">
          <path d="M52 68h62M166 68h62" />
          <path className={styles.svgPacket} pathLength="1" d="M52 68h62M166 68h62" strokeWidth="2.5" strokeOpacity="1" />
        </g>
        <g className={styles.svgNodeLeft}>
          <rect x="16" y="46" width="70" height="44" rx="8" />
          <path d="M41 68a10 10 0 1 0 20 0 10 10 0 1 0-20 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="51" cy="68" r="4" fill="currentColor" />
          <text x="51" y="106">GIT PUSH</text>
        </g>
        <g className={styles.svgHub}>
          <rect x="94" y="42" width="92" height="52" rx="8" />
          <path d="M124 68l10 10 22-22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="140" y="84">GITHUB ACTIONS</text>
        </g>
        <g className={styles.svgNodeRight}>
          <rect x="194" y="46" width="72" height="44" rx="8" />
          <path d="M230 57l12 22h-24z" fill="currentColor" fillOpacity=".85" />
          <text x="230" y="106">VERCEL EDGE</text>
        </g>
        <text x="140" y="138">AUTOMATED CI/CD & EDGE</text>
      </svg>
    );
  }
  return (
    <svg className={styles.projectSvg} viewBox="0 0 280 150" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity=".12"><path d="M10 35h260M10 70h260M10 105h260" /></g>
      <path className={styles.svgArea} d="M10 112 30 100 50 108 70 80 90 88 110 62 130 72 150 37 170 52 190 39 210 60 230 25 250 33 270 13V120H10Z" fill="currentColor" fillOpacity=".09" />
      <path className={styles.svgTrace} pathLength="1" d="M10 112 30 100 50 108 70 80 90 88 110 62 130 72 150 37 170 52 190 39 210 60 230 25 250 33 270 13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <path className={styles.svgSecondaryTrace} pathLength="1" d="M10 120 50 115 90 108 130 90 170 99 210 82 270 63" fill="none" stroke="currentColor" strokeOpacity=".4" strokeDasharray="4 5" />
      <circle className={styles.svgSignal} cx="270" cy="13" r="4" fill="currentColor" />
      <text x="140" y="145">MARKET DATA PIPELINE</text>
    </svg>
  );
}
