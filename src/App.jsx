import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ExhibitSection from './components/sections/ExhibitSection';
import CoreConstants from './components/sections/CoreConstants';
import ExitLounge from './components/sections/ExitLounge';
import Footer from './components/layout/Footer';
import { EXHIBITS_DATA } from './data/museumData';

export default function App() {
  return (
    <div className="min-h-screen bg-industrial-grid text-bone selection:bg-signal-red selection:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Exhibits 01 (Space), 02 (Affect, Senses & Feelings), 03 (Body & Self-Image) */}
        {EXHIBITS_DATA.map((exhibit) => (
          <ExhibitSection key={exhibit.id} exhibit={exhibit} />
        ))}

        {/* CH 04: What Stayed the Same */}
        <CoreConstants />

        {/* CH 05: Interactive Exit Lounge */}
        <ExitLounge />
      </main>

      {/* Academic References & Museum Footer */}
      <Footer />
    </div>
  );
}