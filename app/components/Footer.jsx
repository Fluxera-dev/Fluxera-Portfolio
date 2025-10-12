import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a 
              href="/" 
              className="group flex items-center gap-3 text-xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 mb-4"
            >
              <img src="/Fluxera-navbar.png" alt="Fluxera" className="h-8 w-auto" />
            </a>
            <p className="text-foreground-secondary text-sm leading-relaxed max-w-md mb-6">
              Crafting exceptional digital experiences through innovative web development, 
              creative design, and cutting-edge technology solutions.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                aria-label="GitHub"
                href="https://github.com/Fluxera-dev"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-surface-hover border border-border hover:border-border-hover hover:bg-background transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-foreground-secondary group-hover:text-foreground group-hover:scale-110 transition-all duration-300"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06 .9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                aria-label="Email"
                href="mailto:fluxera.dev@gmail.com"
                className="p-2 rounded-lg bg-surface-hover border border-border hover:border-border-hover hover:bg-background transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 text-foreground-secondary group-hover:text-foreground group-hover:scale-110 transition-all duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-surface-hover border border-border hover:border-border-hover hover:bg-background transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-foreground-secondary group-hover:text-foreground group-hover:scale-110 transition-all duration-300"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#capabilities"
                  className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-foreground-secondary text-sm">
                  Web Development
                </span>
              </li>
              <li>
                <span className="text-foreground-secondary text-sm">
                  UI/UX Design
                </span>
              </li>
              <li>
                <span className="text-foreground-secondary text-sm">
                  Mobile Apps
                </span>
              </li>
              <li>
                <span className="text-foreground-secondary text-sm">
                  Consulting
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground-secondary text-sm">
            © {new Date().getFullYear()} Fluxera. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
