"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logobaru.png";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#" },
    { label: "Tentang Kami", href: "#tentang-kami" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-md py-2 border-b border-slate-800"
          : "bg-slate-950/85 backdrop-blur-md py-2.5 border-b border-slate-900/50"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3 py-1 group">
            <Image 
              src={logo} 
              alt="LUMINA PUBLISHER Logo" 
              className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_2px_14px_rgba(220,38,38,0.45)]"
            />
            <span className="font-jakarta font-extrabold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
              LUMINA PUBLISHER
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-base font-semibold text-slate-200 hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="rounded-full px-6 py-2 text-sm lg:text-base font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border border-amber-400/50 shadow-md shadow-red-600/30 transition-transform hover:scale-105" onClick={() => window.open('https://wa.me/6285796123601', '_blank')}>
              Konsultasi Sekarang
            </Button>
          </nav>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              className="text-slate-900 dark:text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg border-t border-slate-100 dark:border-slate-800 py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-slate-700 dark:text-slate-200 block py-2 border-b border-slate-50 dark:border-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="w-full rounded-full mt-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold border border-amber-400/50 shadow-md shadow-red-600/25" onClick={() => window.open('https://wa.me/6285796123601', '_blank')}>
            Konsultasi Sekarang
          </Button>
        </div>
      )}
    </header>
  );
};
