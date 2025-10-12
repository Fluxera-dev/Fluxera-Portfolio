import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
      <a href="/" className="text-sm font-semibold tracking-wider">
        FLUXERA
      </a>
      <nav className="flex items-center gap-2">
        <a
          aria-label="GitHub"
          href="https://github.com/Fluxera-dev"
          target="_blank"
          rel="noreferrer"
          className="rounded-md p-2 hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06 .9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>
        <a
          aria-label="Upwork"
          href="https://www.upwork.com/freelancers/~01a175be1e3541464b"
          target="_blank"
          rel="noreferrer"
          className="rounded-md p-2 hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M18.5 7.5a3.5 3.5 0 0 0-3.36 2.48 17.8 17.8 0 0 1-1.02-1.9l-.82-1.88h-2.1v4.39a2.7 2.7 0 1 1-5.4 0V6.2H3.5v3.89a5.2 5.2 0 1 0 10.4.12l.44 1.01c.83 1.9 2.33 3.28 4.16 3.28A3.5 3.5 0 1 0 18.5 7.5Zm0 5.1c-.86 0-1.6-.77-2.18-1.9a2.3 2.3 0 1 1 2.18 1.9Z" />
          </svg>
        </a>
        <a
          aria-label="Fiverr"
          href="https://www.fiverr.com/fluxera_dev"
          target="_blank"
          rel="noreferrer"
          className="rounded-md p-2 hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M18.2 7.1h-2.2V6a2.8 2.8 0 0 0-2.8-2.8H7.8v3.9H6v3.1h1.8v8.6h3.3v-8.6h2.2c.8 0 1.5-.7 1.5-1.5V10h1.5V7.1Z" />
          </svg>
        </a>
        <a
          aria-label="Gmail"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=fluxera.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-2 hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-7H6V9l6 4 6-4v4h-2v7h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
