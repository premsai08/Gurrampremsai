import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExecutiveScene } from './ExecutiveScene';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

const profile = {
  name: 'G Prem Sai',
  role: 'Full Stack Engineer',
  focus: 'Python - Django - GraphQL - LMS Platforms - AI-enabled systems',
  location: 'Bengaluru, Karnataka, India',
  email: 'premsaiachari1213@gmail.com',
  whatsapp: 'https://wa.me/918688161221?text=Hi%20Prem%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
};

const strengths = [
  'I turn ambiguous product requirements into clean backend contracts, usable interfaces, and measurable delivery.',
  'I work close to production concerns: performance, failure paths, structured debugging, and maintainable releases.',
  'I bring a builder mindset: move quickly, document clearly, and leave systems easier to operate than I found them.',
];

const achievements = [
  { value: '99.9%', label: 'Reliability mindset across Dockerized services' },
  { value: '240+', label: 'Professional network connections' },
  { value: '4', label: 'Core layers: backend, frontend, cloud, AI' },
];

const workCards = [
  {
    title: 'Learning Management Platform',
    meta: 'AksharaPlus - Full Stack Engineering',
    text: 'Working across a live LMS product where reliability, clear data flows, and fast iteration matter more than decorative code.',
  },
  {
    title: 'Backend Systems & APIs',
    meta: 'Django - REST - GraphQL - Docker',
    text: 'Designing API layers that are easy to consume, easy to test, and stable enough for teams to build confidently on top of them.',
  },
  {
    title: 'Applied AI Integrations',
    meta: 'LLM workflows - RAG thinking - Prompt systems',
    text: 'Connecting AI capability to real application logic: prompts, data, validation, interface states, and dependable user outcomes.',
  },
];

const experience = [
  {
    role: 'Full Stack Engineer',
    company: 'AksharaPlus',
    period: 'Jan 2026 - Present',
    details:
      'Building and improving LMS platform features across frontend and backend layers, with GraphQL APIs, JavaScript, Django, structured debugging, and delivery habits shaped by production work.',
  },
  {
    role: 'Salesforce Developer Intern',
    company: 'SmartInternz',
    period: 'Oct 2023 - Dec 2023',
    details:
      'Delivered CRM workflow automation, custom logic, Lightning Web Components, and API integrations while learning how business operations translate into software systems.',
  },
];

const credentials = [
  { label: 'Google Cybersecurity', issuer: 'Google', src: '/assets/certs/Google Cybersecurity.jpg' },
  { label: 'Wipro Certified Full Stack Java', issuer: 'Wipro TalentNext', src: '/assets/certs/Wipro Talent Next Java Certification.jpg' },
  { label: 'Azure Fundamentals', issuer: 'Microsoft Azure', src: '/assets/certs/Azure.jpg' },
  { label: 'Salesforce Developer', issuer: 'SmartInternz', src: '/assets/certs/salesforce.jpg' },
];

function Reveal({ children, className = '', ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCredential, setActiveCredential] = useState(credentials[0]);

  return (
    <div className="site-shell">
      <header className="nav-shell">
        <a className="identity" href="#top" aria-label="G Prem Sai home">
          <img src="/assets/profile-professional.png" alt="" />
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="nav-cta" onClick={() => setDrawerOpen(true)}>
          Discuss role
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="hero-copy"
            >
              <p className="kicker">Available for teams that expect ownership</p>
              <h1>Full-stack engineer building systems that earn trust in production.</h1>
              <p className="hero-lede">
                I build web platforms where backend architecture, product experience, and operational discipline meet. My work sits at the intersection of Django, GraphQL, React, LMS workflows, and applied AI.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#work">
                  View engineering profile
                </a>
                <a className="secondary-link" href={profile.whatsapp} target="_blank" rel="noreferrer">
                  Contact Prem
                </a>
              </div>
            </motion.div>

            <motion.div
              className="portrait-system"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.08 }}
            >
              <ExecutiveScene />
              <div className="portrait-card">
                <img src="/assets/profile-professional.png" alt="G Prem Sai professional portrait" />
                <div>
                  <span>{profile.location}</span>
                  <strong>{profile.focus}</strong>
                </div>
              </div>
            </motion.div>
          </div>

          <Reveal className="achievement-row">
            {achievements.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </Reveal>
        </section>

        <section id="work" className="content-section">
          <Reveal className="section-heading">
            <p>Executive summary</p>
            <h2>Clear thinking, reliable systems, and the discipline to ship.</h2>
          </Reveal>

          <div className="summary-grid">
            <Reveal className="statement-card">
              <p>
                I am the engineer you bring into a team when the product needs someone who can understand the business goal, shape the technical path, and move the work forward without drama.
              </p>
              <ul>
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>

            <div className="work-grid">
              {workCards.map((card) => (
                <Reveal className="work-card" key={card.title}>
                  <span>{card.meta}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="content-section">
          <Reveal className="section-heading">
            <p>Experience</p>
            <h2>Hands-on delivery across platform engineering, product UI, and automation.</h2>
          </Reveal>

          <div className="timeline">
            {experience.map((item) => (
              <Reveal className="timeline-item" key={`${item.company}-${item.role}`}>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                </div>
                <p>{item.details}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="credentials" className="content-section">
          <Reveal className="section-heading">
            <p>Credentials</p>
            <h2>Credentials that support the work: security, full stack, cloud, and CRM systems.</h2>
          </Reveal>

          <div className="credential-grid">
            {credentials.map((credential) => (
              <Reveal
                className="credential-card"
                key={credential.label}
                onMouseEnter={() => setActiveCredential(credential)}
                onFocus={() => setActiveCredential(credential)}
                tabIndex={0}
              >
                <img src={credential.src} alt={credential.label} />
                <div>
                  <span>{credential.issuer}</span>
                  <strong>{credential.label}</strong>
                  <small>Hover for full preview</small>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="certificate-preview">
            <div>
              <span>{activeCredential.issuer}</span>
              <strong>{activeCredential.label}</strong>
              <p>Hover a certificate card to preview it here in a larger inspection view.</p>
            </div>
            <img src={activeCredential.src} alt={`${activeCredential.label} full preview`} />
          </Reveal>
        </section>

        <section id="contact" className="contact-section">
          <Reveal className="contact-panel">
            <div>
              <p>Contact</p>
              <h2>For roles where reliability, product taste, and full-stack ownership matter.</h2>
              <span>{profile.email} - WhatsApp available for direct professional messages</span>
            </div>
            <a className="primary-link" href={profile.whatsapp} target="_blank" rel="noreferrer">
              Message on WhatsApp
            </a>
          </Reveal>
        </section>

        <footer className="creator-mark">
          <a className="creator-logo" href="#top" aria-label="Created by G Prem Sai">
            <img src="/assets/profile-professional.png" alt="" />
            <span>
              <strong>Created by G Prem Sai</strong>
              <small>Full-stack engineering portfolio</small>
            </span>
          </a>
        </footer>
      </main>

      <div className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`contact-drawer ${drawerOpen ? 'open' : ''}`}>
        <button className="drawer-close" onClick={() => setDrawerOpen(false)}>
          Close
        </button>
        <p className="kicker">Professional contact</p>
        <h2>Start with a short message.</h2>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.whatsapp} target="_blank" rel="noreferrer">
          Message on WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/g-prem-sai-739571236/" target="_blank" rel="noreferrer">
          LinkedIn profile
        </a>
        <a href="https://github.com/premsai08" target="_blank" rel="noreferrer">
          GitHub work
        </a>
      </aside>
    </div>
  );
}
