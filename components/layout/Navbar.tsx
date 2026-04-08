"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${isScrolled ? "bg-premium-black/90 backdrop-blur-xl border-premium-medium-gray/20 py-4" : "bg-transparent border-transparent py-8"}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-premium-white flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-premium-black font-black text-lg">eS</span>
          </div>
          <p className="text-xl font-bold tracking-tighter text-premium-white uppercase italic">
            echoScript
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-premium-white ${pathname === link.href ? "text-premium-white underline underline-offset-4" : "text-premium-light-gray"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-premium-medium-gray/30 pl-8">
            <Link href="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-premium-white p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-premium-black border-b border-premium-medium-gray/20 py-6 px-6 shadow-2xl flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors ${pathname === link.href ? "text-premium-white" : "text-premium-light-gray"}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-premium-medium-gray/10">
             <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" fullWidth>Log in</Button>
             </Link>
             <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button fullWidth>Get Started</Button>
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
