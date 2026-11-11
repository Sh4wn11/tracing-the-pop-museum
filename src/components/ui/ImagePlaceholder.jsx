import React from 'react';

export default function ImagePlaceholder({
  label = 'IMAGE PLACEHOLDER',
  aspectRatio = 'aspect-video',
  className = '',
  src = '',
  alt = '',
}) {
  if (src) {
    // Automatically resolves local public/ paths for both localhost and GitHub Pages
    const resolvedSrc =
      src.startsWith('http') || src.startsWith('data:')
        ? src
        : `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;

    return (
      <div
        className={`relative overflow-hidden border border-hairline bg-white ${aspectRatio} ${className}`}
      >
        <img
          src={resolvedSrc}
          alt={alt || label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-white text-black border border-hairline p-4 select-none ${aspectRatio} ${className}`}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-800 text-center">
        [ {label} ]
      </span>
      <span className="font-mono text-[10px] text-neutral-500 mt-1">
        DROP IMAGE ASSET HERE
      </span>
    </div>
  );
}