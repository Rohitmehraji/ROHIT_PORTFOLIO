function App() {
  return (
    <div className="app-root">
      <header className="topbar">
        <div className="brand">Rohit Kumar</div>
        <a className="resume-btn" href="./assets/resume.pdf" download>
          Download Resume
        </a>
      </header>

      <main className="container">
        <section className="card hero">
          <div>
            <p className="eyebrow">AI Engineer Portfolio</p>
            <h1>Rohit Kumar</h1>
            <p className="subtitle">AI Engineer | ML Engineer | Data Science Intern | Full-Stack AI Builder</p>
            <p>
              I build production-oriented AI systems using ML, NLP, RAG, ETL automation, and backend API integration.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="#contact">Contact Me</a>
            </div>
          </div>

          <aside className="profile">
            {/* Put profile photo at public/assets/profile.jpg. */}
            <img
              src="./assets/profile.jpg"
              alt="Rohit Kumar"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = document.getElementById('avatar-fallback')
                if (fallback) fallback.style.display = 'grid'
              }}
            />
            <div id="avatar-fallback" className="avatar-fallback">RK</div>
            <p>Madhya Pradesh, India</p>
          </aside>
        </section>

        <section id="about" className="card">
          <h2>About</h2>
          <p>
            Data Science and AI/ML engineer with hands-on experience in machine learning, NLP, predictive analytics,
            ETL automation, backend integration, and deployment-oriented workflows.
          </p>
        </section>

        <section id="skills" className="card">
          <h2>Skills</h2>
          <ul>
            <li><strong>Languages:</strong> Python, SQL, JavaScript, HTML, CSS</li>
            <li><strong>AI/ML:</strong> Regression, Classification, NLP, Transformers, T5, BERT, RAG</li>
            <li><strong>LLM Stack:</strong> LangChain, FAISS, Semantic Search, Embeddings, Prompt Engineering</li>
            <li><strong>Data Engineering:</strong> ETL Pipelines, Feature Engineering, Data Cleaning, Automation</li>
            <li><strong>Backend:</strong> FastAPI, REST APIs, Microservices, Model Deployment</li>
            <li><strong>Tools:</strong> Pandas, NumPy, Scikit-learn, TensorFlow, Streamlit, Git, Linux</li>
          </ul>
        </section>

        <section id="experience" className="card">
          <h2>Experience</h2>
          <article>
            <h3>Data Science Intern — Sarvarth (May 2025 – Sept 2025)</h3>
            <ul>
              <li>Improved reporting accuracy by 15%.</li>
              <li>Reduced manual effort by 30% with ETL automation.</li>
              <li>Built Streamlit dashboards for 100+ users.</li>
            </ul>
          </article>
          <article>
            <h3>AI/ML Intern — Badkul Technology (Mar 2025 – May 2025)</h3>
            <ul>
              <li>Integrated Python ML inference with backend REST APIs.</li>
              <li>Automated preprocessing, reporting, and validation scripts.</li>
            </ul>
          </article>
          <article>
            <h3>AI Development Trainee — CEDMAP MSME (Jul 2025 – Sept 2025)</h3>
            <ul>
              <li>Implemented transformer NLP models using Hugging Face.</li>
              <li>Reduced AI response latency by 20% with vector DB workflows.</li>
            </ul>
          </article>
        </section>

        <section id="projects" className="card">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Hugging Face Transformer Text Summarizer</strong> — Reduced document review time by 40%.
              <a href="https://github.com/Rohitmehraji/hugging-face-transformer-summerizer" target="_blank" rel="noreferrer"> GitHub</a>
            </li>
            <li>
              <strong>AI Chatbot (RAG-Based)</strong> — Improved contextual accuracy by 30%.
              <a href="https://github.com/Rohitmehraji/AI-CHATBOT" target="_blank" rel="noreferrer"> GitHub</a>
            </li>
            <li>
              <strong>Student Data Analyst Project</strong> — Improved reporting efficiency by 18%.
              <a href="https://github.com/Rohitmehraji/my-data-analyst-project" target="_blank" rel="noreferrer"> GitHub</a>
            </li>
          </ul>
        </section>

        <section id="education" className="card">
          <h2>Education & Certifications</h2>
          <p>B.Tech in Information Technology, Jabalpur Engineering College (2021–2025), CGPA: 7.08/10</p>
          <p>Cloud Computing Bootcamp — Yhills | Django Web Development — Udemy | TEDx JEC 2024 (Branch Representative)</p>
        </section>

        <section id="impact" className="card">
          <h2>Impact</h2>
          <p>15% Accuracy Improvement | 30% Less Manual Processing | 20% Lower Latency | 100+ Users Served</p>
        </section>

        <section id="contact" className="card">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:rohitmehra.ggh@gmail.com">rohitmehra.ggh@gmail.com</a></p>
          <p>Phone: <a href="tel:+919893983586">+91 9893983586</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/rohit-kumar-9a1646302" target="_blank" rel="noreferrer">linkedin.com/in/rohit-kumar-9a1646302</a></p>
          <p>GitHub: <a href="https://github.com/Rohitmehraji" target="_blank" rel="noreferrer">github.com/Rohitmehraji</a></p>
        </section>
      </main>
    </div>
  )
}

export default App
