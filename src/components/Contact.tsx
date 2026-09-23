import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/siteContent";

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
      <div className="site-shell contact-inner">
        <span className="eyebrow dark-eyebrow">05 / GET IN TOUCH</span>
        <h2 id="contact-title">Have a good<br /><em>problem to solve?</em></h2>
        <div className="contact-bottom">
          <p>I&apos;m always up for a thoughtful conversation about the next thing to build.</p>
          <a href={`mailto:${profile.email}`} className="contact-link">Email me <ArrowUpRight size={28} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
