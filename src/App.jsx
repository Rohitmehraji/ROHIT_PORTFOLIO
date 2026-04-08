import { useEffect, useMemo, useState } from 'react'

const roles = [
  'AI Engineer',
  'Machine Learning Builder',
  'RAG Systems Developer',
  'Data Science Innovator',
  'Full-Stack AI Creator'
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'impact', label: 'Impact' },
  { id: 'contact', label: 'Contact' }
]

const skills = {
  'AI / ML': ['Regression', 'Classification', 'Transformers', 'T5', 'BERT'],
  'NLP / LLM': ['NLP', 'RAG', 'LangChain', 'FAISS', 'Semantic Search'],
  'Data Engineering': ['ETL Pipelines', 'Feature Engineering', 'Data Cleaning', 'Automation', 'Data Validation'],
  'Backend / APIs': ['FastAPI', 'REST APIs', 'Microservices', 'API Integration', 'Model Deployment'],
  'Frontend / Web': ['JavaScript', 'HTML', 'CSS', 'Streamlit'],
  'Cloud / Tools': ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Git', 'Azure', 'AWS Basics', 'GCP Basics', 'OpenAI API', 'Azure OpenAI API']
}

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Sarvarth',
    duration: 'May 2025 – Sept 2025',
    points: [
      'Improved reporting accuracy by 15% using ML models and structured feature engineering.',
      'Built automated ETL pipelines reducing manual effort by 30%.',
      'Created interactive Streamlit dashboards serving 100+ users.'
    ]
  },
  {
    role: 'AI/ML Intern',
    company: 'Badkul Technology',
    duration: 'Mar 2025 – May 2025',
    points: [
      'Integrated Python-based ML inference into backend workflows via REST APIs and JSON.',
      'Automated preprocessing, reporting scripts, and validation pipelines.',
      'Supported backend optimization and API performance tuning.'
    ]
  },
  {
    role: 'AI Development Trainee',
    company: 'CEDMAP MSME',
    duration: 'Jul 2025 – Sept 2025',
    points: [
      'Implemented transformer-based NLP models with Hugging Face.',
      'Improved summarization performance and inference efficiency.',
      'Integrated vector databases and orchestration workflows to reduce response latency by 20%.'
    ]
  }
]

const projects = [
  {
    title: 'Hugging Face Transformer Text Summarizer',
    summary: 'Fine-tuned T5 summarizer with preprocessing, tokenization, chunking, and optimized inference.',
    outcome: 'Reduced manual document review time by 40%.',
    stack: 'Python • Hugging Face • PyTorch • T5 • Streamlit',
    github: 'https://github.com/Rohitmehraji/hugging-face-transformer-summerizer'
  },
  {
    title: 'AI Chatbot (RAG-Based)',
    summary: 'Built retrieval-augmented chatbot with semantic search, vector indexing, and memory.',
    outcome: 'Improved contextual accuracy by 30% with low-latency interaction.',
    stack: 'LangChain • FAISS • Embeddings • RAG • Python',
    github: 'https://github.com/Rohitmehraji/AI-CHATBOT'
  },
  {
    title: 'Student Data Analyst Project',
    summary: 'Created end-to-end analytics pipeline for trends, grade distributions, and performance metrics.',
    outcome: 'Improved reporting efficiency by 18%.',
    stack: 'Pandas • SQL • Data Validation • Dashboarding',
    github: 'https://github.com/Rohitmehraji/my-data-analyst-project'
  }
]

const metrics = [
  '15% Reporting Accuracy Improvement',
  '30% Reduction in Manual Processing',
  '20% Lower AI Response Latency',
  '40% Faster Document Review',
  '18% Reporting Efficiency Improvement',
  '100+ Dashboard Users Served'
]

function App() {
  const [isDark, setIsDark] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDark)
  }, [isDark])

  const skillEntries = useMemo(() => Object.entries(skills), [])

  return (
    <div className="page">
      <header className="navbar">
        <a href="#home" className="brand">Rohit Kumar</a>
        <nav>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
          <button type="button" className="toggle-btn" onClick={() => setIsDark((v) => !v)}>
            {isDark ? 'Light' : 'Dark'}
          </button>
        </nav>
      </header>

      <main id="home" className="container">
        <section className="hero card">
          <div>
            <p className="kicker">AI Engineer Portfolio</p>
            <h1>Rohit Kumar</h1>
            <p className="role">{roles[roleIndex]}</p>
            <p className="lead">
              AI/ML engineer focused on practical product delivery: scalable pipelines, NLP systems,
              RAG workflows, backend integration, and deployment-ready intelligence.
            </p>
            <div className="cta-row">
              <a href="#projects" className="btn primary">View Projects</a>
              {/* Replace ./assets/resume.pdf by adding your latest resume PDF in public/assets/. */}
              <a href="./assets/resume.pdf" download className="btn">Download Resume</a>
              <a href="#contact" className="btn">Contact Me</a>
            </div>
          </div>

          <aside className="profile-card">
            {/* Replace ./assets/profile.jpg by adding your real profile photo in public/assets/. */}
            <img
              src="./assets/profile.jpg"
              alt="Rohit Kumar"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                const fallback = event.currentTarget.nextElementSibling
                if (fallback) fallback.classList.remove('hidden')
              }}
            />
            <div className="avatar-fallback hidden">RK</div>
            <h3>AI Engineer | ML Engineer | Data Science Intern</h3>
            <p>Madhya Pradesh, India</p>
            <ul>
              <li>15% Accuracy Improvement</li>
              <li>30% Less Manual Effort</li>
              <li>20% Lower AI Latency</li>
              <li>100+ Dashboard Users</li>
            </ul>
          </aside>
        </section>

        <section id="about" className="card">
          <h2>About</h2>
          <p>
            I build AI systems with a product mindset: identify a business bottleneck, design robust data and model
            flows, and deliver measurable outcomes. My work spans transformer NLP, retrieval systems, ETL automation,
            backend APIs, and deployment-oriented engineering.
          </p>
        </section>

        <section id="skills" className="card">
          <h2>Skills & Tech Stack</h2>
          <div className="grid three">
            {skillEntries.map(([group, list]) => (
              <article key={group} className="mini-card">
                <h3>{group}</h3>
                <p>{list.join(' • ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="card">
          <h2>Experience</h2>
          <div className="timeline">
            {experiences.map((job) => (
              <article key={job.role + job.company} className="mini-card">
                <h3>{job.role} — {job.company}</h3>
                <p className="muted">{job.duration}</p>
                <ul>
                  {job.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="card">
          <h2>Featured Projects</h2>
          <div className="grid three">
            {projects.map((project) => (
              <article key={project.title} className="mini-card">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p><strong>Outcome:</strong> {project.outcome}</p>
                <p><strong>Stack:</strong> {project.stack}</p>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="card">
          <h2>Education & Certifications</h2>
          <p><strong>B.Tech in Information Technology</strong> — Jabalpur Engineering College (2021 – 2025), CGPA 7.08/10</p>
          <p>Cloud Computing Bootcamp — Yhills • Django Web Development — Udemy • Branch Representative, TEDx JEC 2024 • Sports Coordinator, Aavahan Fest 2024 • Leadership</p>
        </section>

        <section id="impact" className="card">
          <h2>Impact Metrics</h2>
          <div className="grid three">
            {metrics.map((metric) => (
              <div key={metric} className="mini-card metric">{metric}</div>
            ))}
          </div>
        </section>

        <section className="card" id="resume">
          <h2>Resume</h2>
          <p>Download the latest resume for complete project and internship details.</p>
          <a href="./assets/resume.pdf" download className="btn primary">Download Resume PDF</a>
        </section>

        <section id="contact" className="card">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:rohitmehra.ggh@gmail.com">rohitmehra.ggh@gmail.com</a></p>
          <p>Phone: <a href="tel:+919893983586">+91 9893983586</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/rohit-kumar-9a1646302" target="_blank" rel="noreferrer">linkedin.com/in/rohit-kumar-9a1646302</a></p>
          <p>GitHub: <a href="https://github.com/Rohitmehraji" target="_blank" rel="noreferrer">github.com/Rohitmehraji</a></p>
          <p>Location: Madhya Pradesh, India</p>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Rohit Kumar — AI Engineer Portfolio</footer>
    </div>
  )
}

export default App
