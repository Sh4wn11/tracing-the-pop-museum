import React, { useState } from 'react';
import { Disc, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: '01 SPACE', href: '#exhibit-space' },
  { label: '02 AFFECT & SENSES', href: '#exhibit-affect' },
  { label: '03 BODY & SELF', href: '#exhibit-body' },
  { label: 'CORE CONSTANTS', href: '#constants' },
  { label: 'REFERENCES', href: '#references' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-sm border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
        {/* Top Row: Brand Identity */}
        <div className="flex items-center justify-between mb-3">
          <a href="#" className="flex items-center gap-2 group">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-signal-red text-canvas">
              <Disc className="w-3 h-3 animate-spin" style={{ animationDuration: '8s' }} />
            </span>
            <span className="font-display text-lg tracking-wider uppercase text-bone">
              TRACING THE POP
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-bone border border-hairline p-1.5"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Bottom Row: Desktop Monospace Links + Red Status + Boxed Button */}
        <nav className="hidden md:flex flex-wrap items-center justify-between gap-y-2 pt-1">
          <div className="flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/80 hover:text-amber-retro transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-red flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse" />
              ARCHIVE • PH 2000–2010
            </span>

            <a
              href="#exit-lounge"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone border border-bone/40 px-3 py-1.5 hover:bg-bone hover:text-canvas transition-colors"
            >
              EXIT LOUNGE
            </a>
          </div>
        </nav>

        {/* Mobile Dropdown (Matches Reference 3 Mobile Layout) */}
        {mobileOpen && (
          <nav className="md:hidden pt-3 pb-2 border-t border-hairline flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone/90 hover:text-amber-retro"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col items-start gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-red">
                • ARCHIVE • PH 2000–2010
              </span>
              <a
                href="#exit-lounge"
                onClick={() => setMobileOpen(false)}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone border border-bone/40 px-3 py-1.5"
              >
                EXIT LOUNGE
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}