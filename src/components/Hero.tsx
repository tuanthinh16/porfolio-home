import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { profile } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="site-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> HELLO, I&apos;M <span className="eyebrow-divider">/</span> {profile.location.toUpperCase()}</p>
          <h1 id="hero-title">Do Tuan <em>Thinh</em><span className="accent-period">.</span></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-description">I build practical systems for business operations, with a focus on ERP and connected workflows. Currently building a multi-partner studio ERP at Luvina Software.</p>
          <div className="hero-actions">
            <a className="button button-lime" href="#work">Explore my work <ArrowUpRight size={20} aria-hidden="true" /></a>
            <a className="text-link text-link-light" href={`mailto:${profile.email}`}>Get in touch <MoveUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-index">SYSTEM / 001 <span>IN MOTION →</span></div>
          <div className="art-orbit art-orbit-outer" />
          <div className="art-orbit art-orbit-middle" />
          <div className="art-orbit art-orbit-inner" />
          <div className="art-axis art-axis-horizontal" />
          <div className="art-axis art-axis-vertical" />
          <div className="art-node art-node-top">DATA IN</div>
          <div className="art-node art-node-right">API OUT</div>
          <div className="art-core"><span>BUILD</span><strong>→</strong><span>CONNECT</span></div>
          <div className="art-corner art-corner-top">+</div>
          <div className="art-corner art-corner-bottom">+</div>
          <div className="art-bottom">ENGINEERING THE INVISIBLE.</div>
        </div>
      </div>
      <div className="site-shell hero-bottom">
        <span>BASED IN {profile.location.toUpperCase()}</span>
        <a href="#work">SCROLL TO EXPLORE <ArrowDown size={16} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
