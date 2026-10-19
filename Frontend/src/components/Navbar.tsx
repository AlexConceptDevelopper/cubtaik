import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo + Texte bien grand et lisible */}
        <a href="#" className="flex items-center gap-3.5 group">
          {/* Conteneur de l'icône agrandi */}
          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center shrink-0">
            <img 
              src="/cubtaik-favicon-256.png" 
              alt="CubTaik Icon" 
              className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform duration-200" 
            />
          </div>

          {/* Nom de la marque en vrai texte Tech ultra-pro */}
          <span className="font-extrabold text-2xl sm:text-3xl tracking-widest text-slate-100 group-hover:text-emerald-400 transition-colors font-mono">
            CUB<span className="text-emerald-400">TAIK</span>
          </span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-slate-300">
          <a href="#projets" className="hover:text-emerald-400 transition-colors uppercase">
            // Réalisations
          </a>
          <a href="#actualites" className="hover:text-emerald-400 transition-colors uppercase">
            // Tech_Feed
          </a>
          <a href="#a-propos" className="hover:text-emerald-400 transition-colors uppercase">
            // Studio
          </a>
          <a
            href="mailto:contact@cubtaik.fr"
            className="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 font-sans text-xs uppercase"
          >
            Contact
          </a>
        </nav>

        {/* Bouton Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-100"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-slate-900 bg-slate-950 px-4 pt-2 pb-6 flex flex-col gap-4 text-slate-300 font-mono text-sm">
          <a href="#projets" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-400 py-1 uppercase">
            // Réalisations
          </a>
          <a href="#actualites" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-400 py-1 uppercase">
            // Tech_Feed
          </a>
          <a href="#a-propos" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-400 py-1 uppercase">
            // Studio
          </a>
          <a
            href="mailto:contact@cubtaik.fr"
            className="inline-block text-center px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold font-sans text-xs uppercase"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};