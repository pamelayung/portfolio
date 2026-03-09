export default function PamelaPortfolio() {
  const featuredProjects = [
    {
      title: "Triton Robotics at UC San Diego",
      subtitle: "President · Systems, sponsorship, and large-scale technical leadership",
      description:
        "Leading a 50+ member collegiate robotics team, organizing cross-functional subteams, driving sponsorship strategy, and helping host major competitive robotics events and outreach initiatives.",
      tags: ["Robotics", "Leadership", "Operations", "Sponsorships"],
      links: [
        { label: "Add GitHub Link", href: "#" },
        { label: "Add Photos", href: "#" },
      ],
    },
    {
      title: "C3 Sherlock Project",
      subtitle: "Data systems + investigative analysis",
      description:
        "Worked on structured data and dashboard-oriented analysis related to organized retail theft, connecting fragmented records into more usable insights for investigative workflows.",
      tags: ["Data Analysis", "Dashboards", "Public Sector", "Problem Solving"],
      links: [
        { label: "Add Project Writeup", href: "#" },
        { label: "Add GitHub Link", href: "#" },
      ],
    },
    {
      title: "Machine Learning + Cognitive Science Projects",
      subtitle: "Modeling, experimentation, and applied ML",
      description:
        "Coursework and research-driven projects spanning supervised learning, neural methods, time-series modeling, computer vision, and experimental analysis in cognitive science and machine learning.",
      tags: ["Machine Learning", "Research", "PyTorch", "Data Science"],
      links: [
        { label: "Add GitHub Link", href: "#" },
        { label: "Add Report / Slides", href: "#" },
      ],
    },
    {
      title: "Django Product Catalog Web App",
      subtitle: "Full-stack class project",
      description:
        "Built a Django web application with a database-backed item catalog, form validation, routing, templates, debugging workflow, and Bootstrap-based UI refinement.",
      tags: ["Django", "Python", "Web Dev", "SQLite"],
      links: [
        { label: "Add GitHub Repo", href: "#" },
        { label: "Add Screenshots", href: "#" },
      ],
    },
  ];

  const leadership = [
    "President, Triton Robotics",
    "Cross-functional team management across technical and business functions",
    "Sponsorship outreach, partnership building, and event coordination",
    "Mentorship and community-building through engineering leadership",
  ];

  const skills = [
    "Python",
    "Django",
    "PyTorch",
    "Data Analysis",
    "Machine Learning",
    "SQL",
    "Git/GitHub",
    "Product Thinking",
    "Research",
    "Operations",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Pamela Young
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Robotics, machine learning, data, and product-minded problem solving.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                I’m a UC San Diego student studying Cognitive Science with a Machine Learning specialization, building at the intersection of technical systems, data-driven decision making, and collaborative leadership.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5"
                >
                  Contact
                </a>
                <a
                  href="#resume"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-white p-6 shadow-sm">
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-500">
                  Add Photo
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  Replace this with a headshot, robotics photo, or project image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="about">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Short Bio</h2>
            <p className="mt-4 leading-8 text-slate-600">
              I like building systems that make technical work more usable, scalable, and collaborative. My background spans robotics leadership, machine learning coursework and projects, research-driven thinking, and data work across public sector and healthcare settings.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I’m especially interested in the spaces where engineering, data, and human-centered problem solving meet — whether that means shipping a technical project, organizing a team, or translating messy information into something actionable.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Core Skills</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="projects">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Featured Projects</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            Add live demos for projects that benefit from deployment, and use GitHub links plus screenshots for the rest.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1"
            >
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
                Add project screenshot here
              </div>
              <p className="mt-6 text-sm font-medium uppercase tracking-wide text-slate-500">
                {project.subtitle}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="leadership">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Leadership
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Experience beyond project work</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Highlight leadership roles, organizational impact, mentoring, and major initiatives here.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <ul className="space-y-4">
              {leadership.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  <span className="leading-8 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="resume">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Resume
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Add your resume and key links</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">
                Add Resume PDF
              </a>
              <a href="https://github.com/pamelayung" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/pamela-yung124/" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="contact">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold">Let’s connect</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            Add your preferred email, LinkedIn, and any additional links you want visitors to use when reaching out.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:your-email@example.com" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">
              your-email@example.com
            </a>
            <a href="https://www.linkedin.com/in/pamela-yung124/" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">
              LinkedIn
            </a>
            <a href="https://github.com/pamelayung" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
