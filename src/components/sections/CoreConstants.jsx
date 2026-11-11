import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { CORE_CONSTANTS_DATA } from '../../data/museumData';

export default function CoreConstants() {
  return (
    <section
      id="constants"
      className="max-w-6xl mx-auto px-4 sm:px-8 pb-24 border-b border-hairline"
    >
      {/* 1. Industrial Hairline Header */}
      <SectionHeader
        chapter="CH 04"
        title="WHAT STAYED THE SAME"
        rightMeta="CONTINUITY ACROSS DECADES"
        accent="red"
      />

      {/* 2. 2-Column Intro */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-hairline">
        <div className="md:col-span-6">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] leading-[0.94] uppercase text-bone tracking-tight">
            DIFFERENT SCREENS. SAME PINOY SOUL.
          </h2>
        </div>

        <div className="md:col-span-6 space-y-4">
          <p className="font-sans text-sm sm:text-base text-bone/80 leading-relaxed">
            Specific mediums evolved—from Nokia keypads, LAN shops, and appointment teleseryes to smartphones and algorithmic feeds. Yet the underlying core of Philippine popular culture remains anchored in collective bonding, deep emotional expression, and adapting global trends to local life.
          </p>
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green border border-hairline bg-surface px-3 py-1">
            03 ENDURING CULTURAL PILLARS (2000–2030)
          </span>
        </div>
      </div>

      {/* 3. Three Pillars Grid with Side-by-Side Visual Placeholders */}
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CORE_CONSTANTS_DATA.map((item) => (
          <article
            key={item.id}
            className="bg-surface/70 border border-hairline p-5 flex flex-col justify-between hover:border-bone/40 transition-colors"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-retro block mb-3">
                {item.code}
              </span>

              {/* Dual White Image Placeholders (Then & Now) */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div>
                  <ImagePlaceholder
                    label={item.pastLabel}
                    src={item.pastSrc}
                    aspectRatio="aspect-square"
                  />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted block mt-1.5 text-center">
                    2000–2010
                  </span>
                </div>

                <div>
                  <ImagePlaceholder
                    label={item.presentLabel}
                    src={item.presentSrc}
                    aspectRatio="aspect-square"
                  />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-signal-green block mt-1.5 text-center">
                    PRESENT / 2030
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl uppercase text-bone tracking-wide mb-2">
                {item.title}
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-bone/75 leading-relaxed">
              {item.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}