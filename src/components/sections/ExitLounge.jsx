import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import {
  STARTER_PACK_ITEMS,
  INITIAL_TESTIMONIALS,
} from '../../data/museumData';
import { ArrowUp, Check, RotateCcw, Send } from 'lucide-react';

const BADGE_OPTIONS = [
  'FRIENDSTER VIP',
  'NOKIA 3310 MASTER',
  'RAGNAROK GUILD LEADER',
  'UKAY-UKAY DIGGER',
  'OPM RAKISTA',
];

export default function ExitLounge() {
  // Widget 1 State: Starter Pack Selector (Max 3)
  const [selectedItems, setSelectedItems] = useState([
    'nokia',
    'ragnarok',
    'pangako',
  ]);

  // Widget 2 State: Friendster Testimonial Wall
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [handle, setHandle] = useState('');
  const [badge, setBadge] = useState(BADGE_OPTIONS[0]);
  const [message, setMessage] = useState('');

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else if (selectedItems.length < 3) {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handlePostTestimonial = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newEntry = {
      id: Date.now(),
      handle: handle.trim() || 'anon_visitor_2005',
      badge,
      date: 'JUST NOW // LIVE LOG',
      message: message.trim(),
    };

    setTestimonials([newEntry, ...testimonials]);
    setHandle('');
    setMessage('');
  };

  return (
    <section
      id="exit-lounge"
      className="max-w-6xl mx-auto px-4 sm:px-8 pb-24 border-b border-hairline"
    >
      {/* 1. Acid-Green Industrial Header (Matches Reference 3 "CH 0X") */}
      <SectionHeader
        chapter="CH 05"
        title="EXIT LOUNGE // TOUCH THE ARCHIVE"
        rightMeta="INTERACTIVE VISITOR TERMINAL"
        accent="green"
      />

      {/* 2. Section Intro */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-hairline">
        <div className="md:col-span-6">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] leading-[0.94] uppercase text-bone tracking-tight">
            PACK YOUR MEMORY. LEAVE A TESTIMONIAL.
          </h2>
        </div>

        <div className="md:col-span-6 space-y-3">
          <p className="font-sans text-sm sm:text-base text-bone/80 leading-relaxed">
            The 2000s bridged analog street play and our hyper-digital present. Before exiting the museum, curate your 3-artifact 2000s Starter Pack or post a Friendster-style testimonial on our archive wall.
          </p>
        </div>
      </div>

      {/* 3. Two-Column Interactive Workbench */}
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT WIDGET: 2000s Starter Pack Builder (5 Cols) */}
        <div className="lg:col-span-5 bg-surface border border-hairline p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green font-bold">
                EXP 01 // 2000s STARTER PACK
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-retro">
                SELECTED: {selectedItems.length} / 3
              </span>
            </div>

            <p className="font-sans text-xs text-bone/75 mb-4">
              Select up to 3 artifacts from the exhibits to generate your personal museum pass:
            </p>

            {/* Selectable Artifact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {STARTER_PACK_ITEMS.map((item) => {
                const isSelected = selectedItems.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-center justify-between text-left px-3 py-2 border font-mono text-[10px] uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-bone text-canvas border-bone font-bold'
                        : 'bg-canvas/60 text-bone/80 border-hairline hover:border-bone/40'
                    }`}
                  >
                    <span className="truncate pr-2">{item.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Starter Pack Preview Ticket */}
          <div className="border border-bone/30 bg-canvas p-4">
            <div className="flex items-center justify-between border-b border-hairline pb-2 mb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-retro">
                MUSEUM SOUVENIR PASS // PH 2000–2010
              </span>
              <button
                type="button"
                onClick={() => setSelectedItems([])}
                className="font-mono text-[9px] uppercase tracking-wider text-muted hover:text-bone flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> CLEAR
              </button>
            </div>

            {/* 3 Mini White Image Placeholders for Selected Items */}
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((slotIdx) => {
                const itemId = selectedItems[slotIdx];
                const itemObj = STARTER_PACK_ITEMS.find((i) => i.id === itemId);
                return (
                  <div key={slotIdx} className="space-y-1">
                    <ImagePlaceholder
                      label={itemObj ? itemObj.name : 'EMPTY SLOT'}
                      src={itemObj ? itemObj.src : ''}
                      aspectRatio="aspect-square"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT WIDGET: Friendster Testimonial Wall (7 Cols) */}
        <div className="lg:col-span-7 bg-surface border border-hairline p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-red font-bold">
                EXP 02 // FRIENDSTER TESTIMONIAL WALL
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                PUBLIC GUESTBOOK
              </span>
            </div>

            {/* Testimonial Input Form */}
            <form
              onSubmit={handlePostTestimonial}
              className="space-y-3 mb-6 bg-canvas p-4 border border-hairline"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted block mb-1">
                    2000s HANDLE / NAME
                  </label>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="e.g. xX_jEjEmOn_07_Xx"
                    maxLength={28}
                    className="w-full bg-surface border border-hairline px-3 py-2 font-mono text-xs text-bone focus:outline-none focus:border-amber-retro"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted block mb-1">
                    RETRO BADGE
                  </label>
                  <select
                    value={badge}
                    onChange={(e) => setBadge(e.target.value)}
                    className="w-full bg-surface border border-hairline px-3 py-2 font-mono text-xs text-bone focus:outline-none focus:border-amber-retro"
                  >
                    {BADGE_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted block mb-1">
                  YOUR 2000–2010 CORE MEMORY (MAX 140 CHARS)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What is your ultimate 2000s core memory?"
                    maxLength={140}
                    className="flex-grow bg-surface border border-hairline px-3 py-2 font-sans text-xs sm:text-sm text-bone focus:outline-none focus:border-amber-retro"
                  />
                  <button
                    type="submit"
                    className="bg-bone text-canvas font-mono text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 hover:bg-amber-retro transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <Send className="w-3 h-3" /> POST
                  </button>
                </div>
              </div>
            </form>

            {/* Live Testimonial Feed */}
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="border border-hairline bg-canvas/80 p-3.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-amber-retro">
                        @{t.handle}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] bg-surface border border-hairline text-signal-green px-2 py-0.5">
                        {t.badge}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      {t.date}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-bone/85 leading-relaxed">
                    "{t.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="mt-6 pt-4 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              END OF CURATED EXHIBITS
            </span>
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone border border-bone/40 px-3 py-1.5 hover:bg-bone hover:text-canvas transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowUp className="w-3 h-3" /> BACK TO TOP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}