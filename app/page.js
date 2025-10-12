import TiltHover from "./components/TiltHover";

export default function Home() {
  const projects = [
    {
      title: "ChatPika",
      description:
        "ChatPika is a sleek AI chat platform that enables real-time, intelligent conversations through a modern dark-mode interface. It features streaming replies, persistent chat sessions, and smooth performance across all devices. Built with cutting-edge technologies, ChatPika demonstrates seamless frontend–backend communication and a focus on user experience, showcasing the power of Next.js and AI-driven interactivity.",
      image: "/images/1.png",
      tags: ["NextJs", "Node", "MongoDb", "Tailwind"],
      source: "https://github.com/pikacoder44/ChatPika",
      visit: "https://chat-pika.vercel.app/",
      id: 0,
    },
    {
      title: "Logiksutra",
      description:
        "Logiksutra is a full-stack book review platform that offers a clean, responsive interface for readers to explore, review, and share books. With secure authentication, efficient CRUD operations, and polished UI design, it ensures a seamless user experience across devices. The project highlights mastery in frontend–backend integration and scalable architecture, crafted to deliver performance and reliability.",
      image: "/images/2.png",
      tags: ["React", "Node", "Express", "MongoDb"],
      source: "https://github.com/pikacoder44/LogiksutraAi---Submission",
      visit: "https://logiksutra-ai-submission.vercel.app/",
      id: 1,
    },
    {
      title: "AI Summarizer",
      description:
        "AI Summarizer is an intelligent text summarization app powered by advanced NLP models and OpenAI APIs. It efficiently condenses lengthy text into clear and concise summaries, helping users extract key insights in seconds. With its fast performance, clean UI, and responsive design, it demonstrates the integration of AI automation with practical, user-friendly web development.",
      image: "/images/3.png",
      tags: ["React", "TailwindCss", "Rapid Api", "Open Ai"],
      source: "https://github.com/AliyanA1/Ai-summerizer-",
      visit: "https://smartsummarize-rho.vercel.app/",
      id: 2,
    },
    {
      title: "Recipe Finder",
      description:
        "Recipe Finder is a modern recipe discovery app that lets users search and explore meals with detailed cooking steps. Built with a responsive layout and clean visuals, it ensures smooth navigation and accessibility on all devices. The project reflects a focus on simplicity, design consistency, and user engagement while leveraging APIs to deliver dynamic, data-driven results.",
      image: "/images/5.png",
      tags: ["React", "MealDB API", "Tailwind CSS", "Vite"],
      source: "https://github.com/AliyanA1/Recipe-Finder",
      visit: "https://recipe-finder-xi-seven.vercel.app/",
      id: 4,
    },
  ];
  return (
    <main className="font-sans min-h-screen">
      <TiltHover />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    <span className="text-sm font-medium text-blue-300">Available for Projects</span>
                  </div>
                  <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
                    Next-Gen Digital
                    <span className="block accent-text">Experiences</span>
                  </h1>
                </div>
                
                <p className="text-xl text-foreground-secondary max-w-2xl leading-relaxed">
                  Crafting premium web applications and digital products with cutting-edge technology, 
                  stunning design, and performance that exceeds expectations.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="btn-primary inline-flex items-center gap-2 text-white no-underline"
                  >
                    <span>Explore Work</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="btn-secondary inline-flex items-center gap-2 no-underline"
                  >
                    <span>Get In Touch</span>
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto animate-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-glow"></div>
                  <div className="relative glass p-8 rounded-3xl flex items-center justify-center">
                    <img
                      src="/FluxeraLogo.svg"
                      alt="Fluxera logo"
                      className="w-full h-full object-contain opacity-90 transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Expertise & <span className="accent-text">Capabilities</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Delivering end-to-end solutions with modern technologies and best practices
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass p-8 group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design Systems</h3>
              <p className="text-foreground-secondary leading-relaxed">
                Scalable, accessible UI libraries with design tokens and comprehensive theming solutions.
              </p>
            </div>
            
            <div className="glass p-8 group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-foreground-secondary leading-relaxed">
                Full-stack applications with Next.js, React, and seamless API integrations optimized for performance.
              </p>
            </div>
            
            <div className="glass p-8 group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Experiences</h3>
              <p className="text-foreground-secondary leading-relaxed">
                Immersive marketing sites with motion design and compelling storytelling that converts.
              </p>
            </div>
            
            <div className="glass p-8 group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <p className="text-foreground-secondary leading-relaxed">
                Lightning-fast sites with perfect Core Web Vitals, SEO optimization, and accessibility compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="accent-text">Projects</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              A curated selection of recent work showcasing innovation, design excellence, and technical mastery
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((p, index) => (
              <article
                key={p.id}
                className={`glass group hover:scale-[1.02] transition-all duration-500 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className={`relative w-full overflow-hidden ${
                    index === 0 ? 'h-64 sm:h-80' : 'h-48 sm:h-56'
                  }`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={p.visit}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors group/btn"
                        title="View Live Site"
                      >
                        <svg className="w-4 h-4 text-blue-400 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={p.source}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors group/btn"
                        title="View Source Code"
                      >
                        <svg className="w-4 h-4 text-purple-400 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-foreground-secondary leading-relaxed mb-6">
                    {p.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass p-12 sm:p-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Build Something <span className="accent-text">Extraordinary?</span>
              </h2>
              <p className="text-xl text-foreground-secondary mb-12 leading-relaxed">
                Let's collaborate on your next project. From concept to deployment, 
                I deliver premium digital experiences that exceed expectations.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <a
                  href="mailto:fluxera.dev@gmail.com"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-blue-300 mb-2">Email</h3>
                  <p className="text-sm text-foreground-secondary">Direct communication</p>
                </a>
                
                <a
                  href="https://www.upwork.com/freelancers/~01a175be1e3541464b"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.5 7.5a3.5 3.5 0 0 0-3.36 2.48 17.8 17.8 0 0 1-1.02-1.9l-.82-1.88h-2.1v4.39a2.7 2.7 0 1 1-5.4 0V6.2H3.5v3.89a5.2 5.2 0 1 0 10.4.12l.44 1.01c.83 1.9 2.33 3.28 4.16 3.28A3.5 3.5 0 1 0 18.5 7.5Zm0 5.1c-.86 0-1.6-.77-2.18-1.9a2.3 2.3 0 1 1 2.18 1.9Z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-emerald-300 mb-2">Upwork</h3>
                  <p className="text-sm text-foreground-secondary">Professional platform</p>
                </a>
                
                <a
                  href="https://www.fiverr.com/fluxera_dev"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                    <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.2 7.1h-2.2V6a2.8 2.8 0 0 0-2.8-2.8H7.8v3.9H6v3.1h1.8v8.6h3.3v-8.6h2.2c.8 0 1.5-.7 1.5-1.5V10h1.5V7.1Z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-purple-300 mb-2">Fiverr</h3>
                  <p className="text-sm text-foreground-secondary">Quick projects</p>
                </a>
                
                <a
                  href="https://github.com/Fluxera-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 transition-colors">
                    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-cyan-300 mb-2">GitHub</h3>
                  <p className="text-sm text-foreground-secondary">Open source work</p>
                </a>
              </div>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium text-green-300">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
