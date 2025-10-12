import TiltHover from "./components/TiltHover";

export default function Home() {
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
                  <a href="#projects" className="glass accent-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium hover:opacity-90 transition">
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
              <h2 className="text-2xl sm:text-3xl font-semibold">Selected Work</h2>
              <p className="text-sm text-foreground/60 mt-1">A snapshot of recent builds and experiments.</p>
            </div>
            <a href="#socials" className="text-sm underline underline-offset-4 hover:opacity-80">Work with Fluxera</a>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Featured card */}
            <article className="relative md:col-span-7 rounded-2xl overflow-hidden glass">
              <div className="h-48 sm:h-64 w-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/25 to-emerald-500/25" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Neon Commerce</h3>
                <p className="mt-2 text-sm text-foreground/70">Headless ecommerce storefront with animated product galleries and frictionless checkout.</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/60">
                  <span className="rounded border border-foreground/15 px-2 py-1">Next.js</span>
                  <span className="rounded border border-foreground/15 px-2 py-1">Tailwind</span>
                  <span className="rounded border border-foreground/15 px-2 py-1">Stripe</span>
                </div>
              </div>
            </article>

            {/* Two stacked secondary cards */}
            <div className="md:col-span-5 flex flex-col gap-5">
              <article className="glass rounded-2xl overflow-hidden">
                <div className="h-28 w-full bg-gradient-to-br from-emerald-500/25 via-teal-500/20 to-cyan-500/20" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Pulse Analytics</h3>
                  <p className="mt-2 text-sm text-foreground/70">SaaS dashboard with realtime charts and role-based access.</p>
                </div>
              </article>
              <article className="glass rounded-2xl overflow-hidden">
                <div className="h-28 w-full bg-gradient-to-br from-fuchsia-500/25 via-pink-500/20 to-rose-500/20" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Spectra Studio</h3>
                  <p className="mt-2 text-sm text-foreground/70">Motion-rich agency site with immersive case pages.</p>
                </div>
              </article>
            </div>

            {/* Wide utility card */}
            <article className="md:col-span-12 glass rounded-2xl overflow-hidden">
              <div className="h-28 w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20" />
              <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Aurora Docs</h3>
                  <p className="mt-2 text-sm text-foreground/70">Polished documentation theme with MDX, search, and multi-brand theming.</p>
                </div>
                <div className="flex gap-3 text-sm">
                  <a className="rounded-lg border border-foreground/15 px-3 py-2 hover:bg-foreground/5 transition" href="#">Case study</a>
                  <a className="rounded-lg border border-foreground/15 px-3 py-2 hover:bg-foreground/5 transition" href="#">Live demo</a>
                </div>
              </div>
            </article>
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

