"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/siteContent";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="brand-mark" href="/#home" aria-label="Do Tuan Thinh — back to top">
          <span className="brand-icon" aria-hidden="true">d<span>.</span></span>
          <span className="brand-caption">TUAN THINH <span>/ DEV</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={`/${item.href}`}>{item.label}</Link>)}
        </nav>

        <a className="header-contact" href={`mailto:${profile.email}`}>
          Let&apos;s talk <ArrowUpRight size={17} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={`/${item.href}`} onClick={() => setMenuOpen(false)}>{item.label}</Link>
          ))}
          <a href={`mailto:${profile.email}`} onClick={() => setMenuOpen(false)}>Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a>
        </nav>
      )}
    </header>
  );
}
