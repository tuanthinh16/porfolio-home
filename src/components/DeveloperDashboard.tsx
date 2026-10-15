"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Download,
  Github,
  Globe2,
  Layers3,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  RotateCcw,
  Search,
  Terminal,
  Zap,
} from "lucide-react";
import {
  career,
  expertise,
  profile,
  selectedWork,
  structuredTechStack,
} from "@/data/siteContent";
import {
  AnimatedMetric,
  OrbitRoutes,
  ProjectIllustration,
} from "./DashboardVisuals";
import styles from "./DeveloperDashboard.module.css";

const technologies = [...new Set(career.flatMap((item) => item.technologies))];
const domains = [...new Set(career.map((item) => item.domain))];

const navigation = [
  { id: "home", label: "Overview", icon: LayoutDashboard },
  { id: "work", label: "Projects", icon: Layers3 },
  { id: "skills", label: "Tech stack", icon: Cpu },
  { id: "experience", label: "Career timeline", icon: BriefcaseBusiness },
  { id: "contact", label: "Connect", icon: Mail },
];

export default function DeveloperDashboard() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [chartReplay, setChartReplay] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [stackCategory, setStackCategory] = useState("all");
  const [stackQuery, setStackQuery] = useState("");
  const [metric, setMetric] = useState<"technologies" | "contributions">("technologies");
  const [showData, setShowData] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const filteredWork = selectedWork.filter(
    (work) =>
      (category === "all" || work.visual === category) &&
      `${work.title} ${work.description} ${work.stack.join(" ")} ${work.area}`
        .toLowerCase()
        .includes(query.trim().toLowerCase())
  );

  const filteredStack = structuredTechStack.filter((item) => {
    const matchesCategory = stackCategory === "all" || item.category === stackCategory;
    const target = `${item.name} ${item.description} ${item.domain} ${item.badge} ${item.categoryLabel}`.toLowerCase();
    const matchesQuery = target.includes(stackQuery.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const chartMaximum = Math.max(
    2,
    Math.ceil(Math.max(...career.map((item) => item[metric].length)) / 2) * 2
  );
  const currentRole = career[career.length - 1];

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    dashboardRef.current
      ?.querySelectorAll("[data-reveal]:not([data-revealed])")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [category, query, stackCategory, stackQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 }
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  function exportData() {
    const rows = [
      ["Organization", "Period", "Technologies", "Contributions"],
      ...career.map((item) => [
        item.organization,
        item.period,
        item.technologies.length,
        item.contributions.length,
      ]),
    ];
    const csv = rows
      .map((row) =>
        row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")
      )
      .join("\r\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" })
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "thinh-career-overview.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div ref={dashboardRef} className={styles.dashboard}>
      <div className={styles.bootProgress} aria-hidden="true">
        <span />
      </div>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <aside className={styles.sidebar}>
        <a href="#home" className={styles.brand} aria-label="Do Tuan Thinh — overview">
          <span className={styles.brandIcon} aria-hidden="true">
            <Image src="/app-icon.svg" alt="" width={32} height={32} unoptimized />
          </span>
          <span>
            TUAN THINH
            <small>DEVELOPER WORKSPACE</small>
          </span>
        </a>

        <div className={styles.workspace}>
          <span className={styles.statusDot} /> Personal workspace{" "}
          <span className={styles.version}>v.01</span>
        </div>

        <span className={styles.navLabel}>WORKSPACE</span>
        <nav aria-label="Main navigation" className={styles.navigation}>
          {navigation.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={activeSection === id ? "location" : undefined}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
              {id === "work" && (
                <small>{selectedWork.length.toString().padStart(2, "0")}</small>
              )}
              {id === "skills" && (
                <small>{structuredTechStack.length.toString().padStart(2, "0")}</small>
              )}
            </a>
          ))}
        </nav>

        <div className={styles.sidebarNote}>
          <div className={styles.noteIcon}>
            <Braces size={22} aria-hidden="true" />
          </div>
          <strong>Built with purpose.</strong>
          <p>Turning complex problems into software that just works.</p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            Explore GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.sidebarProfile}>
          <Image src="/avt.jpg" alt="" width={38} height={38} />
          <span>
            <strong>{profile.name}</strong>
            <small>Fullstack Software Engineer</small>
          </span>
        </div>
      </aside>

      <div className={styles.mainShell}>
        <header className={styles.topbar}>
          <div className={styles.breadcrumb}>
            Workspace <ChevronRight size={14} aria-hidden="true" />{" "}
            <strong>Overview</strong>
          </div>
          <div className={styles.topbarRight}>
            <span className={styles.location}>
              <Globe2 size={15} aria-hidden="true" /> Da Nang, VN <span>UTC+7</span>
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub"
              className={styles.iconButton}
            >
              <Github size={19} />
            </a>
            <a href={`mailto:${profile.email}`} className={styles.topContact}>
              Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </header>

        <main id="main" className={styles.main}>
          {/* SECTION 1: OVERVIEW */}
          <section id="home" className={styles.overview} aria-labelledby="overview-title">
            <div className={styles.pageHeading}>
              <div>
                <div className={styles.eyebrow}>
                  <span className={styles.statusDot} /> THE PERSON BEHIND THE CODE
                </div>
                <h1 id="overview-title">
                  A developer. <span>A whole ecosystem.</span>
                </h1>
                <p>Ideas, systems, and everything in between. Welcome to my workspace.</p>
              </div>
              <a href="#work" className={styles.outlineButton}>
                Explore workspace <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.heroGrid}>
              <article id="about" className={styles.heroCard} data-reveal>
                <div className={styles.heroTop}>
                  <span className={styles.pill}>
                    <span className={styles.statusDot} /> ENGINEERING WITH INTENT
                  </span>
                  <span className={styles.mono}>01 / INTRO</span>
                </div>
                <div className={styles.heroCopy}>
                  <span>Hello world, I&apos;m</span>
                  <h2>
                    Thinh<span>.</span>
                    <br />I build what&apos;s next<span className={styles.cyan}>_</span>
                  </h2>
                  <p>
                    Fullstack software engineer architecting modern web platforms, real-time
                    data streaming, enterprise ERP workflows, and automated CI/CD systems.
                  </p>
                  <a href={`mailto:${profile.email}`} className={styles.primaryButton}>
                    Let&apos;s build something <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
                <div className={styles.orbitArt} aria-hidden="true">
                  <OrbitRoutes />
                  <div className={styles.orbitOne} />
                  <div className={styles.orbitTwo} />
                  <div className={styles.orbitThree} />
                </div>
                <div className={styles.heroFooter}>
                  <span>
                    <MapPin size={13} aria-hidden="true" /> {profile.location}
                  </span>
                  <span>
                    <Zap size={13} aria-hidden="true" /> {currentRole.organization}
                  </span>
                  <a href="#experience">
                    View timeline <ChevronRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className={styles.focusCard} data-reveal>
                <div className={styles.cardEyebrow}>
                  <span>ACTIVE FOCUS</span>
                  <span className={styles.mono}>NOW / 2026</span>
                </div>
                <div className={styles.focusIcon} aria-hidden="true">
                  <BriefcaseBusiness size={24} />
                </div>
                <div className={styles.focusSubtitle}>
                  <span className={styles.focusDot} />
                  {currentRole.organization} · {currentRole.domain}
                </div>
                <h2>Studio ERP system</h2>
                <p>{currentRole.summary}</p>
                <div className={styles.focusTags}>
                  {currentRole.technologies.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <Link
                  href={`/experience/${currentRole.slug}`}
                  className={styles.focusLink}
                  aria-label="Read full case study for Luvina Software role"
                >
                  Inspect enterprise case study{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </div>

            <div className={styles.statGrid}>
              {[
                {
                  label: "Career chapters",
                  value: career.length,
                  caption: "Independent to enterprise",
                  icon: BriefcaseBusiness,
                  color: "cyan",
                },
                {
                  label: "Featured projects",
                  value: selectedWork.length,
                  caption: "Real-world systems",
                  icon: Layers3,
                  color: "lime",
                },
                {
                  label: "Tech stack tools",
                  value: structuredTechStack.length,
                  caption: "Production-tested technologies",
                  icon: Code2,
                  color: "orange",
                },
                {
                  label: "Industry domains",
                  value: domains.length,
                  caption: "ERP, Healthcare, Fintech & Web",
                  icon: Globe2,
                  color: "pink",
                },
              ].map(({ label, value, caption, icon: Icon, color }) => (
                <article
                  className={`${styles.statCard} ${styles[color]}`}
                  key={label}
                >
                  <div>
                    <span>{label}</span>
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <strong>
                    <AnimatedMetric value={value} />
                    <span aria-hidden="true">↗</span>
                  </strong>
                  <small>{caption}</small>
                </article>
              ))}
            </div>
          </section>

          {/* ANALYTICS & ARCHITECTURE */}
          <div className={styles.analyticsGrid}>
            <section
              className={`${styles.panel} ${styles.chartPanel}`}
              aria-labelledby="chart-title"
              data-reveal
            >
              <div className={styles.panelHeading}>
                <div>
                  <span className={styles.eyebrow}>THE BIGGER PICTURE</span>
                  <h2 id="chart-title">
                    Experience, in numbers<span className={styles.cyan}>.</span>
                  </h2>
                </div>
                <div className={styles.chartActions}>
                  <button
                    className={`${styles.iconButton} ${styles.replayButton}`}
                    onClick={() => setChartReplay((previous) => previous + 1)}
                    aria-label="Replay chart animation"
                    title="Replay chart animation"
                  >
                    <RotateCcw size={17} />
                  </button>
                  <button
                    className={styles.iconButton}
                    onClick={exportData}
                    aria-label="Download career statistics as CSV"
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
              <div className={styles.chartToolbar}>
                <span className={styles.chartLegend}>
                  <i />{" "}
                  {metric === "technologies"
                    ? "Stack entries per role"
                    : "Documented contributions"}
                </span>
                <div className={styles.segmented} role="group" aria-label="Chart metric">
                  <button
                    aria-pressed={metric === "technologies"}
                    onClick={() => setMetric("technologies")}
                  >
                    Stack
                  </button>
                  <button
                    aria-pressed={metric === "contributions"}
                    onClick={() => setMetric("contributions")}
                  >
                    Work
                  </button>
                </div>
              </div>
              <div key={`${metric}-${chartReplay}`} className={styles.chartStage}>
                <div className={styles.chartRenderLabel} aria-hidden="true">
                  <span className={styles.renderingLabel}>
                    <i /> Drawing data points
                  </span>
                  <span className={styles.renderedLabel}>
                    <Check size={11} /> Overview rendered
                  </span>
                  <span className={styles.renderTrack}>
                    <i />
                  </span>
                </div>
                <div
                  className={styles.barChart}
                  role="img"
                  aria-label={`Comparison of ${metric} across career chapters. ${career
                    .map((item) => `${item.organization}: ${item[metric].length}`)
                    .join(". ")}`}
                >
                  <div className={styles.chartGrid} aria-hidden="true">
                    {[chartMaximum, chartMaximum / 2, 0].map((value) => (
                      <span key={value}>{value}</span>
                    ))}
                  </div>
                  <div className={styles.chartScan} aria-hidden="true" />
                  <div className={styles.chartBars}>
                    {career.map((item, index) => (
                      <div className={styles.barColumn} key={item.slug}>
                        <div className={styles.barTrack}>
                          <div
                            className={styles.barEnvelope}
                            style={{
                              height: `${(item[metric].length / chartMaximum) * 100}%`,
                            }}
                          >
                            <div
                              className={`${styles.chartBar} ${styles[`bar${index}`]}`}
                              style={{ animationDelay: `${index * 110}ms` }}
                            />
                            <strong
                              className={styles.barValue}
                              style={{ animationDelay: `${index * 110 + 480}ms` }}
                            >
                              {item[metric].length}
                            </strong>
                          </div>
                        </div>
                        <span>{item.organization.split(" ")[0]}</span>
                        <small>{item.period.split(" — ")[0]}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.chartFootnote}>
                <span>Source: career history · counts, not proficiency</span>
                <button
                  onClick={() => setShowData(!showData)}
                  aria-expanded={showData}
                  aria-controls="career-data"
                >
                  {showData ? "Hide data" : "View data"}
                </button>
              </div>
              {showData && (
                <div id="career-data" className={styles.tableWrap}>
                  <table>
                    <caption>Career statistics</caption>
                    <thead>
                      <tr>
                        <th scope="col">Organization</th>
                        <th scope="col">Stack entries</th>
                        <th scope="col">Contributions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {career.map((item) => (
                        <tr key={item.slug}>
                          <th scope="row">{item.organization}</th>
                          <td>{item.technologies.length}</td>
                          <td>{item.contributions.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            <section
              className={`${styles.panel} ${styles.stackPanel}`}
              aria-labelledby="toolkit-title"
            >
              <div className={styles.panelHeading}>
                <div>
                  <span className={styles.eyebrow}>PRIMARY DISCIPLINES</span>
                  <h2 id="toolkit-title">Core architecture.</h2>
                </div>
                <Cpu size={22} className={styles.cyan} aria-hidden="true" />
              </div>
              <div className={styles.stackList}>
                {expertise.map((item, index) => (
                  <details key={item.title} className={styles.stackItem}>
                    <summary>
                      <span
                        className={`${styles.stackIcon} ${styles[`stack${index}`]}`}
                        aria-hidden="true"
                      >
                        {index === 0 ? (
                          <Braces size={22} />
                        ) : index === 1 ? (
                          <Globe2 size={22} />
                        ) : index === 2 ? (
                          <Database size={22} />
                        ) : (
                          <Terminal size={22} />
                        )}
                      </span>
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.number.split(" / ")[1].toLowerCase()} development</small>
                      </span>
                      <ChevronRight
                        size={16}
                        className={styles.stackArrow}
                        aria-hidden="true"
                      />
                    </summary>
                    <p>{item.description}</p>
                    <div className={styles.tags}>
                      {item.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
              <div className={styles.stackFooter}>
                <span className={styles.statusDot} /> Always learning. Always shipping.
              </div>
            </section>
          </div>

          {/* SECTION 2: PROJECTS */}
          <section id="work" className={styles.projectsSection} aria-labelledby="work-title">
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.eyebrow}>FROM IDEAS TO IMPACT</span>
                <h2 id="work-title">
                  Project explorer<span className={styles.cyan}>.</span>
                </h2>
              </div>
              <span className={styles.countBadge}>
                {selectedWork.length} SELECTED SYSTEMS
              </span>
            </div>
            <div className={styles.projectToolbar}>
              <div className={styles.filters} role="group" aria-label="Filter projects">
                {[
                  { value: "all", label: "All projects" },
                  { value: "erp", label: "Enterprise" },
                  { value: "health", label: "Healthcare" },
                  { value: "market", label: "Fintech" },
                  { value: "freelance", label: "Freelance & Web" },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    aria-pressed={category === filter.value}
                    onClick={() => setCategory(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <label className={styles.search}>
                <Search size={17} aria-hidden="true" />
                <span className={styles.srOnly}>Search projects</span>
                <input
                  type="search"
                  placeholder="Search projects or tech…"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            </div>
            <p className={styles.srOnly} role="status">
              {filteredWork.length} projects found
            </p>
            <div className={styles.projectGrid}>
              {filteredWork.map((work) => (
                <article
                  className={styles.projectCard}
                  key={work.number}
                  data-reveal
                >
                  <div
                    className={`${styles.projectVisual} ${styles[work.visual]}`}
                    aria-hidden="true"
                  >
                    <span className={styles.visualCode}>SYSTEM / {work.number}</span>
                    <ProjectIllustration kind={work.visual} />
                    <span className={styles.visualHint}>
                      EXPLORE THE SYSTEM <ArrowUpRight size={10} />
                    </span>
                  </div>
                  <div className={styles.projectBody}>
                    <div className={styles.projectCategory}>
                      {work.area}
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </div>
                    <h3>
                      <Link href={`/experience/${work.experienceSlug}`}>
                        {work.title}
                      </Link>
                    </h3>
                    <p>{work.description}</p>
                    <div className={styles.tags}>
                      {work.stack.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                    <div className={styles.projectBottom}>
                      <span>{work.detail}</span>
                      <Link
                        href={`/experience/${work.experienceSlug}`}
                        aria-label={`Explore ${work.area} experience`}
                      >
                        <ArrowUpRight size={19} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {filteredWork.length === 0 && (
              <div className={styles.emptyState}>
                <Search size={28} aria-hidden="true" />
                <h3>No matching projects</h3>
                <p>Try a technology such as C# or choose another domain.</p>
                <button
                  className={styles.outlineButton}
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </section>

          {/* SECTION 3: DEDICATED TECH STACK */}
          <section id="skills" className={styles.skillsSection} aria-labelledby="skills-title">
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.eyebrow}>TECHNICAL ARSENAL</span>
                <h2 id="skills-title">
                  Production tech stack<span className={styles.cyan}>.</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  From enterprise C#/.NET workflows and healthcare integrations to low-latency
                  financial streaming pipelines and reactive modern interfaces.
                </p>
              </div>
              <div className={styles.stackBadges}>
                <span className={styles.countBadge}>
                  {structuredTechStack.length} PRODUCTION TOOLS
                </span>
                <span className={`${styles.countBadge} ${styles.badgeLime}`}>
                  4 PRODUCTION DOMAINS
                </span>
              </div>
            </div>

            <div className={styles.projectToolbar}>
              <div className={styles.filters} role="group" aria-label="Filter tech stack">
                {[
                  { value: "all", label: `All (${structuredTechStack.length})` },
                  { value: "backend", label: "Backend & Core" },
                  { value: "frontend", label: "Frontend & UI" },
                  { value: "database", label: "Databases & Storage" },
                  { value: "realtime", label: "Real-Time & Arch" },
                  { value: "devops", label: "DevOps & Infra" },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    aria-pressed={stackCategory === tab.value}
                    onClick={() => setStackCategory(tab.value)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <label className={styles.search}>
                <Search size={17} aria-hidden="true" />
                <span className={styles.srOnly}>Filter technologies</span>
                <input
                  type="search"
                  placeholder="Filter by tech, domain or role…"
                  value={stackQuery}
                  onChange={(event) => setStackQuery(event.target.value)}
                />
              </label>
            </div>

            <p className={styles.srOnly} role="status">
              {filteredStack.length} technologies found
            </p>

            <div className={styles.techGrid}>
              {filteredStack.map((tech) => (
                <article
                  key={tech.name}
                  className={`${styles.techCard} ${styles[`tech_${tech.category}`]}`}
                  data-reveal
                >
                  <div className={styles.techCardHeader}>
                    <span className={styles.techCategory}>{tech.categoryLabel}</span>
                    <span className={styles.techDomain}>{tech.domain}</span>
                  </div>
                  <div className={styles.techCardBody}>
                    <div className={styles.techTitleRow}>
                      <h3>{tech.name}</h3>
                      <span className={styles.techBadge}>{tech.badge}</span>
                    </div>
                    <p>{tech.description}</p>
                  </div>
                  <div className={styles.techCardFooter}>
                    <span className={styles.techProficiency}>
                      <span className={styles.proficiencyDot} />
                      {tech.proficiency}
                    </span>
                    <span className={styles.techLevelBar} aria-hidden="true">
                      <span className={styles.techLevelFill} />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {filteredStack.length === 0 && (
              <div className={styles.emptyState}>
                <Search size={28} aria-hidden="true" />
                <h3>No technologies found</h3>
                <p>Try searching for C#, SQL Server, Kafka, Next.js, or reset the filters.</p>
                <button
                  className={styles.outlineButton}
                  onClick={() => {
                    setStackQuery("");
                    setStackCategory("all");
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}

            <div className={styles.corePillarsWrap}>
              <div className={styles.panelHeading}>
                <div>
                  <span className={styles.eyebrow}>ARCHITECTURE & SPECIALIZATION</span>
                  <h3>Core engineering pillars<span className={styles.lime}>.</span></h3>
                </div>
                <span className={styles.countBadge}>4 CORE PILLARS</span>
              </div>
              <div className={styles.corePillarsGrid}>
                {expertise.map((item, index) => (
                  <div key={item.title} className={styles.pillarCard} data-reveal>
                    <div className={styles.pillarHeader}>
                      <span
                        className={`${styles.stackIcon} ${styles[`stack${index}`]}`}
                        aria-hidden="true"
                      >
                        {index === 0 ? (
                          <Braces size={20} />
                        ) : index === 1 ? (
                          <Globe2 size={20} />
                        ) : index === 2 ? (
                          <Database size={20} />
                        ) : (
                          <Terminal size={20} />
                        )}
                      </span>
                      <div>
                        <span className={styles.pillarCode}>{item.number}</span>
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                    <p>{item.description}</p>
                    <div className={styles.tags}>
                      {item.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: TIMELINE */}
          <section
            id="experience"
            className={styles.panel}
            aria-labelledby="experience-title"
          >
            <div className={styles.panelHeading}>
              <div>
                <span className={styles.eyebrow}>THE JOURNEY SO FAR</span>
                <h2 id="experience-title">Every chapter adds a new layer.</h2>
              </div>
              <span className={styles.countBadge}>CAREER LOG</span>
            </div>
            <div className={styles.timeline}>
              {[...career].reverse().map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/experience/${item.slug}`}
                  className={styles.timelineItem}
                >
                  <span className={styles.timelineMarker} aria-hidden="true">
                    {index === 0 ? <Zap size={17} /> : <BriefcaseBusiness size={17} />}
                  </span>
                  <span className={styles.timelinePeriod}>
                    {item.period}
                    {index === 0 && <small>CURRENT</small>}
                  </span>
                  <span className={styles.timelineRole}>
                    <strong>{item.role}</strong>
                    <span>{item.organization}</span>
                  </span>
                  <span className={styles.timelineDomain}>{item.domain}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 5: CONTACT */}
          <section
            id="contact"
            className={styles.contact}
            aria-labelledby="contact-title"
          >
            <div>
              <span className={styles.eyebrow}>NEXT CHAPTER: YOUR IDEA</span>
              <h2 id="contact-title">
                Good things start with
                <br />a <span>conversation.</span>
              </h2>
              <p>Have a challenge worth solving? Let&apos;s connect the dots.</p>
            </div>
            <div className={styles.contactActions}>
              <a href={`mailto:${profile.email}`} className={styles.primaryButton}>
                Start a conversation <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <button className={styles.copyButton} onClick={copyEmail}>
                {copied ? <Check size={16} aria-hidden="true" /> : <Mail size={16} aria-hidden="true" />}
                {copied ? "Email copied" : "Copy email address"}
              </button>
              <span role="status" className={styles.copyStatus}>
                {copyError
                  ? `Copy unavailable. Email: ${profile.email}`
                  : copied
                  ? profile.email
                  : ""}
              </span>
            </div>
          </section>

          <footer className={styles.footer}>
            <a href="#home" className={styles.footerBrand}>
              Do Tuan Thinh <span>/ crafted with intention</span>
            </a>
            <span>Less noise. More meaningful software.</span>
            <div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// Config added 2026-10-14: Export default dashboard view configuration for developer portfolio
export const dashboardRuntimeConfig = {
  theme: "developer-workspace",
  version: "1.0.0",
  primaryTech: "Fullstack Engineering",
  lastUpdated: "2026-10-14",
};
