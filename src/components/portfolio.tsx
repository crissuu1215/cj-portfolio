'use client';

import {
    ArrowDown,
    ArrowRight,
    Bot,
    BrainCircuit,
    Check,
    Code2,
    Database,
    Github,
    GraduationCap,
    Mail,
    MapPin,
    Network,
    Server,
    Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Reveal } from '@/components/reveal';
import { Starfield } from '@/components/starfield';
import { ExternalLink, GlassCard, SectionHeading, Tag } from '@/components/ui';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import {
    experiences,
    flagshipProject,
    site,
    skillGroups,
} from '@/lib/site-data';

const sectionIds = ['about', 'expertise', 'experience', 'projects', 'contact'];
const expertiseIcons = [BrainCircuit, Code2, Server, Database];

function HeroVisual() {
    return (
        <div className="hero-visual-container">
            <div
                className="hero-visual"
                aria-label="Abstract diagram representing connected AI systems"
            >
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="visual-node node-center">
                    <BrainCircuit size={65} />
                </div>
                <div className="visual-node node-rag">
                    <Database size={18} />
                    <span>RAG</span>
                </div>
                <div className="visual-node node-tools">
                    <Sparkles size={18} />
                    <span>Tools</span>
                </div>
                <div className="visual-node node-api">
                    <Code2 size={18} />
                    <span>API</span>
                </div>
                <div className="coordinate coord-one">12.8797° N</div>
                <div className="coordinate coord-two">SYSTEM / ONLINE</div>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <section className="hero container" id="top">
            <Starfield starCount={100} className="hero-starfield" />
            <div className="hero-copy">
                <p className="availability">
                    <span /> Available
                </p>
                <h1>
                    Hi! I am{' '}
                    <span className="gradient-text text-highlight">Criss!</span>
                </h1>
                <p className="hero-lead">
                    I am a{' '}
                    <span className={`text-highlight`}>software engineer</span>{' '}
                    focused on turning AI concepts into dependable tools—from
                    agentic RAG workflows to polished web experiences.
                </p>
                <div className="hero-actions">
                    <a className="button primary" href="#projects">
                        Explore my work <ArrowRight size={17} />
                    </a>
                    <a
                        className="button secondary"
                        href={`mailto:${site.email}`}
                    >
                        Let&apos;s talk <Mail size={17} />
                    </a>
                </div>
                <div className="hero-meta">
                    <span>
                        <MapPin size={15} /> Philippines
                    </span>
                    <span>
                        <span className="status-dot" /> Full-stack · AI/LLM
                    </span>
                </div>
            </div>
            <HeroVisual />
            <a className="scroll-cue" href="#about">
                <ArrowDown size={17} /> Scroll to explore
            </a>
                <div className="starfield-bottom-glow" />
        </section>
    );
}

function About() {
    return (
        <section id="about" className="section container">
            <Reveal>
                <SectionHeading
                    eyebrow="01 / About"
                    title="Engineering at the intersection of product and intelligence."
                />
            </Reveal>
            <div className="about-grid">
                <Reveal className="about-copy">
                    <p>
                        I&apos;m a full-stack engineer experienced in enterprise
                        frontend and backend systems, AI-powered applications,
                        and production support. My work spans reusable
                        interfaces, resilient APIs, scheduled integrations, and
                        retrieval-driven LLM workflows.
                    </p>
                    <p>
                        I care about systems that are <em>useful</em>,
                        understandable, and built to last—not AI for its own
                        sake.
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <GlassCard className="principles-card">
                        <p className="card-label">How I work</p>
                        <ul>
                            <li>
                                <span>01</span>
                                <div>
                                    <strong>
                                        Compose, don&apos;t duplicate
                                    </strong>
                                    <small>
                                        Reusable foundations that make the next
                                        feature easier.
                                    </small>
                                </div>
                            </li>
                            <li>
                                <span>02</span>
                                <div>
                                    <strong>Design for failure</strong>
                                    <small>
                                        Clear errors, retry paths, and
                                        operational visibility.
                                    </small>
                                </div>
                            </li>
                            <li>
                                <span>03</span>
                                <div>
                                    <strong>Keep AI grounded</strong>
                                    <small>
                                        Relevant context, deliberate tools, and
                                        verifiable outputs.
                                    </small>
                                </div>
                            </li>
                        </ul>
                    </GlassCard>
                </Reveal>
            </div>
        </section>
    );
}

function Expertise() {
    return (
        <section id="expertise" className="section section-tinted">
            <div className="container">
                <Reveal>
                    <SectionHeading
                        eyebrow="02 / Expertise"
                        title="A full-stack toolkit, with AI at the center."
                        copy="From user interface to retrieval pipeline, I work across the layers required to ship complete intelligent applications."
                    />
                </Reveal>
                <div className="expertise-grid">
                    {skillGroups.map((group, index) => {
                        const Icon = expertiseIcons[index];
                        return (
                            <Reveal key={group.label} delay={index * 70}>
                                <GlassCard className="expertise-card">
                                    <span className="card-icon">
                                        <Icon size={21} />
                                    </span>
                                    <h3>{group.label}</h3>
                                    <div className="tag-list">
                                        {group.skills.map((skill) => (
                                            <Tag key={skill}>{skill}</Tag>
                                        ))}
                                    </div>
                                </GlassCard>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section id="experience" className="section container">
            <Reveal>
                <SectionHeading
                    eyebrow="03 / Experience"
                    title="Building software that works in the real world."
                />
            </Reveal>
            <div className="timeline">
                {experiences.map((item, index) => (
                    <Reveal
                        key={item.company}
                        delay={index * 90}
                        className="timeline-item"
                    >
                        <div className="timeline-marker">
                            <span>{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <article>
                            <div className="experience-head">
                                <div>
                                    <h3>{item.role}</h3>
                                    <p>
                                        {item.company}
                                        {item.location
                                            ? ` · ${item.location}`
                                            : ''}
                                    </p>
                                </div>
                                <time>{item.period}</time>
                            </div>
                            <ul>
                                {item.highlights.map((highlight) => (
                                    <li key={highlight}>
                                        <Check size={16} />{' '}
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

function ProjectVisual() {
    return (
        <div className="project-visual" aria-hidden="true">
            <div className="project-window">
                <div className="window-bar">
                    <i />
                    <i />
                    <i />
                    <span>northstar / ai-hr</span>
                </div>
                <div className="chat-preview">
                    <div className="chat-title">
                        <span>
                            <Bot size={17} />
                        </span>
                        <div>
                            <strong>AI HR</strong>
                            <small>Northstar employee assistant</small>
                        </div>
                        <i>Available</i>
                    </div>
                    <div className="chat-bubble user">
                        What is our remote-work policy?
                    </div>
                    <div className="chat-response">
                        <span>
                            <Bot size={14} />
                        </span>
                        <p>
                            Employees may work remotely according to their team
                            agreement. I found this in the{' '}
                            <b>Flexible Work Policy</b>.
                        </p>
                    </div>
                    <div className="workflow">
                        <span>intent</span>
                        <ArrowRight />
                        <span>retrieve</span>
                        <ArrowRight />
                        <span>respond</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Work() {
    return (
        <section id="projects" className="section section-tinted">
            <div className="container">
                <Reveal>
                    <SectionHeading
                        eyebrow="04 / Selected work"
                        title="AI that can retrieve, reason, and act."
                    />
                </Reveal>
                <Reveal>
                    <GlassCard className="project-card">
                        <div className="project-content">
                            <p className="eyebrow">{flagshipProject.eyebrow}</p>
                            <h3>{flagshipProject.title}</h3>
                            <p className="project-description">
                                {flagshipProject.description}
                            </p>
                            <ul className="feature-list">
                                {flagshipProject.features.map((feature) => (
                                    <li key={feature}>
                                        <Network size={16} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="tag-list project-stack">
                                {flagshipProject.stack.map((technology) => (
                                    <Tag key={technology}>{technology}</Tag>
                                ))}
                            </div>
                            <div className="project-links">
                                {flagshipProject.links.map((link) => (
                                    <ExternalLink
                                        key={link.href}
                                        href={link.href}
                                    >
                                        <Github size={16} /> {link.label}
                                    </ExternalLink>
                                ))}
                            </div>
                        </div>
                        <ProjectVisual />
                    </GlassCard>
                </Reveal>
            </div>
        </section>
    );
}

function Education() {
    return (
        <section className="section container education-section">
            <Reveal>
                <SectionHeading
                    eyebrow="05 / Foundation"
                    title="Curiosity, backed by fundamentals."
                />
            </Reveal>
            <div className="education-grid">
                <Reveal>
                    <GlassCard className="education-card">
                        <span className="card-icon">
                            <GraduationCap size={22} />
                        </span>
                        <p className="card-label">Education</p>
                        <h3>Bachelor of Science in Computer Engineering</h3>
                        <p>
                            Batangas State University — The National Engineering
                            University
                        </p>
                        <strong>2019–2023 · Cum Laude</strong>
                    </GlassCard>
                </Reveal>
                <Reveal delay={80}>
                    <GlassCard className="education-card publication">
                        <span className="card-icon">
                            <BrainCircuit size={22} />
                        </span>
                        <p className="card-label">IEEE Publication</p>
                        <h3>
                            Long Short-Term Memory-Based Static and Dynamic
                            Filipino Sign Language Recognition
                        </h3>
                        <p>
                            Research applying sequence learning to meaningful
                            human-computer interaction.
                        </p>
                        <strong>Published on IEEE Xplore</strong>
                    </GlassCard>
                </Reveal>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <Reveal>
                    <div className="contact-panel">
                        <p className="eyebrow">
                            <span>//</span> 06 / Contact
                        </p>
                        <h2>
                            Have a complex idea?
                            <br />
                            <span className="gradient-text">
                                Let&apos;s make it useful.
                            </span>
                        </h2>
                        <p>
                            I&apos;m always interested in thoughtful engineering
                            conversations—especially around AI applications,
                            full-stack systems, and tools that solve real
                            problems.
                        </p>
                        <div className="hero-actions">
                            <a
                                className="button primary"
                                href={`mailto:${site.email}`}
                            >
                                Start a conversation <Mail size={17} />
                            </a>
                            <ExternalLink
                                className="button secondary"
                                href={site.github}
                            >
                                View GitHub <Github size={17} />
                            </ExternalLink>
                        </div>
                        <span className="contact-email">{site.email}</span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export function Portfolio() {
    useScrollSpy(sectionIds);
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Expertise />
                <Experience />
                <Work />
                <Education />
                <Contact />
            </main>
            <footer>
                <div className="container">
                    <div className="logo-text-footer-left">
                        <a className="monogram" href="#top">
                            <span>CJ</span>
                            <i />
                        </a>
                        <div>
                            <p>Designed &amp; built by Criss Jericho Geli.</p>
                            <p>I use vim btw</p>
                        </div>
                    </div>
                    <span>© {new Date().getFullYear()}</span>
                </div>
            </footer>
        </>
    );
}
