import { ArrowUpRight } from "lucide-react";
import { additionalSkills, expertise } from "@/data/siteContent";

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-pad" aria-labelledby="skills-title">
      <div className="site-shell">
        <div className="section-heading skills-heading">
          <div><span className="eyebrow">02 / WHAT I DO</span><h2 id="skills-title">Focused on what <em>makes it work.</em></h2></div>
          <p>Core strengths up front, with the rest of my toolkit close behind.</p>
        </div>
        <div className="skills-grid">
          {expertise.map((group) => (
            <article className="skill-panel" key={group.number}>
              <span className="skill-index">{group.number} <ArrowUpRight size={17} aria-hidden="true" /></span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </article>
          ))}
        </div>
        <details className="skills-additional">
          <summary>Also in my toolkit <span aria-hidden="true">+</span></summary>
          <ul>{additionalSkills.map((tool) => <li key={tool}>{tool}</li>)}</ul>
        </details>
      </div>
    </section>
  );
}
