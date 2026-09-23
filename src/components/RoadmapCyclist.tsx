"use client";

import { useEffect, useRef } from "react";
import { cyclistPose, cyclistUpperPose } from "./roadmapGeometry";

export default function RoadmapCyclist({ riding = false }: { riding?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const frontLegRef = useRef<SVGPathElement>(null);
  const backLegRef = useRef<SVGPathElement>(null);
  const frontFootRef = useRef<SVGGElement>(null);
  const backFootRef = useRef<SVGGElement>(null);
  const crankRef = useRef<SVGPathElement>(null);
  const rearSpokesRef = useRef<SVGGElement>(null);
  const frontSpokesRef = useRef<SVGGElement>(null);
  const upperBodyRef = useRef<SVGGElement>(null);
  const armRef = useRef<SVGPathElement>(null);
  const sleeveRef = useRef<SVGPathElement>(null);
  const leanRef = useRef(0);
  const initial = cyclistPose(0);
  const initialUpper = cyclistUpperPose(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let previousTime = performance.now();
    const paint = (time: number) => {
      const targetLean = riding ? 1 : 0;
      leanRef.current = motion.matches ? targetLean : leanRef.current + (targetLean - leanRef.current) * (1 - Math.exp(-(time - previousTime) / 140));
      previousTime = time;
      const upper = cyclistUpperPose(leanRef.current);
      upperBodyRef.current?.setAttribute("transform", upper.transform);
      armRef.current?.setAttribute("d", upper.arm);
      sleeveRef.current?.setAttribute("d", upper.sleeve);
      const angle = motion.matches ? 0 : time / 900 * Math.PI * 2;
      const pose = cyclistPose(angle);
      frontLegRef.current?.setAttribute("d", pose.frontLeg);
      backLegRef.current?.setAttribute("d", pose.backLeg);
      crankRef.current?.setAttribute("d", pose.crank);
      frontFootRef.current?.setAttribute("transform", `translate(${pose.front.x} ${pose.front.y})`);
      backFootRef.current?.setAttribute("transform", `translate(${pose.back.x} ${pose.back.y})`);
      rearSpokesRef.current?.setAttribute("transform", `rotate(${angle * 180 / Math.PI} 38 104)`);
      frontSpokesRef.current?.setAttribute("transform", `rotate(${angle * 180 / Math.PI} 142 104)`);
      if (visible && !motion.matches) frame = requestAnimationFrame(paint);
    };
    const refresh = () => {
      cancelAnimationFrame(frame);
      if (visible) paint(performance.now());
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh(); });
    if (svgRef.current) observer.observe(svgRef.current);
    motion.addEventListener("change", refresh);
    refresh();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); motion.removeEventListener("change", refresh); };
  }, [riding]);

  return (
    <svg ref={svgRef} viewBox="0 0 180 145" fill="none" aria-hidden="true">
      <ellipse cx="90" cy="135" rx="79" ry="5" fill="#172a30" opacity=".14" />
      <g stroke="#172a30" strokeWidth="4"><circle cx="38" cy="104" r="27" fill="#f5f6f1" /><circle cx="142" cy="104" r="27" fill="#f5f6f1" /></g>
      <g stroke="#a0b8aa" strokeWidth="1.5">
        <g ref={rearSpokesRef}><path d="M38 79v50M13 104h50M20 86l36 36M20 122l36-36" /></g>
        <g ref={frontSpokesRef}><path d="M142 79v50M117 104h50M124 86l36 36M124 122l36-36" /></g>
      </g>
      <path ref={backLegRef} d={initial.backLeg} stroke="#617f70" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <g ref={backFootRef} transform={`translate(${initial.back.x} ${initial.back.y})`}><path d="M-5 0h12" stroke="#315a4d" strokeWidth="5" strokeLinecap="round" /></g>
      <path d="M38 104 77 62 87 98 38 104ZM77 62l48-3-38 39m38-39 17 45M77 62v-6m48 3 5-12h10" stroke="#315a4d" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M67 58h21M130 46h12" stroke="#172a30" strokeWidth="5" strokeLinecap="round" />
      <circle cx="87" cy="98" r="8" fill="#172a30" /><path ref={crankRef} d={initial.crank} stroke="#b9cbbf" strokeWidth="3" strokeLinecap="round" />
      <path ref={frontLegRef} d={initial.frontLeg} stroke="#172a30" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <g ref={frontFootRef} transform={`translate(${initial.front.x} ${initial.front.y})`}><path d="M-5 0h12" stroke="#172a30" strokeWidth="5" strokeLinecap="round" /></g>
      <g ref={upperBodyRef} transform={initialUpper.transform}>
        <path d="m99 34 7-9" stroke="#bd8566" strokeWidth="8" strokeLinecap="round" />
        <path d="M69 54 92 31q6-5 13 2l-4 13-17 15-15-7Z" fill="#c6dfb3" stroke="#172a30" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="110" cy="19" r="10" fill="#bd8566" stroke="#172a30" strokeWidth="2" />
        <path d="M99 17c1-12 18-16 24-3l-1 4H99Z" fill="#315a4d" stroke="#172a30" strokeWidth="2" />
        <path d="M105 8v5m6-7v6m6-4v5m2 4h8" stroke="#c6dfb3" strokeWidth="2" strokeLinecap="round" />
      </g>
      <path ref={armRef} d={initialUpper.arm} stroke="#bd8566" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path ref={sleeveRef} d={initialUpper.sleeve} stroke="#315a4d" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}
