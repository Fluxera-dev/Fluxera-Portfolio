import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      {/* Logo */}
      <a
        href="/"
        className="group flex items-center gap-3 text-xl font-bold tracking-tight hover:scale-105 transition-transform duration-300"
      >
        <Image
          src="/Fluxera-navbar.png"
          alt="Fluxera"
          width={100}
          height={100}
          className="h-8 w-auto"
        />
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          href="#capabilities"
          className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors relative group"
        >
          Capabilities
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#projects"
          className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors relative group"
        >
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors relative group"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </a>
      </nav>

      {/* Social Links & CTA */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2">
          <a
            aria-label="GitHub"
            href="https://github.com/Fluxera-dev"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-surface border border-border hover:border-border-hover hover:bg-surface-hover transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-foreground-secondary group-hover:text-foreground group-hover:scale-110 transition-all duration-300"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06 .9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            aria-label="Email"
            href="mailto:fluxera.dev@gmail.com"
            className="p-2 rounded-lg bg-surface border border-border hover:border-border-hover hover:bg-surface-hover transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-4 w-4 text-foreground-secondary group-hover:text-foreground group-hover:scale-110 transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        <a
          href="#contact"
          className="btn-primary text-sm px-4 py-2 text-white no-underline"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default Navbar;
