import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { REFERENCES_DATA } from '../../data/museumData';
import { BookOpen, Check, Copy, Disc } from 'lucide-react';

export default function Footer() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyCitation = (ref) => {
    const fullText = `${ref.authors} (${ref.year}). ${ref.title} ${ref.source}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(ref.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <footer id="references" className="bg-canvas text-bone pt-4 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* 1. Academic & Policy References Section */}
        <SectionHeader
          chapter="ARCHIVE // REF"
          title="ACADEMIC & POLICY REFERENCES"
          rightMeta="08 VERIFIED SOURCES (APA 7TH)"
          accent="red"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-hairline">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[0.95] uppercase text-bone tracking-tight">
              SCHOLARLY & POLICY GROUNDING.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="font-sans text-xs sm:text-sm text-bone/75 leading-relaxed">
              All historical comparisons, contemporary analyses, and 2030 Philippine projections across Space, Affect & Senses, and Body & Self-Image are grounded in peer-reviewed literature and institutional policy reports. Click any reference card to copy its full APA citation.
            </p>
          </div>
        </div>

        {/* 2. 8-Card APA Reference Grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-hairline">
          {REFERENCES_DATA.map((ref) => {
            const isCopied = copiedId === ref.id;
            return (
              <div
                key={ref.id}
                onClick={() => handleCopyCitation(ref)}
                className="bg-surface/80 border border-hairline p-4 flex flex-col justify-between hover:border-amber-retro/60 transition-colors cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-retro font-bold">
                      {ref.code}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted group-hover:text-bone flex items-center gap-1">
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-signal-green" />
                          <span className="text-signal-green">COPIED APA</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> COPY CITATION
                        </>
                      )}
                    </span>
                  </div>

                  {/* Formatted APA Citation */}
                  <p className="font-sans text-xs sm:text-sm text-bone/90 leading-relaxed pl-4 -indent-4">
                    {ref.authors} ({ref.year}).{' '}
                    <span className="font-medium text-bone">{ref.title}</span>{' '}
                    <em className="text-bone/75">{ref.source}</em>
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-hairline/70 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-signal-green flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3" /> USED IN: {ref.exhibitLink}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Museum Colophon & Scope Metadata */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-signal-red text-canvas">
                <Disc className="w-3 h-3" />
              </span>
              <span className="font-display text-lg tracking-wider uppercase text-bone">
                TRACING THE POP: PH 2000–2010
              </span>
            </div>
            <p className="font-sans text-bone/70 leading-relaxed">
              An interactive digital museum preserving Philippine popular culture from 2000 to 2010. Designed for students, researchers, Gen Z/Alpha digital natives, and global visitors.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-retro">
              CURATED BY MO-HUM080 GROUP 5
            </p>
          </div>

          {/* Core Concepts */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-red font-bold block">
              CORE SOCIO-CULTURAL CONCEPTS
            </span>
            <ul className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/75 space-y-1.5">
              <li>• YOUTH CULTURE</li>
              <li>• IDENTITY & SELF-EXPRESSION</li>
              <li>• CONSUMER CULTURE</li>
              <li>• MEDIA & DIGITAL CULTURE</li>
              <li>• CULTURAL HYBRIDIZATION</li>
            </ul>
          </div>

          {/* Curatorial Scope Note (From Milestone 1 Doc) */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green font-bold block">
              CURATORIAL SCOPE & ARCHIVE NOTE
            </span>
            <p className="font-sans text-bone/70 leading-relaxed">
              This digital archive highlights selected visual artifacts across Space, Affect & Senses, and Body & Self-Image rather than an exhaustive pre-2000s history. Formatted for both mobile phones and desktop browsers.
            </p>
          </div>
        </div>

        {/* 4. Bottom Copyright Hairline */}
        <div className="mt-10 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>© 2026 TRACING THE POP DIGITAL MUSEUM • ALL EDUCATIONAL RIGHTS RESERVED</span>
          <span>BUILT WITH REACT + VITE + TAILWIND V4</span>
        </div>
      </div>
    </footer>
  );
}