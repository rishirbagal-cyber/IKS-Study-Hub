
import React, { useState } from 'react';
import { FLASHCARDS } from '../constants';

const FlashcardsPage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx(prev => (prev + 1) % FLASHCARDS.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx(prev => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
    }, 150);
  };

  const card = FLASHCARDS[currentIdx];

  return (
    <div className="max-w-2xl mx-auto space-y-12 animate-fade-in flex flex-col items-center">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-display font-bold text-slate-800">Quick Revision</h1>
        <p className="text-slate-500">Master terminology and key facts through flashcards.</p>
      </header>

      <div className="w-full h-80 perspective-1000">
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full h-full transition-all duration-500 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-white p-12 rounded-3xl border border-slate-200 shadow-xl flex flex-col items-center justify-center text-center backface-hidden">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4 bg-indigo-50 px-3 py-1 rounded-full">{card.category}</span>
            <h2 className="text-2xl font-bold text-slate-800 leading-relaxed">{card.front}</h2>
            <p className="mt-8 text-slate-400 text-sm italic">Click to flip</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-indigo-600 p-12 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden">
            <h2 className="text-2xl font-bold text-white leading-relaxed">{card.back}</h2>
            <p className="mt-8 text-indigo-200 text-sm italic">Click to flip back</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button onClick={prevCard} className="p-4 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <span className="text-slate-400 font-bold">{currentIdx + 1} / {FLASHCARDS.length}</span>
        <button onClick={nextCard} className="p-4 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default FlashcardsPage;
