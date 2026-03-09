import { useEffect, useMemo, useRef, useState } from 'react'

const WORLD_WIDTH = 4200
const PLAYER_STEP = 22
const GROUND_Y = 80
const JUMP_VELOCITY = 18
const GRAVITY = 0.95

export default function PamelaPortfolioGame() {
  const [playerX, setPlayerX] = useState(140)
  const [playerY, setPlayerY] = useState(GROUND_Y)
  const [velocityY, setVelocityY] = useState(0)
  const [isJumping, setIsJumping] = useState(false)
  const [facing, setFacing] = useState('right')
  const [activeZone, setActiveZone] = useState('Intro')
  const [showOverlay, setShowOverlay] = useState(true)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const animationRef = useRef(null)

  const zones = useMemo(
    () => [
      {
        id: 'Intro',
        title: 'Start Room',
        x1: 0,
        x2: 520,
        color: 'from-sky-400 to-cyan-300',
        summary:
          'Hi, I’m Pamela Yung. Welcome to my interactive portfolio. Move with the arrow keys or A / D to explore different rooms.',
        body: (
          <div className="space-y-4">
            <p>
              This portfolio is designed like a retro side-scrolling game. Each room highlights a different part of my work.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <InfoCard label="Controls" value="Arrow keys, A / D, and Spacebar" />
              <InfoCard label="Goal" value="Walk through rooms" />
              <InfoCard label="Explore" value="Projects, experience, leadership" />
              <InfoCard label="Bonus" value="Gallery + resume room" />
            </div>
          </div>
        ),
      },
      {
        id: 'Projects',
        title: 'Projects Room',
        x1: 520,
        x2: 1220,
        color: 'from-violet-400 to-fuchsia-300',
        summary:
          'Technical projects across robotics, machine learning, web development, and data systems.',
        body: (
          <div className="space-y-4">
            {[
              {
                name: 'Django Product Catalog Web App',
                desc: 'Built a database-backed Django app with forms, validation, routing, templates, and Bootstrap UI refinement.',
              },
              {
                name: 'Machine Learning + Cognitive Science Projects',
                desc: 'Worked on supervised learning, time-series modeling, experimentation, and research-driven ML workflows.',
              },
              {
                name: 'C3 Sherlock Project',
                desc: 'Worked on dashboard-oriented and investigative data workflows related to organized retail theft analysis.',
              },
            ].map((project) => (
              <div key={project.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{project.name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{project.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: 'Experience',
        title: 'Experience Room',
        x1: 1220,
        x2: 1980,
        color: 'from-emerald-400 to-lime-300',
        summary:
          'Experience across healthcare, public sector data work, research, and technical team environments.',
        body: (
          <div className="space-y-4">
            {[
              'UC San Diego Health – analytics and finance-related work supporting operational workflows',
              'San Mateo County Sheriff’s Office – data-oriented work related to the C3 Sherlock project',
              'Research and coursework – ML, cognitive science, experimentation, and applied technical analysis',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        ),
      },
      {
        id: 'Leadership',
        title: 'Leadership Room',
        x1: 1980,
        x2: 2750,
        color: 'from-orange-400 to-amber-300',
        summary:
          'Leading technical teams, sponsorship initiatives, outreach, and large-scale robotics operations.',
        body: (
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">President, Triton Robotics</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                <li>• Lead a 50+ member collegiate robotics organization.</li>
                <li>• Coordinate across technical and business subteams.</li>
                <li>• Drive sponsorship, event planning, outreach, and team growth initiatives.</li>
                <li>• Help organize visible robotics events and mentorship-oriented programs.</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: 'Gallery',
        title: 'Gallery Room',
        x1: 2750,
        x2: 3450,
        color: 'from-pink-400 to-rose-300',
        summary:
          'A gallery area for robotics photos, project screenshots, event images, and competition highlights.',
        body: (
          <div className="space-y-4">
            <p className="text-sm leading-7 text-slate-600">
              Replace these placeholders with your own photos from robotics events, builds, presentations, outreach, and technical projects.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Robotics Event Photo', 'Project Screenshot', 'Team / Outreach Photo', 'Competition Highlight'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => setGalleryIndex(idx)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    galleryIndex === idx
                      ? 'border-slate-900 bg-slate-600 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="mb-3 h-28 rounded-xl border border-dashed border-current/30 bg-white/40" />
                  <p className="font-medium">{item}</p>
                </button>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'Resume',
        title: 'Resume + Contact Room',
        x1: 3450,
        x2: WORLD_WIDTH,
        color: 'from-slate-500 to-slate-300',
        summary:
          'Open your resume, GitHub, LinkedIn, and contact links from the final room.',
        body: (
          <div className="space-y-5">
            <div className="flex flex-wrap gap-3">
              <a
                href="/portfolio/PamelaYung_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white"
              >
                View Resume
              </a>
              <a
                href="/portfolio/PamelaYung_Resume.pdf"
                download
                className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/pamelayung"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pamela-yung124/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700"
              >
                LinkedIn
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">My email:</p>
              <a href="mailto:ppyung@ucsd.edu" className="mt-2 inline-block text-slate-900 underline">
                ppyung@ucsd.edu
              </a>
            </div>
          </div>
        ),
      },
    ],
    [galleryIndex]
  )

  useEffect(() => {
    const current = zones.find((zone) => playerX >= zone.x1 && playerX < zone.x2) || zones[0]
    setActiveZone(current.id)
  }, [playerX, zones])

  useEffect(() => {
    function tick() {
      setPlayerY((prevY) => {
        const nextY = prevY + velocityY
        if (nextY >= GROUND_Y) {
          if (isJumping) {
            setIsJumping(false)
            setVelocityY(0)
          }
          return GROUND_Y
        }
        return nextY
      })

      setVelocityY((prev) => {
        if (!isJumping && playerY >= GROUND_Y) return 0
        return prev + GRAVITY
      })

      animationRef.current = requestAnimationFrame(tick)
    }

    animationRef.current = requestAnimationFrame(tick)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [velocityY, isJumping, playerY])

  useEffect(() => {
    function onKeyDown(e) {
      if (['ArrowRight', 'd', 'D'].includes(e.key)) {
        setFacing('right')
        setPlayerX((prev) => Math.min(WORLD_WIDTH - 80, prev + PLAYER_STEP))
        setShowOverlay(true)
      }
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) {
        setFacing('left')
        setPlayerX((prev) => Math.max(40, prev - PLAYER_STEP))
        setShowOverlay(true)
      }
      if ((e.key === ' ' || e.code === 'Space') && !isJumping && playerY >= GROUND_Y) {
        e.preventDefault()
        setIsJumping(true)
        setVelocityY(-JUMP_VELOCITY)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isJumping, playerY])

  const currentZone = zones.find((zone) => zone.id === activeZone) || zones[0]
  const cameraX = Math.max(0, Math.min(playerX - 420, WORLD_WIDTH - 1100))

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="w-full px-4 py-6 md:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-200/70">Interactive Portfolio Game</p>
            <h1 className="mt-1 text-2xl font-semibold">Pamela Yung</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setPlayerX(140)
                setPlayerY(GROUND_Y)
                setVelocityY(0)
                setIsJumping(false)
                setFacing('right')
              }}
              className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm font-semibold text-black hover:bg-white/30"
            >
              Restart
            </button>
            <button
              onClick={() => setShowOverlay((prev) => !prev)}
              className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm font-semibold text-black hover:bg-white/30"
            >
              {showOverlay ? 'Hide Panel' : 'Show Panel'}
            </button>
          </div>
        </div>

        <div className="grid min-h-[calc(100vh-120px)] gap-6 xl:grid-cols-[1.45fr_0.55fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
            <div className="border-b border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              Use ← → or A / D to move. Press Space to jump.
            </div>

            <div className="relative h-[560px] overflow-hidden bg-gradient-to-b from-sky-300 via-cyan-200 to-emerald-100">
              <div
                className="absolute inset-y-0 left-0 transition-transform duration-200"
                style={{ width: `${WORLD_WIDTH}px`, transform: `translateX(-${cameraX}px)` }}
              >
                <div className="absolute left-24 top-14 h-16 w-16 rounded-full bg-white/90 blur-sm" />
                <div className="absolute left-[760px] top-20 h-12 w-12 rounded-full bg-white/80 blur-sm" />
                <div className="absolute left-[1960px] top-16 h-14 w-14 rounded-full bg-white/80 blur-sm" />
                <div className="absolute left-[3220px] top-12 h-16 w-16 rounded-full bg-white/80 blur-sm" />

                {zones.map((zone, idx) => (
                  <div
                    key={zone.id}
                    className={`absolute bottom-24 rounded-t-[2rem] bg-gradient-to-b ${zone.color} shadow-lg`}
                    style={{ left: `${zone.x1 + 20}px`, width: `${zone.x2 - zone.x1 - 40}px`, height: `${260 + (idx % 2) * 40}px` }}
                  >
                    <div className="p-5">
                      <div className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
                        {zone.title}
                      </div>
                    </div>
                  </div>
                ))}

                {zones.map((zone, idx) => (
                  <div
                    key={`${zone.id}-sign`}
                    className="absolute bottom-[320px] flex flex-col items-center"
                    style={{ left: `${zone.x1 + 130 + (idx % 2) * 50}px` }}
                  >
                    <div className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-md">
                      {zone.id}
                    </div>
                    <div className="h-12 w-2 bg-slate-700" />
                  </div>
                ))}

                <div className="absolute bottom-0 h-28 w-full bg-gradient-to-b from-emerald-700 to-emerald-900" />
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 h-10 w-[130px] border border-black/10 bg-amber-700"
                    style={{ left: `${i * 130}px` }}
                  />
                ))}

                <div
                  className="absolute transition-all duration-100"
                  style={{
                    left: `${playerX}px`,
                    bottom: `${playerY}px`,
                    transform: facing === 'left' ? 'scaleX(-1)' : 'none',
                  }}
                >
                  <div className="relative">
                    <div
                      className="absolute -top-8 left-1/2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white"
                      style={{ transform: facing === 'left' ? 'translateX(50%) scaleX(-1)' : 'translateX(-50%)' }}
                    >
                      You
                    </div>
                    <div className="relative h-24 w-28">
                      <div className="absolute bottom-1 left-3 h-12 w-16 rounded-[2rem] border-4 border-slate-900 bg-emerald-400" />
                      <div className="absolute bottom-10 left-10 h-12 w-12 rounded-[1.5rem] border-4 border-slate-900 bg-emerald-400" />
                      <div className="absolute bottom-18 left-18 h-5 w-5 rounded-full border-4 border-slate-900 bg-emerald-400" />
                      <div className="absolute bottom-22 left-22 h-2.5 w-2.5 rounded-full bg-slate-900" />
                      <div className="absolute bottom-8 left-0 h-5 w-8 rounded-l-full rounded-r-2xl border-4 border-slate-900 bg-emerald-400" />
                      <div className="absolute bottom-0 left-7 h-7 w-4 rounded-b-xl border-4 border-slate-900 bg-emerald-500" />
                      <div className="absolute bottom-0 left-16 h-7 w-4 rounded-b-xl border-4 border-slate-900 bg-emerald-500" />
                      <div className="absolute bottom-12 left-20 h-3 w-8 rounded-full border-4 border-slate-900 bg-emerald-300" />
                    </div>
                    <div className="absolute bottom-0 left-2 -z-10 h-4 w-20 rounded-full bg-black/20 blur-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-xl shadow-black/20">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Current Room</p>
              <h2 className="mt-2 text-3xl font-semibold">{currentZone.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{currentZone.summary}</p>
            </div>

            {showOverlay && (
              <div className="rounded-3xl border border-white/10 bg-slate-800 p-6 text-white shadow-xl shadow-black/20">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Room Details</p>
                  <div className="flex flex-wrap gap-2">
                    {zones.map((zone) => (
                      <button
                        key={zone.id}
                        onClick={() => {
                          setPlayerX(zone.x1 + 120)
                          setShowOverlay(true)
                        }}
                        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                          zone.id === activeZone
                            ? 'bg-blue-800 text-white shadow-md'
                            : 'bg-slate-200 text-black hover:bg-slate-300'
                        }`}
                      >
                        {zone.id}
                      </button>
                    ))}
                  </div>
                </div>
                <div>{currentZone.body}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-600/30 bg-slate-700/40 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{label}</p>
      <p className="mt-2 font-medium text-white">{value}</p>
    </div>
  )
}
