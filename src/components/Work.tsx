import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { selectedWork } from "@/data/siteContent";

export default function Work() {
  return (
    <section id="work" className="work-section section-pad" aria-labelledby="work-title">
      <div className="site-shell">
        <div className="section-heading work-heading">
          <div><span className="eyebrow dark-eyebrow">01 / SELECTED WORK</span><h2 id="work-title">Built for the <em>real world.</em></h2></div>
          <p>Different problems. One approach: thoughtful systems that hold up beyond launch.</p>
        </div>

        <div className="work-grid">
          {selectedWork.map((work, index) => (
            <article key={work.number} className={`work-card work-card-${index + 1}`}>
              <div className="work-card-top"><span>{work.area}</span><span>/{work.number}</span></div>
              <div className="work-card-graphic" aria-hidden="true">
                {work.visual === "erp" ? <div className="erp-diagram"><span className="erp-hub">STUDIO / ERP</span><span className="erp-module">BOOKINGS</span><span className="erp-module">EVENT TICKETS</span><span className="erp-module">HANDMADE GOODS</span><span className="erp-partner">PARTNERS · PROVIDERS · ACCESS</span></div> : work.visual === "health" ? <div className="health-cross"><span>+</span><i /><i /></div> : <div className="market-lines"><span /><span /><span /><span /><span /><span /><span /></div>}
              </div>
              <div className="work-card-body">
                <p className="work-detail">{work.detail}</p>
                <h3>{work.title}</h3>
                <p className="work-description">{work.description}</p>
                <div className="work-tags">{work.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
                <Link className="work-link" href={`/experience/${work.experienceSlug}`}>Explore the experience <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="work-footer"><span>THE BEST WORK IS MORE THAN AN INTERFACE.</span><span>IT&apos;S EVERYTHING WORKING TOGETHER. ↗</span></div>
      </div>
    </section>
  );
}
