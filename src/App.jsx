import { useMemo, useState } from 'react'

export default function PamelaPortfolio() {
  const [activeSection, setActiveSection] = useState('help')
  const [history, setHistory] = useState([
    'visitor@pam-terminal:~$ help',
    'Available commands: about, leadership, projects, experience, resume, contact, github, linkedin, clear',
  ])
  const [input, setInput] = useState('')

  const sections = useMemo(
    () => ({
      help: {
        title: 'help',
        body: (
          <div className="space-y-4">
            <p>
              Welcome to Pamela Yung’s terminal portfolio. Use the buttons on the left or type commands below to explore.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                'about',
                'leadership',
                'projects',
                'experience',
                'resume',
                'contact',
                'github',
                'linkedin',
              ].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="rounded-xl border border-emerald-500/30 bg-black/30 px-4 py-3 text-left text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/10"
                >
                  <span className="text-emerald-500">$</span> {cmd}
                </button>
              ))}
            </div>
          </div>
        ),
      },
      about: {
        title: 'about',
        body: (
          <div className="space-y-4">
            <p>
              Hi, I’m <span className="font-semibold text-white">Pamela Yung</span>, a UC San Diego student studying Cognitive Science with a Machine Learning specialization.
            </p>
            <p>
              I like building at the intersection of robotics, machine learning, data, and product-minded problem solving. A lot of my work sits between technical execution and cross-functional leadership.
            </p>
            <p>
              I’m especially interested in turning messy systems into something more usable, scalable, and actionable.
            </p>
          </div>
        ),
      },
      leadership: {
        title: 'leadership',
        body: (
          <div className="space-y-4">
            <div className="rounded-xl border border-emerald-500/20 bg-black/30 p-4">
              <p className="font-semibold text-white">President, Triton Robotics</p>
              <ul className="mt-3 space-y-2 text-emerald-100/90">
                <li>• Lead a 50+ member collegiate robotics team across technical and business functions.</li>
                <li>• Coordinate large-scale planning, recruitment, sponsorship, and outreach efforts.</li>
                <li>• Help organize high-visibility robotics competitions, scrimmages, and mentorship initiatives.</li>
              </ul>
            </div>
          </div>
        ),
      },
      projects: {
        title: 'projects',
        body: (
          <div className="space-y-4">
            {[
              {
                name: 'Django Product Catalog Web App',
                desc: 'Built a database-backed Django app with routing, forms, validation, templates, and Bootstrap UI refinement.',
              },
              {
                name: 'C3 Sherlock Project',
                desc: 'Worked on data workflows and dashboard-oriented analysis related to organized retail theft and investigative support.',
              },
              {
                name: 'Machine Learning + Cognitive Science Projects',
                desc: 'Built coursework and research projects spanning supervised learning, time-series modeling, and applied ML experimentation.',
              },
              {
                name: 'Triton Robotics Systems + Operations',
                desc: 'Managed technical coordination, sponsorship strategy, and team operations for competitive robotics initiatives.',
              },
            ].map((project) => (
              <div key={project.name} className="rounded-xl border border-emerald-500/20 bg-black/30 p-4">
                <p className="font-semibold text-white">{project.name}</p>
                <p className="mt-2 text-emerald-100/90">{project.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      experience: {
        title: 'experience',
        body: (
          <div className="space-y-4">
            {[
              'UC San Diego Health – Financial and analytics-related work in healthcare operations',
              'San Mateo County Sheriff’s Office – Data-oriented work supporting the C3 Sherlock project',
              'Triton Robotics – Technical leadership, operations, sponsorships, and team development',
              'Research and coursework – ML, cognitive science, and experimentation-driven technical work',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-emerald-500/20 bg-black/30 p-4 text-emerald-100/90">
                {item}
              </div>
            ))}
          </div>
        ),
      },
      resume: {
        title: 'resume',
        body: (
          <div className="space-y-4">
            <p>Open or download the latest resume below.</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/portfolio/pamela_yung_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-emerald-400 bg-emerald-500/10 px-4 py-3 text-emerald-200 transition hover:bg-emerald-500/20"
              >
                view resume
              </a>
              <a
                href="/portfolio/pamela_yung_resume.pdf"
                download
                className="rounded-xl border border-emerald-400 bg-emerald-500/10 px-4 py-3 text-emerald-200 transition hover:bg-emerald-500/20"
              >
                download resume
              </a>
            </div>
          </div>
        ),
      },
      contact: {
        title: 'contact',
        body: (
          <div className="space-y-4">
            <p>
              Reach out through email, LinkedIn, or GitHub.
            </p>
            <div className="space-y-2">
              <p>
                email: <a className="text-emerald-300 underline" href="mailto:your-email@example.com">your-email@example.com</a>
              </p>
              <p>
                linkedin: <a className="text-emerald-300 underline" href="https://www.linkedin.com/in/pamela-yung124/" target="_blank" rel="noreferrer">pamela-yung124</a>
              </p>
              <p>
                github: <a className="text-emerald-300 underline" href="https://github.com/pamelayung" target="_blank" rel="noreferrer">pamelayung</a>
              </p>
            </div>
          </div>
        ),
      },
      github: {
        title: 'github',
        body: (
          <div className="space-y-3">
            <p>Open GitHub profile:</p>
            <a
              href="https://github.com/pamelayung"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-xl border border-emerald-400 bg-emerald-500/10 px-4 py-3 text-emerald-200"
            >
              github.com/pamelayung
            </a>
          </div>
        ),
      },
      linkedin: {
        title: 'linkedin',
        body: (
          <div className="space-y-3">
            <p>Open LinkedIn profile:</p>
            <a
              href="https://www.linkedin.com/in/pamela-yung124/"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-xl border border-emerald-400 bg-emerald-500/10 px-4 py-3 text-emerald-200"
            >
              linkedin.com/in/pamela-yung124
            </a>
          </div>
        ),
      },
    }),
    []
  )

  function handleCommand(raw) {
    const command = raw.trim().toLowerCase()
    if (!command) return

    if (command === 'clear') {
      setHistory([])
      setActiveSection('help')
      setInput('')
      return
    }

    setHistory((prev) => [...prev, `visitor@pam-terminal:~$ ${command}`])

    if (sections[command]) {
      setActiveSection(command)
      setHistory((prev) => [...prev, `Opened ${command}`])
    } else {
      setHistory((prev) => [
        ...prev,
        `${command}: command not found`,
        'Try: help, about, leadership, projects, experience, resume, contact, github, linkedin, clear',
      ])
    }

    setInput('')
  }

  return (
    <div className="min-h-screen bg-[#07110b] px-4 py-8 text-emerald-100 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0b1510] shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-emerald-500/15 bg-black/30 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <div className="ml-4 text-sm text-emerald-300/80">pamela-yung-terminal-portfolio</div>
        </div>

        <div className="grid min-h-[85vh] lg:grid-cols-[290px_1fr]">
          <aside className="border-b border-emerald-500/15 bg-black/20 p-5 lg:border-b-0 lg:border-r">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/70">user</p>
              <h1 className="mt-2 text-2xl font-semibold text-white">Pamela Yung</h1>
              <p className="mt-2 text-sm leading-6 text-emerald-100/80">
                Robotics, machine learning, data, and product-minded problem solving.
              </p>
            </div>

            <div className="space-y-2">
              {['help', 'about', 'leadership', 'projects', 'experience', 'resume', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleCommand(item)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                    activeSection === item
                      ? 'bg-emerald-500/15 text-white ring-1 ring-emerald-400/40'
                      : 'bg-black/20 text-emerald-200 hover:bg-emerald-500/10'
                  }`}
                >
                  <span className="text-emerald-500">&gt;</span> {item}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-black/30 p-4 text-sm text-emerald-100/80">
              <p className="text-emerald-400">quick links</p>
              <div className="mt-3 space-y-2">
                <a className="block hover:text-white" href="https://github.com/pamelayung" target="_blank" rel="noreferrer">
                  github
                </a>
                <a className="block hover:text-white" href="https://www.linkedin.com/in/pamela-yung124/" target="_blank" rel="noreferrer">
                  linkedin
                </a>
                <a className="block hover:text-white" href="/portfolio/pamela_yung_resume.pdf" target="_blank" rel="noreferrer">
                  resume.pdf
                </a>
              </div>
            </div>
          </aside>

          <main className="flex flex-col">
            <div className="border-b border-emerald-500/15 px-5 py-4 font-mono text-sm text-emerald-300/80">
              visitor@pam-terminal:~$ open {activeSection}
            </div>

            <div className="grid flex-1 gap-0 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="border-b border-emerald-500/15 p-5 xl:border-b-0 xl:border-r">
                <div className="mb-5 font-mono text-sm text-emerald-400">
                  ./sections/{sections[activeSection]?.title || 'help'}.md
                </div>
                <div className="rounded-2xl border border-emerald-500/20 bg-black/30 p-6 leading-8 text-emerald-100/90">
                  {sections[activeSection]?.body}
                </div>
              </section>

              <section className="flex flex-col p-5">
                <div className="mb-4 font-mono text-sm text-emerald-400">command history</div>
                <div className="mb-4 h-[360px] overflow-auto rounded-2xl border border-emerald-500/20 bg-black/40 p-4 font-mono text-sm leading-7 text-emerald-200">
                  {history.length === 0 ? (
                    <p className="text-emerald-400/70">history cleared</p>
                  ) : (
                    history.map((line, idx) => <div key={`${line}-${idx}`}>{line}</div>)
                  )}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleCommand(input)
                  }}
                  className="mt-auto rounded-2xl border border-emerald-500/20 bg-black/40 p-4"
                >
                  <label className="mb-3 block font-mono text-sm text-emerald-400">
                    enter command
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="flex flex-1 items-center rounded-xl border border-emerald-500/20 bg-black/30 px-4">
                      <span className="mr-3 font-mono text-emerald-500">$</span>
                      <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="type help"
                        className="w-full bg-transparent py-3 text-emerald-100 outline-none placeholder:text-emerald-400/40"
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-xl border border-emerald-400 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20"
                    >
                      run
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
