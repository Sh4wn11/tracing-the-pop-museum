import React from 'react';
import ImagePlaceholder from '../ui/ImagePlaceholder';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 pb-16">
      {/* 1. Giant Dot-Matrix Title */}
      <div className="w-full overflow-hidden">
        <h1 className="font-display text-[15vw] sm:text-[13.5vw] lg:text-[148px] leading-[0.86] tracking-tight uppercase text-dot-matrix select-none text-center sm:text-left">
          TRACING THE POP
        </h1>
      </div>

      {/* 2. Main Hero Visual Collage Placeholder (White Background) */}
      <div className="mt-4">
        <ImagePlaceholder
          label="HERO VISUAL COLLAGE: NOKIA 3310 • SM MALL ATRIUM • RAGNAROK LAN SHOP • FRIENDSTER • PANGAKO SA 'YO"
          aspectRatio="aspect-[16/7] sm:aspect-[21/8]"
          className="w-full"
        />
      </div>

      {/* 3. Monospace Subtitle & Instruction Strip */}
      <div className="mt-5 pb-8 border-b border-hairline space-y-2">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-bone/90 leading-relaxed">
          PHILIPPINE POPULAR CULTURE ARCHIVE (2000–2010) — SPACE, AFFECT & SENSES, AND BODY & SELF-IMAGE.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          MO-HUM080 DIGITAL MUSEUM — SCROLL THE EXHIBITS OR SELECT A GALLERY WING ABOVE.
        </p>
      </div>

      {/* 4. Asymmetric 2-Column Editorial Intro (Matches "DEAD-ON WORK. DUE-NORTH ADVICE.") */}
      <div className="pt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bold Condensed Statement */}
        <div className="md:col-span-6">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] leading-[0.94] uppercase text-bone tracking-tight">
            ONE DECADE. RAPID TECH. PURE PINOY EMOTION.
          </h2>

          {/* Mini 4-Card Sticker/Artifact Row (White Placeholders) */}
          <div className="mt-6 grid grid-cols-4 gap-2.5">
            <ImagePlaceholder label="JEJECAP" aspectRatio="aspect-square" />
            <ImagePlaceholder label="BEYBLADE" aspectRatio="aspect-square" />
            <ImagePlaceholder label="NOKIA 3310" aspectRatio="aspect-square" />
            <ImagePlaceholder label="MP3 PLAYER" aspectRatio="aspect-square" />
          </div>
        </div>

        {/* Right Column: Short Curatorial Sentences & CTA */}
        <div className="md:col-span-6 space-y-5 text-bone/80 font-sans text-sm sm:text-base leading-relaxed">
          <p>
            From 2000 to 2010, rapid technology, commercial spaces, and global media reshaped everyday Filipino life. We moved from open streets into air-conditioned malls, LAN shops, and early Friendster profiles.
          </p>
          <p>
            Explore the decade primarily through visual artifacts. See how Youth Culture, Consumer Culture, and Cultural Hybridization transformed local identity—and where those trends are heading by 2030.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#exhibit-space"
              className="font-mono text-xs uppercase tracking-[0.2em] bg-bone text-canvas px-5 py-3 font-bold hover:bg-amber-retro transition-colors"
            >
              ENTER EXHIBIT 01: SPACE →
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-green">
              03 CURATED WINGS • 2000–2030
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}