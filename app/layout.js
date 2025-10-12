import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Fluxera.dev",
  description:
    "Fluxera: Premium freelance studio delivering futuristic, high-impact digital products.",
  icons: {
    icon: "/F-Logo.ico",
    shortcut: "/F-Logo.ico",
    apple: "/F-Logo.ico",
    appleStartup: "/F-Logo.ico",
    favicon: "/F-Logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
      >
        <div className="aurora" aria-hidden="true" />
        <header className="sticky top-0 z-50 border-b border-foreground/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
