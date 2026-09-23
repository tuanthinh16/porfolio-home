import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/siteContent";

export default function About() {
  return (
    <section id="about" className="about-section section-pad" aria-labelledby="about-title">
      <div className="site-shell about-layout">
        <div className="about-portrait">
          <Image src="/avt.jpg" alt="Portrait of Do Tuan Thinh" width={768} height={1344} sizes="(max-width: 800px) 100vw, 440px" />
          <span className="portrait-label">THE PERSON BEHIND THE CODE ↗</span>
        </div>
        <div className="about-copy">
          <span className="eyebrow dark-eyebrow">04 / ABOUT ME</span>
          <h2 id="about-title">Curious by nature.<br /><em>Practical by design.</em></h2>
          <p>I&apos;m {profile.name}, a fullstack developer with a backend focus. I enjoy untangling complex problems and building systems people can count on.</p>
          <p>Today I focus on enterprise ERP, from bookings and sales to partner-specific operations and permissions, with an interest in broader ERP/CRM solutions. My earlier work in healthcare integrations and real-time trading informs how I build reliable systems.</p>
          <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Find me on GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
