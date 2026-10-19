import React from 'react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="a-propos" className="py-24 border-t border-slate-900 bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">// STUDIO CUBTAIK</span>
            <h2 className="text-3xl font-bold text-slate-100 mt-2">Un studio agile orienté produit & autonomie.</h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Fondé avec une vision centrée sur l'automatisation et l'expérience utilisateur, CubTaik conçoit et exploite un écosystème de micro-services web modernes.
            </p>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              De l'architecture backend distribuée aux interfaces utilisateurs typées, chaque projet bénéficie d'une rigueur technique garantissant performance, sécurité et pérennité.
            </p>
          </div>

          {/* Carte technique de réassurance */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-slate-500">Statut Légal</span>
              <span className="text-emerald-400 font-bold">Entreprise Active</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-slate-500">Stack Principale</span>
              <span className="text-slate-200">Java / React TSX / Postgres</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Infrastructure</span>
              <span className="text-slate-200">Cloudflare / IONOS / Railway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};