import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { career, profile } from "@/data/siteContent";

type ExperiencePageProps = { params: Promise<{ slug: string }> };
const chapters = [...career].reverse();

export function generateStaticParams() {
  return career.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = career.find((item) => item.slug === slug);
  if (!experience) return {};
  return {
    title: `${experience.role} at ${experience.organization} | ${profile.name}`,
    description: experience.summary,
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const index = chapters.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const experience = chapters[index];
  const previous = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="experience-detail">
        <div className="site-shell detail-shell">
          <Link href="/#experience" className="detail-back"><ArrowLeft size={18} aria-hidden="true" /> Back to roadmap</Link>
          <div className="detail-hero">
            <div>
              <span className="eyebrow dark-eyebrow">{String(index + 1).padStart(2, "0")} / THE JOURNEY · {experience.domain}</span>
              <h1>{experience.role}<span className="accent-period">.</span></h1>
            </div>
            <div className="detail-intro"><span>{experience.period}</span><h2>{experience.organization}</h2><p>{experience.summary}</p></div>
          </div>
          <div className="detail-grid">
            <section aria-labelledby="detail-context"><span className="detail-label">01 / CONTEXT</span><h2 id="detail-context">The work behind<br />the work.</h2><p>{experience.context}</p></section>
            <section aria-labelledby="detail-contributions"><span className="detail-label">02 / CONTRIBUTIONS</span><h2 id="detail-contributions">What I worked on.</h2><ul className="detail-contributions">{experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul></section>
          </div>
          <section className="detail-stack" aria-labelledby="detail-tools"><span className="detail-label">03 / TOOLKIT</span><h2 id="detail-tools">Technologies</h2><ul>{experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></section>
          <nav className="detail-navigation" aria-label="More experiences">
            {previous ? <Link href={`/experience/${previous.slug}`}><ArrowLeft size={18} aria-hidden="true" /><span>Previous chapter <strong>{previous.organization}</strong></span></Link> : <span />}
            {next ? <Link href={`/experience/${next.slug}`}><span>Next chapter <strong>{next.organization}</strong></span><ArrowUpRight size={18} aria-hidden="true" /></Link> : <Link href="/#experience"><span>See the full roadmap <strong>All experiences</strong></span><ArrowUpRight size={18} aria-hidden="true" /></Link>}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
