import TiltHover from "./components/TiltHover";

export default function Home() {
  const projects = [
    {
      title: 'ChatPika',
      description: "ChatPika is a sleek AI chat platform that enables real-time, intelligent conversations through a modern dark-mode interface. It features streaming replies, persistent chat sessions, and smooth performance across all devices. Built with cutting-edge technologies, ChatPika demonstrates seamless frontend–backend communication and a focus on user experience, showcasing the power of Next.js and AI-driven interactivity.",
      image: '/images/1.png',
      tags: ['NextJs', 'Node', 'MongoDb', 'Tailwind'],
      source: 'https://github.com/pikacoder44/ChatPika',
      visit: 'https://chat-pika.vercel.app/',
      id: 0,
    },
    {
      title: 'Logiksutra',
      description: "Logiksutra is a full-stack book review platform that offers a clean, responsive interface for readers to explore, review, and share books. With secure authentication, efficient CRUD operations, and polished UI design, it ensures a seamless user experience across devices. The project highlights mastery in frontend–backend integration and scalable architecture, crafted to deliver performance and reliability.",
      image: '/images/2.png',
      tags: ['React','Node','Express','MongoDb'],
      source: 'https://github.com/pikacoder44/LogiksutraAi---Submission',
      visit: 'https://logiksutra-ai-submission.vercel.app/',
      id: 1,
    },
    {
      title: 'AI Summarizer',
      description: "AI Summarizer is an intelligent text summarization app powered by advanced NLP models and OpenAI APIs. It efficiently condenses lengthy text into clear and concise summaries, helping users extract key insights in seconds. With its fast performance, clean UI, and responsive design, it demonstrates the integration of AI automation with practical, user-friendly web development.",
      image: '/images/3.png',
      tags: ['React','TailwindCss', 'Rapid Api','Open Ai'],
      source: 'https://github.com/AliyanA1/Ai-summerizer-',
      visit: 'https://smartsummarize-rho.vercel.app/',
      id: 2,
    },
    {
      title: 'Recipe Finder',
      description: "Recipe Finder is a modern recipe discovery app that lets users search and explore meals with detailed cooking steps. Built with a responsive layout and clean visuals, it ensures smooth navigation and accessibility on all devices. The project reflects a focus on simplicity, design consistency, and user engagement while leveraging APIs to deliver dynamic, data-driven results.",
      image: '/images/5.png',
      tags: ['React', 'MealDB API', 'Tailwind CSS', 'Vite'],
      source: 'https://github.com/AliyanA1/Recipe-Finder',
      visit: 'https://recipe-finder-xi-seven.vercel.app/',
      id: 4,
    },
  ]
  return (
    <main className="font-sans min-h-screen">
      <TiltHover />
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm tracking-widest uppercase text-foreground/60">Fluxera</p>
                <h1 className="mt-3 text-4xl sm:text-6xl leading-tight font-semibold">
                  Futuristic, premium digital experiences
                  <span className="block accent-text">crafted for impact</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base sm:text-lg text-foreground/70">
                  Fluxera is a boutique freelance studio building elevated products and brand sites with modern tech, motion, and meticulous design. I partner with teams to ship work that feels premium and performs.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#projects" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium border border-foreground/15 hover:bg-foreground/5 transition">
                    <span>View Projects</span>
                  </a>
                  <a href="#socials" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium border border-foreground/15 hover:bg-foreground/5 transition">
                    <span>Contact</span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl border border-foreground/10 bg-foreground/[0.03] p-6 flex items-center justify-center aspect-square max-w-sm mx-auto">
                  <img src="/FluxeraLogo.svg" alt="Fluxera logo" className=" rounded-lg opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="capabilities" className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="glass rounded-xl p-5">
              <h3 className="text-lg font-semibold">Design Systems</h3>
              <p className="mt-2 text-sm text-foreground/70">Scalable, accessible UI libraries with tokens and theming.</p>
            </div>
            <div className="glass rounded-xl p-5">
              <h3 className="text-lg font-semibold">Web Apps</h3>
              <p className="mt-2 text-sm text-foreground/70">Next.js, React, and API integrations built for speed.</p>
            </div>
            <div className="glass rounded-xl p-5">
              <h3 className="text-lg font-semibold">Brand Sites</h3>
              <p className="mt-2 text-sm text-foreground/70">Aesthetic, animated marketing sites with strong storytelling.</p>
            </div>
            <div className="glass rounded-xl p-5">
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="mt-2 text-sm text-foreground/70">Core Web Vitals, SEO, and a11y best practices by default.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
              <p className="text-sm text-foreground/60 mt-1">A snapshot of recent builds and experiments.</p>
            </div>
            <a href="#socials" className="text-sm underline underline-offset-4 hover:opacity-80">Work with Fluxera</a>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-5">
            {projects.map((p) => (
              <article key={p.id} className="relative md:col-span-6 rounded-2xl overflow-hidden glass group">
                <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/60">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded border border-foreground/15 px-2 py-1">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3 text-sm">
                    <a href={p.visit} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-foreground/15 hover:bg-foreground/5 transition">Live</a>
                    <a href={p.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-foreground/15 hover:bg-foreground/5 transition">Source</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="socials" className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Let’s build something remarkable</h3>
                <p className="mt-1 text-sm text-foreground/70">Open to select collaborations and premium freelance engagements.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a className="rounded-lg border border-foreground/15 px-3 py-2 hover:bg-foreground/5 transition" href="mailto:hello@fluxera.studio">Email</a>
                <a className="rounded-lg border border-foreground/15 px-3 py-2 hover:bg-foreground/5 transition" href="https://x.com" target="_blank" rel="noreferrer">X</a>
                <a className="rounded-lg border border-foreground/15 px-3 py-2 hover:bg-foreground/5 transition" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="rounded-lg border border-foreground/15 px-3 py-2 hover:bg-foreground/5 transition" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

