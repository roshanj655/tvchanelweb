'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tv, Menu, X, Radio } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/channels', label: 'Channels' },
  { href: '/live-tv', label: 'Live TV' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/98 shadow-2xl shadow-black/50' : 'bg-slate-900/80 backdrop-blur-md'
      } border-b border-slate-700/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-lg tracking-tight">StreamTV</span>
              <span className="text-red-400 text-[10px] font-semibold tracking-widest uppercase">Live Broadcasting</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                  pathname === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {pathname === link.href && (
                  <span className="absolute inset-0 bg-slate-700/60 rounded-md" />
                )}
                <span className="relative">{link.label}</span>
                {link.href === '/live-tv' && (
                  <span className="relative ml-1.5 inline-flex items-center gap-0.5 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                    <Radio className="w-2 h-2" />
                    Live
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/live-tv"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
            >
              <Radio className="w-3.5 h-3.5" />
              Watch Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-slate-900 border-t border-slate-700/50 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {link.label}
              {link.href === '/live-tv' && (
                <span className="inline-flex items-center gap-0.5 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                  <Radio className="w-2 h-2" /> Live
                </span>
              )}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              href="/live-tv"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors w-full"
            >
              <Radio className="w-3.5 h-3.5" />
              Watch Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
