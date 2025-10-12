import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Fluxera
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            A passionate team dedicated to building exceptional digital
            experiences
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Full Stack Developer */}
            <div className="bg-background border border-border rounded-2xl p-8 hover:border-border-hover hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      Hashir Shah
                    </h4>
                    <p className="text-sm text-foreground-secondary">
                      Founder · Full Stack Developer
                    </p>
                  </div>
                  <a
                    href="https://github.com/pikacoder44"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-surface-hover border border-border hover:border-border-hover hover:bg-background hover:scale-110 transition-all duration-500 group"
                    aria-label="Hashir Shah GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-foreground-secondary group-hover:text-foreground group-hover:scale-110 transition-all duration-300"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              <p className="text-foreground-secondary leading-relaxed">
                Specializes in end-to-end web application development, from
                crafting beautiful, responsive user interfaces to building
                robust server-side architectures. Proficient in modern
                frameworks and technologies across the entire stack.
              </p>
            </div>

            {/* Backend Developer */}
            <div className="bg-background border border-border rounded-2xl p-8 hover:border-border-hover hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      Aliyan Mujahid
                    </h4>
                    <p className="text-sm text-foreground-secondary">
                      Co-Founder · Backend Developer
                    </p>
                  </div>
                  <a
                    href="https://github.com/AliyanA1"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-surface-hover border border-border hover:border-border-hover hover:bg-background hover:scale-110 transition-all duration-500 group"
                    aria-label="Aliyan Mujahid GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-foreground-secondary group-hover:text-foreground group-hover:scale-110 transition-all duration-300"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              <p className="text-foreground-secondary leading-relaxed">
                Expert in designing scalable server architectures, database
                optimization, and API development. Ensures high performance,
                security, and reliability in all backend systems and
                infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Our Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "TypeScript",
              "MongoDB",
              "Docker",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-surface border border-border rounded-lg text-sm text-foreground-secondary hover:border-blue-400 hover:text-blue-300 hover:bg-blue-500/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
