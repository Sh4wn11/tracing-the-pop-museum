import React, { useState, useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { ArrowRight } from 'lucide-react';

const ERA_TABS = [
  { id: 'all', label: 'ALL WINGS' },
  { id: 'decade', label: '01 // 2000–2010 ARCHIVE' },
  { id: 'compare', label: '02 // PAST TO PRESENT' },
  { id: 'future', label: '03 // 2030 FUTURE' },
];

export default function ExhibitSection({ exhibit }) {
  const [activeTab, setActiveTab] = useState('all');

  // Ensure all sub-sections are visible when navigating via Navbar anchor links
  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash.startsWith(`#${exhibit.id}`)) {
        setActiveTab('all');
      }
    };

    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, [exhibit.id]);

  const showDecade = activeTab === 'all' || activeTab === 'decade';
  const showCompare = activeTab === 'all' || activeTab === 'compare';
  const showFuture = activeTab === 'all' || activeTab === 'future';

  return (
    <section
      id={exhibit.id}
      className="max-w-6xl mx-auto px-4 sm:px-8 pb-24 border-b border-hairline scroll-mt-24"
    >
      {/* 1. Industrial Chapter Header */}
      <SectionHeader
        chapter={exhibit.chapter}
        title={exhibit.wingTitle}
        rightMeta={exhibit.rightMeta}
        accent="red"
      />

      {/* 2. 2-Column Exhibit Intro */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-hairline">
        <div className="md:col-span-6">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] leading-[0.94] uppercase text-bone tracking-tight">
            {exhibit.headline}
          </h2>
        </div>

        <div className="md:col-span-6 space-y-4">
          <p className="font-sans text-sm sm:text-base text-bone/80 leading-relaxed">
            {exhibit.leadSummary}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {exhibit.relatedConcepts.map((concept) => (
              <span
                key={concept}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-retro border border-hairline bg-surface px-2.5 py-1"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Interactive Era Sub-Navigation Bar */}
      <div className="py-5 flex flex-wrap items-center justify-between gap-3 border-b border-hairline">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          FILTER EXHIBIT TIMELINE:
        </span>
        <div className="flex flex-wrap gap-2">
          {ERA_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 border transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-bone text-canvas border-bone font-bold'
                    : 'bg-transparent text-bone/70 border-hairline hover:border-bone/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          PART A: 2000–2010 VISUAL ARCHIVE GRID (01 PAST)
      ========================================================= */}
      {showDecade && (
        <div id={`${exhibit.id}-past`} className="pt-10 scroll-mt-28">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green font-bold">
                ERA 01
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-bone">
                2000–2010 VISUAL ARCHIVE
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted hidden sm:inline">
              05 CURATED ARTIFACTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {exhibit.decadeGallery.map((item, idx) => {
              const colSpan = idx < 2 ? 'md:col-span-3' : 'md:col-span-2';
              return (
                <article
                  key={item.id}
                  className={`${colSpan} bg-surface/70 border border-hairline p-4 flex flex-col justify-between group hover:border-bone/40 transition-colors`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-retro">
                        {item.tag}
                      </span>
                    </div>

                    <ImagePlaceholder
                      label={item.placeholderLabel}
                      src={item.src}
                      alt={item.title}
                      aspectRatio="aspect-[16/10]"
                      className="mb-4"
                    />

                    <h4 className="font-display text-xl sm:text-2xl uppercase text-bone tracking-wide mb-1.5">
                      {item.title}
                    </h4>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-bone/75 leading-relaxed">
                    {item.caption}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================
          PART B: PAST TO PRESENT COMPARISON SECTION (02 PAST TO PRESENT)
      ========================================================= */}
      {showCompare && (
        <div id={`${exhibit.id}-compare`} className="pt-14 scroll-mt-28">
          <div className="flex items-center justify-between mb-6 pt-6 border-t border-hairline">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-red font-bold">
                ERA 02
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-bone">
                PAST TO PRESENT COMPARISON
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted hidden sm:inline">
              THEN (2000s) VS. NOW (2020s)
            </span>
          </div>

          <div className="space-y-6">
            {exhibit.comparisons.map((comp) => (
              <div
                key={comp.dimension}
                className="bg-surface/50 border border-hairline p-5"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-retro font-bold">
                    DIMENSION // {comp.dimension}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted flex items-center gap-1.5">
                    2000–2010 <ArrowRight className="w-3 h-3 text-signal-red" /> PRESENT
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <ImagePlaceholder
                      label={comp.pastImageLabel}
                      src={comp.pastSrc}
                      aspectRatio="aspect-[16/9]"
                    />
                    <div className="pt-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted block mb-1">
                        [ ARCHIVE: 2000–2010 ]
                      </span>
                      <h4 className="font-display text-xl uppercase text-bone tracking-wide">
                        {comp.pastTitle}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-bone/75 leading-relaxed mt-1">
                        {comp.pastText}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 md:border-l md:border-hairline md:pl-6">
                    <ImagePlaceholder
                      label={comp.presentImageLabel}
                      src={comp.presentSrc}
                      aspectRatio="aspect-[16/9]"
                    />
                    <div className="pt-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green block mb-1">
                        [ CURRENT: PRESENT DAY ]
                      </span>
                      <h4 className="font-display text-xl uppercase text-bone tracking-wide">
                        {comp.presentTitle}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-bone/75 leading-relaxed mt-1">
                        {comp.presentText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
          PART C: FUTURE SECTION (03 FUTURE)
      ========================================================= */}
      {showFuture && (
        <div id={`${exhibit.id}-future`} className="pt-14 scroll-mt-28">
          <div className="flex items-center justify-between mb-6 pt-6 border-t border-hairline">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green font-bold">
                ERA 03
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-bone">
                FUTURE HORIZON: PHILIPPINES 2030
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green hidden sm:inline">
              POLICY & CULTURAL PROJECTIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {exhibit.future2030.map((fut) => (
              <div
                key={fut.code}
                className="bg-surface border border-hairline p-4 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green block mb-2.5">
                    {fut.code}
                  </span>

                  <ImagePlaceholder
                    label={fut.placeholderLabel}
                    src={fut.src}
                    aspectRatio="aspect-[16/10]"
                    className="mb-4"
                  />

                  <h4 className="font-display text-xl uppercase text-bone tracking-wide mb-1.5">
                    {fut.title}
                  </h4>
                </div>

                <p className="font-sans text-xs sm:text-sm text-bone/75 leading-relaxed">
                  {fut.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}