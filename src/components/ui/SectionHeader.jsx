import React from 'react';

export default function SectionHeader({
  chapter = 'CH 01',
  title = 'EXHIBIT',
  rightMeta = 'ARCHIVE WING',
  accent = 'red', // 'red' or 'green'
}) {
  const accentColor =
    accent === 'green' ? 'text-signal-green' : 'text-signal-red';

  return (
    <div className="w-full pt-12 pb-6">
      <div className="flex items-center gap-4">
        {/* Left Chapter Tag & Label */}
        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.2em] font-bold ${accentColor}`}
          >
            {chapter}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone/90">
            {title}
          </span>
        </div>

        {/* Stretching 1px Industrial Hairline */}
        <div className="h-[1px] bg-hairline flex-grow" />

        {/* Right Technical Metadata */}
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted shrink-0 hidden sm:inline">
          {rightMeta}
        </span>
      </div>
    </div>
  );
}