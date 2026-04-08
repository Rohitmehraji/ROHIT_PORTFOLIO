import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X
} from 'lucide-react'

const rotatingRoles = [
  'AI Engineer',
  'Machine Learning Builder',
  'RAG Systems Developer',
  'Data Science Innovator',
  'Full-Stack AI Creator'
]

const skillGroups = [
  { title: 'AI / ML', icon: Brain, skills: ['Regression', 'Classification', 'Transformers', 'T5', 'BERT', 'TensorFlow'] },
  { title: 'NLP / LLM', icon: Sparkles, skills: ['NLP', 'RAG', 'LangChain', 'FAISS', 'Semantic Search', 'Prompt Engineering', 'Embeddings'] },
  { title: 'Data Engineering', icon: Database, skills: ['ETL Pipelines', 'Feature Engineering', 'Data Cleaning', 'Automation', 'Data Validation', 'Predictive Analytics'] },
  { title: 'Backend / APIs', icon: Cpu, skills: ['FastAPI', 'REST APIs', 'Microservices', 'API Integration', 'Model Deployment', 'Linux'] },
  { title: 'Frontend / Web', icon: Code2, skills: ['JavaScript', 'HTML', 'CSS', 'Streamlit', 'Dashboards', 'Responsive UI'] },
  { title: 'Cloud / Tools', icon: Cloud, skills: ['Azure', 'AWS Basics', 'GCP Basics', 'OpenAI API', 'Azure OpenAI API', 'Pandas', 'NumPy', 'Scikit-learn', 'Git', 'SQL', 'Python'] }
]

const experience = [
  {
    role: 'Data Science Intern',
    company: 'Sarvarth',
    duration: 'May 2025 – Sept 2025',
    highlights: [
      'Improved reporting accuracy by 15% through machine learning models and structured feature engineering.',
      'Built automated ETL pipelines that reduced manual effort by 30%.',
      'Delivered interactive Streamlit dashboards serving 100+ users with real-time KPI visibility.'
    ]
  },
  {
    role: 'AI/ML Intern',
    company: 'Badkul Technology',
    duration: 'Mar 2025 – May 2025',
    highlights: [
      'Integrated Python-based ML inference output into backend workflows via REST APIs and structured JSON.',
      'Automated preprocessing, reporting scripts, and validation routines for repeatable delivery.',
      'Supported backend optimization and API performance tuning to reduce redundant computation.'
    ]
  },
  {
    role: 'AI Development Trainee',
    company: 'CEDMAP MSME',
    duration: 'Jul 2025 – Sept 2025',
    highlights: [
      'Implemented transformer-based NLP models with Hugging Face.',
      'Improved summarization performance and inference efficiency.',
      'Integrated vector databases and orchestration workflows, lowering AI response latency by 20%.'
    ]
  }
]

const projects = [
  {
    title: 'Hugging Face Transformer Text Summarizer',
    description: 'A T5-powered NLP summarization engine designed to accelerate knowledge workflows.',
    problem: 'Manual document review consumed substantial analyst time and delayed delivery.',
    stack: ['Python', 'Hugging Face', 'PyTorch', 'T5', 'Streamlit'],
    outcome: 'Reduced manual document review time by 40% using optimized tokenization and chunked inference.',
    github: 'https://github.com/Rohitmehraji/hugging-face-transformer-summerizer',
    demo: '#'
  },
  {
    title: 'AI Chatbot (RAG-Based)',
    description: 'Retrieval-Augmented conversational system for reliable, context-aware responses.',
    problem: 'Traditional chatbots struggled with precision and continuity across domain-specific queries.',
    stack: ['LangChain', 'FAISS', 'RAG', 'Embeddings', 'Python'],
    outcome: 'Improved contextual accuracy by 30% while keeping interactions low-latency.',
    github: 'https://github.com/Rohitmehraji/AI-CHATBOT',
    demo: '#'
  },
  {
    title: 'Student Data Analyst Project',
    description: 'End-to-end analytics pipeline turning raw academic data into actionable insight.',
    problem: 'Disconnected student records made reporting slow, inconsistent, and error-prone.',
    stack: ['Pandas', 'SQL', 'Data Validation', 'Visualization'],
    outcome: 'Improved reporting efficiency by 18% through automated cleaning and metric generation.',
    github: 'https://github.com/Rohitmehraji/my-data-analyst-project',
    demo: '#'
  }
]

const metrics = [
  { value: 15, suffix: '%', label: 'Reporting Accuracy Improvement' },
  { value: 30, suffix: '%', label: 'Reduction in Manual Processing' },
  { value: 20, suffix: '%', label: 'Lower AI Response Latency' },
  { value: 40, suffix: '%', label: 'Faster Document Review' },
  { value: 18, suffix: '%', label: 'Reporting Efficiency Improvement' },
  { value: 100, suffix: '+', label: 'Dashboard Users Served' }
]

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Impact', 'Contact']

function Counter({ end, suffix }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(end)
      return
    }
    let frame
    let start
    const duration = 1200
    const tick = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end])
  return (
    <span className="text-4xl font-semibold tracking-tight text-white dark:text-white">{value}{suffix}</span>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeRole, setActiveRole] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    const interval = setInterval(() => setActiveRole((prev) => (prev + 1) % rotatingRoles.length), 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const ratio = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0
      setScrollProgress(ratio)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('revealed')),
      { threshold: 0.2 }
    )
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))
    return () => reveal.disconnect()
  }, [])

  const particles = useMemo(() => Array.from({ length: 28 }, (_, i) => i), [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-100 text-slate-900 transition-colors duration-500 dark:bg-ink dark:text-slate-100">
      <div style={{ width: `${scrollProgress}%` }} className="fixed left-0 top-0 z-[80] h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-teal-300" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        {particles.map((i) => (
          <span key={i} className="particle" style={{ '--delay': `${i * 0.3}s`, '--x': `${(i * 13) % 100}%`, '--dur': `${8 + (i % 6)}s` }} />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-100/70 backdrop-blur-xl transition dark:bg-[#050913]/65">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="text-sm font-semibold tracking-[0.18em] text-cyan-400">ROHIT KUMAR</a>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-[65px] w-full flex-col gap-4 border-b border-white/10 bg-[#080e19]/95 p-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-none md:bg-transparent md:p-0`}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-cyan-300" onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <button className="rounded-full border border-white/20 px-3 py-1 text-xs" onClick={() => setDarkMode((m) => !m)}>
              {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </nav>
      </header>

      <main id="home" className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8">
        <section className="reveal grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles size={14} /> Building intelligent products from day one
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Rohit Kumar
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-200 bg-clip-text text-transparent">AI Engineer crafting production-ready intelligence</span>
            </h1>
            <p className="mt-5 h-8 text-lg text-slate-300">
              {rotatingRoles[activeRole]}
            </p>
            <p className="mt-4 max-w-2xl text-slate-300">
              I design and ship AI systems that blend machine learning, NLP, and backend execution into measurable business outcomes—from ETL automation to RAG-powered interfaces and deployable APIs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">View Projects <ArrowRight size={16} /></a>
              {/* Replace ./assets/resume.pdf with Rohit's latest CV file in public/assets/ for direct download. */}
              <a href="./assets/resume.pdf" download className="btn-secondary"><Download size={16} /> Download Resume</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-xs">
              {['15% Accuracy Improvement', '30% Less Manual Effort', '20% Lower AI Latency', '100+ Dashboard Users'].map((pill) => (
                <span key={pill} className="metric-pill">{pill}</span>
              ))}
            </div>
          </div>

          <aside className="glass-card relative mx-auto max-w-sm overflow-hidden p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            {/* Replace ./assets/profile.jpg with Rohit's profile image in public/assets/. Fallback avatar auto-renders if unavailable. */}
            <img
              src="./assets/profile.jpg"
              alt="Rohit Kumar"
              className="mb-4 h-48 w-full rounded-2xl border border-white/20 object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling
                if (fallback) fallback.classList.remove('hidden')
              }}
            />
            <div className="hidden h-48 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-sky-500/20 to-cyan-400/20 text-6xl font-semibold text-cyan-200">RK</div>
            <h3 className="text-xl font-semibold">Rohit Kumar</h3>
            <p className="mt-1 text-sm text-slate-300">AI Engineer | ML Engineer | Data Science Intern | Full-Stack AI Builder</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-300"><MapPin size={14} /> Madhya Pradesh, India</p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-xl border border-white/20 bg-white/5 p-2"><p className="text-lg font-semibold">3</p><p>Internships</p></div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-2"><p className="text-lg font-semibold">6+</p><p>AI Domains</p></div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-2"><p className="text-lg font-semibold">100+</p><p>Users Served</p></div>
            </div>
          </aside>
        </section>

        <section id="about" className="reveal mt-24 grid gap-6 md:grid-cols-3">
          <div className="glass-card md:col-span-2">
            <h2 className="section-title">About / Profile Summary</h2>
            <p className="mt-4 text-slate-300">
              I approach AI engineering like product engineering: define the operational bottleneck, architect the right data flow, train or integrate the most efficient model stack, and ship a system that teams can trust in production. My experience spans transformers, RAG pipelines, semantic retrieval, ETL automation, and backend API integration.
            </p>
            <p className="mt-4 text-slate-300">
              As a fresher, I bring a builder mindset with execution depth—converting experimentation into deployable outcomes. I focus on systems that improve accuracy, reduce latency, and unlock scalable decision intelligence for real users.
            </p>
          </div>
          <div className="glass-card">
            <h3 className="font-semibold">Now Focused On</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Production RAG with vector search and memory.</li>
              <li>• Transformer tuning and efficient NLP inference.</li>
              <li>• API-first AI deployment with measurable impact.</li>
              <li>• Full-stack AI products for startup velocity.</li>
            </ul>
          </div>
        </section>

        <section id="skills" className="reveal mt-24">
          <h2 className="section-title">Skills & Tech Stack</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="glass-card tilt-card">
                <group.icon className="mb-4 text-cyan-300" size={20} />
                <h3 className="font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="reveal mt-24">
          <h2 className="section-title">Experience Timeline</h2>
          <div className="relative mt-8 space-y-7 border-l border-cyan-300/30 pl-8">
            {experience.map((job, idx) => (
              <article key={job.company + job.role} className="glass-card relative">
                <span className="absolute -left-[42px] top-7 h-4 w-4 rounded-full border border-cyan-200 bg-cyan-400/70 shadow-neon" />
                <p className="text-xs uppercase tracking-[0.15em] text-cyan-300">{job.duration}</p>
                <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
                <p className="text-sm text-slate-300">{job.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {job.highlights.map((item) => <li key={item}>• {item}</li>)}
                </ul>
                {idx === 0 && <div className="mt-4 inline-flex rounded-full border border-teal-300/40 bg-teal-300/10 px-3 py-1 text-xs text-teal-200">15% accuracy uplift | 30% effort reduction</div>}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="reveal mt-24">
          <h2 className="section-title">Featured Projects</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="glass-card project-card">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <p className="mt-4 text-sm"><span className="text-cyan-300">Problem:</span> {project.problem}</p>
                <p className="mt-3 text-sm"><span className="text-teal-300">Outcome:</span> {project.outcome}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => <span key={tech} className="tag">{tech}</span>)}
                </div>
                <div className="mt-5 flex gap-3">
                  <a className="btn-secondary !px-3 !py-2" href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
                  <a className="btn-secondary !px-3 !py-2" href={project.demo}><ExternalLink size={15} /> Live Demo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="reveal mt-24 grid gap-6 lg:grid-cols-2">
          <article className="glass-card">
            <h2 className="section-title">Education</h2>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">2021 – 2025</p>
              <h3 className="mt-2 text-xl font-semibold">B.Tech in Information Technology</h3>
              <p className="mt-1 text-slate-300">Jabalpur Engineering College</p>
              <p className="mt-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-sm">CGPA: 7.08 / 10</p>
            </div>
          </article>
          <article className="glass-card">
            <h2 className="section-title">Certifications & Leadership</h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              {['Cloud Computing Bootcamp — Yhills', 'Django Web Development — Udemy', 'Branch Representative, TEDx JEC 2024', 'Sports Coordinator, Aavahan Fest 2024', 'Leadership'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-3">{item}</div>
              ))}
            </div>
          </article>
        </section>

        <section id="impact" className="reveal mt-24">
          <h2 className="section-title">Achievements / Impact Metrics</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-card text-center">
                <Counter end={metric.value} suffix={metric.suffix} />
                <p className="mt-3 text-sm text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal mt-24 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="glass-card">
            <h2 className="section-title">Resume Download</h2>
            <p className="mt-4 text-slate-300">Recruiters, founders, and hiring teams can download a complete profile including projects, internship outcomes, technical stack, and deployment-focused AI experience.</p>
            <a href="./assets/resume.pdf" download className="btn-primary mt-6 inline-flex"><Download size={16} /> Download Resume PDF</a>
          </article>
          <aside className="glass-card">
            <h3 className="font-semibold">Resume Preview</h3>
            <p className="mt-3 text-sm text-slate-300">One-page profile focused on AI engineering capability, measurable internship impact, and project execution depth.</p>
            <div className="mt-4 rounded-xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/10 to-sky-500/10 p-4 text-xs">
              <p className="font-semibold text-cyan-200">./assets/resume.pdf</p>
              <p className="mt-2 text-slate-300">Add your latest resume PDF in public/assets/ to enable direct download.</p>
            </div>
          </aside>
        </section>

        <section id="contact" className="reveal mt-24">
          <article className="glass-card">
            <h2 className="section-title">Contact</h2>
            <p className="mt-4 max-w-3xl text-slate-300">Open to AI/ML engineering roles, data science opportunities, and product-focused internships where intelligent systems can create measurable growth. If you are building an ambitious product, let’s connect.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a className="contact-item" href="mailto:rohitmehra.ggh@gmail.com"><Mail size={16} /> rohitmehra.ggh@gmail.com</a>
              <a className="contact-item" href="tel:+919893983586"><Phone size={16} /> +91 9893983586</a>
              <a className="contact-item" href="https://linkedin.com/in/rohit-kumar-9a1646302" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a className="contact-item" href="https://github.com/Rohitmehraji" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <p className="contact-item"><MapPin size={16} /> Madhya Pradesh, India</p>
            </div>
          </article>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-xs text-slate-400">
        <p className="mx-auto max-w-7xl px-5 md:px-8">© {new Date().getFullYear()} Rohit Kumar — AI Engineer Portfolio. Designed for high-impact recruiter conversion.</p>
      </footer>
    </div>
  )
}

export default App
