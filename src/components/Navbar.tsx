"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Check if user is logged in as admin
    const adminStatus = localStorage.getItem("isAdmin");
    setIsAdmin(!!adminStatus);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Events", path: "/events" },
    { title: "Schedule", path: "/schedule" },
    { title: "Gallery", path: "/gallery" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold bg-gradient-to-r from-summit-gold-600 to-accent bg-clip-text text-transparent">
            GLOBAL<span className="text-foreground">SUMMIT</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative font-medium text-sm transition-colors hover:text-primary ${
                pathname === link.path
                  ? "text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-primary"
                  : "text-foreground/80"
              }`}
            >
              {link.title}
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {isAdmin ? (
              <Link href="/admin/dashboard">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                  Admin Panel
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`py-2 font-medium transition-colors hover:text-primary ${
                    pathname === link.path ? "text-primary" : "text-foreground/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              {isAdmin ? (
                <Link href="/admin/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button className="mt-2 bg-primary hover:bg-primary/90 text-white rounded-full">
                    Admin Panel
                  </Button>
                </Link>
              ) : (
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button className="mt-2 bg-primary hover:bg-primary/90 text-white rounded-full">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;