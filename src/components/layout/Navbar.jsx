import React, { useState } from 'react';
import { ChevronDown, Disc, Menu, X } from 'lucide-react';

const DROPDOWN_NAV_ITEMS = [
  {
    label: '01 PAST',
    eraTag: '2000–2010 ARCHIVE',
    items: [
      {
        aspect: 'EXHIBIT 01 // SPACE',
        title: 'THE ENCLOSED & CONNECTED HANGOUT.',
        href: '#exhibit-space-past',
      },
      {
        aspect: 'EXHIBIT 02 // AFFECT & SENSES',
        title: 'SHARED TEARS, KILIG, & PLAYGROUND HYPE.',
        href: '#exhibit-affect-past',
      },
      {
        aspect: 'EXHIBIT 03 // BODY & SELF',
        title: 'THE BODY AS A LOCAL-GLOBAL CANVAS.',
        href: '#exhibit-body-past',
      },
    ],
  },
  {
    label: '02 PAST TO PRESENT',
    eraTag: 'THEN VS. NOW COMPARISON',
    items: [
      {
        aspect: 'EXHIBIT 01 // SPACE',
        title: 'THE ENCLOSED & CONNECTED HANGOUT.',
        href: '#exhibit-space-compare',
      },
      {
        aspect: 'EXHIBIT 02 // AFFECT & SENSES',
        title: 'SHARED TEARS, KILIG, & PLAYGROUND HYPE.',
        href: '#exhibit-affect-compare',
      },
      {
        aspect: 'EXHIBIT 03 // BODY & SELF',
        title: 'THE BODY AS A LOCAL-GLOBAL CANVAS.',
        href: '#exhibit-body-compare',
      },
    ],
  },
  {
    label: '03 FUTURE',
    eraTag: '2030 HORIZON',
    items: [
      {
        aspect: 'EXHIBIT 01 // SPACE',
        title: 'THE ENCLOSED & CONNECTED HANGOUT.',
        href: '#exhibit-space-future',
      },
      {
        aspect: 'EXHIBIT 02 // AFFECT & SENSES',
        title: 'SHARED TEARS, KILIG, & PLAYGROUND HYPE.',
        href: '#exhibit-affect-future',
      },
      {
        aspect: 'EXHIBIT 03 // BODY & SELF',
        title: 'THE BODY AS A LOCAL-GLOBAL CANVAS.',
        href: '#exhibit-body-future',
      },
    ],
  },
];

// Untouched remaining links
const STATIC_NAV_LINKS = [
  { label: 'CORE CONSTANTS', href: '#constants' },
  { label: 'REFERENCES', href: '#references' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);

  const toggleMobileGroup = (label) => {
    setOpenMobileGroup(openMobileGroup === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-sm border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
        {/* Top Row: Brand Identity */}
        <div className="flex items-center justify-between mb-3">
          <a href="#" className="flex items-center gap-2 group">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-signal-red text-canvas">
              <Disc
                className="w-3 h-3 animate-spin"
                style={{ animationDuration: '8s' }}
              />
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
            {/* First 3 Items with Hover Dropdowns */}
            {DROPDOWN_NAV_ITEMS.map((group) => (
              <div key={group.label} className="relative group py-1">
                <button
                  type="button"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/80 group-hover:text-amber-retro transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{group.label}</span>
                  <ChevronDown className="w-3 h-3 text-muted group-hover:text-amber-retro group-hover:rotate-180 transition-transform duration-150" />
                </button>

                {/* Hover Dropdown Panel */}
                <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 absolute left-0 top-full pt-2 w-80 z-50">
                  <div className="bg-surface border border-hairline shadow-2xl divide-y divide-hairline">
                    {/* Dropdown Subheader */}
                    <div className="px-3.5 py-2 bg-canvas flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal-red font-bold">
                        {group.label}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                        {group.eraTag}
                      </span>
                    </div>

                    {/* 3 Exhibit Links */}
                    {group.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-3.5 py-3 hover:bg-canvas/90 transition-colors group/item"
                      >
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal-green block mb-1">
                          {item.aspect}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-bone group-hover/item:text-amber-retro transition-colors block leading-snug">
                          {item.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Untouched Links: CORE CONSTANTS & REFERENCES */}
            {STATIC_NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/80 hover:text-amber-retro transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Untouched Right Status & EXIT LOUNGE Button */}
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

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <nav className="md:hidden pt-3 pb-2 border-t border-hairline flex flex-col gap-3">
            {/* Accordion Dropdowns for Mobile */}
            <div className="flex flex-col divide-y divide-hairline border-b border-hairline">
              {DROPDOWN_NAV_ITEMS.map((group) => {
                const isExpanded = openMobileGroup === group.label;
                return (
                  <div key={group.label} className="py-2">
                    <button
                      type="button"
                      onClick={() => toggleMobileGroup(group.label)}
                      className="w-full flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-bone/90 hover:text-amber-retro py-1"
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          isExpanded ? 'rotate-180 text-amber-retro' : 'text-muted'
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-2 pl-3 border-l border-hairline space-y-2.5 py-1">
                        {group.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block"
                          >
                            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-signal-green block">
                              {item.aspect}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-bone/90 hover:text-amber-retro block">
                              {item.title}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Untouched Mobile Links */}
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 pt-1">
              {STATIC_NAV_LINKS.map((link) => (
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