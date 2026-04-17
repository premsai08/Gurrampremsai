import { useState } from 'react';
import { PerspectiveWrapper } from './PerspectiveWrapper';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { label: 'LI', href: 'https://linkedin.com/in/g-prem-sai' },
  { label: 'GH', href: 'https://github.com/premsai08' },
  { label: 'EM', href: 'mailto:premsaiachari1213@gmail.com' },
];

const certificates = [
  { label: 'Google Cybersecurity', src: '/assets/certs/Google Cybersecurity.jpg' },
  { label: 'Wipro Java', src: '/assets/certs/Wipro Talent Next Java Certification.jpg' },
  { label: 'Azure Fundamentals', src: '/assets/certs/Azure.jpg' },
  { label: 'Salesforce', src: '/assets/certs/salesforce.jpg' },
];

export function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex h-screen max-w-[1800px] overflow-hidden">
        <aside className="sticky top-0 hidden w-[30%] shrink-0 flex-col justify-between gap-10 border-r border-white/10 bg-slate-950/95 px-8 py-10 backdrop-blur-xl lg:flex">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border border-violet-400/20">
                <img src="/assets/profile.jpeg" alt="Gurram Prem Sai" className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Full-Stack Engineer</p>
                <h1 className="text-3xl font-semibold">Prem Sai</h1>
                <p className="text-sm text-slate-400">Django · Python · Java · AI · APIs</p>
              </div>
            </div>

            <nav className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-200 transition hover:-translate-x-1 hover:bg-violet-500/15"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Scroll the right panel to explore.</p>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-6 sm:p-10 lg:w-[70%]">
          <section id="home" className="mb-10">
            <PerspectiveWrapper>
              <div className="space-y-6 p-10 rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/50">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-violet-500/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-violet-200">01</span>
                  <button
                    onClick={() => setDrawerOpen(true)}
                    className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
                  >
                    Work with me
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Hi, I’m</p>
                  <h2 className="text-5xl font-semibold leading-tight text-white">Gurram Prem Sai</h2>
                  <p className="max-w-2xl text-lg leading-8 text-slate-300">
                    I build modern web experiences with reliable backend APIs, intelligent AI integrations, and polished production design.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-slate-300 font-mono text-sm">
                  <pre>{`<Hi, I'm Prem />
<I build Django APIs, React apps, and LLM-powered workflows />
<I ship secure, tested, Dockerized products />`}</pre>
                </div>
              </div>
            </PerspectiveWrapper>
          </section>

          <section id="skills" className="mb-10">
            <PerspectiveWrapper>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10">
                <div className="mb-8 space-y-3">
                  <p className="text-xs uppercase tracking-[0.32em] text-violet-300">Technical Skills</p>
                  <h3 className="text-3xl font-semibold text-white">Django, Python, Java, AI, and full-stack systems</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Backend', text: 'Django, REST, PostgreSQL, Redis, Docker, JWT, API design.' },
                    { title: 'AI / LLM', text: 'LangChain, Gemini, prompt engineering, RAG, intelligent workflows.' },
                    { title: 'Frontend', text: 'React, Tailwind, responsive interfaces, performance, accessibility.' },
                    { title: 'DevOps', text: 'Docker, CI/CD, testing, production reliability, monitoring.' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                      <h4 className="mb-3 text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </PerspectiveWrapper>
          </section>

          <section id="experience" className="mb-10">
            <PerspectiveWrapper>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10">
                <div className="mb-8 space-y-3">
                  <p className="text-xs uppercase tracking-[0.32em] text-violet-300">Experience</p>
                  <h3 className="text-3xl font-semibold text-white">AksharaPlus & SmartInternz</h3>
                </div>
                <div className="space-y-6">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                    <h4 className="text-xl font-semibold text-white">Full Stack Engineer Intern</h4>
                    <p className="mt-2 text-slate-300">AksharaPlus — Jan 2026 to Present</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
                      <li>Raised reliability to 99.9% across Docker microservices and API workflows.</li>
                      <li>Designed GraphQL + REST schemas and built test-first backend modules.</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                    <h4 className="text-xl font-semibold text-white">Salesforce Developer Intern</h4>
                    <p className="mt-2 text-slate-300">SmartInternz — Oct 2023 to Dec 2023</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
                      <li>Delivered CRM automation and integration tests for production readiness.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </PerspectiveWrapper>
          </section>

          <section id="certificates" className="mb-10">
            <PerspectiveWrapper>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10">
                <div className="mb-8 space-y-3">
                  <p className="text-xs uppercase tracking-[0.32em] text-violet-300">Certificate Gallery</p>
                  <h3 className="text-3xl font-semibold text-white">Google Cybersecurity, Wipro, Azure, and more</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {certificates.map((cert) => (
                    <div
                      key={cert.label}
                      className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-xl shadow-slate-950/30"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                        <img
                          src={cert.src}
                          alt={cert.label}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{cert.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PerspectiveWrapper>
          </section>

          <section id="contact" className="mb-10">
            <PerspectiveWrapper>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.32em] text-violet-300">Contact</p>
                  <h3 className="text-3xl font-semibold text-white">Ready to build the next project together?</h3>
                  <p className="max-w-2xl text-slate-400">
                    I’m available for full-stack roles, AI integrations, backend architecture, and internship projects.
                  </p>
                  <button
                    onClick={() => setDrawerOpen(true)}
                    className="rounded-full bg-violet-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
                  >
                    Work with me
                  </button>
                </div>
              </div>
            </PerspectiveWrapper>
          </section>
        </main>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-slate-950/95 p-8 shadow-2xl shadow-slate-950 transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          className="mb-8 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white"
        >
          Close
        </button>
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.32em] text-violet-300">Let’s collaborate</p>
          <h3 className="text-3xl font-semibold text-white">Send me a brief</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-white outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-white outline-none"
            />
            <textarea
              rows="5"
              placeholder="Project details"
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-white outline-none"
            />
            <button className="w-full rounded-full bg-violet-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-400">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
