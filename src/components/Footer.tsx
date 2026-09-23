import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-top">
        <div><span className="footer-logo">d<span>.</span></span><p>Good systems. Better experiences.</p></div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
          <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span><Link href="/#home">Back to top ↑</Link></div>
    </footer>
  );
}
