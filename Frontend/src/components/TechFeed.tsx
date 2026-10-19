import React from 'react';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  summary: string;
  tag: string;
}

const TECH_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Lancement de LettrePetiteSouris.fr",
    category: "Projet / Release",
    date: "Octobre 2026",
    summary: "Déploiement de notre plateforme automatisée de création de souvenirs personnalisés pour enfants.",
    tag: "Micro-SaaS"
  },
  {
    id: 2,
    title: "Pourquoi nous utilisons Java Spring Boot & React TS",
    category: "Tech Stack",
    date: "Septembre 2026",
    summary: "Retour d'expérience sur la stabilité d'une stack typée robuste pour la gestion de micro-services e-commerce.",
    tag: "Architecture"
  },
  {
    id: 3,
    title: "Paiements automatisés avec Stripe & Webhooks",
    category: "SaaS & Ops",
    date: "Août 2026",
    summary: "Gestion sécurisée des transactions et génération synchrone de documents PDF haute définition.",
    tag: "Stripe"
  }
];

export const TechFeed: React.FC = () => {
  return (
    <section id="actualites" className="py-24 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">// VEILLE & INSIGHTS</span>
            <h2 className="text-3xl font-bold text-slate-100 mt-2">Tech & Product Feed</h2>
            <p className="mt-2 text-slate-400">Brèves d'actualités, choix d'architecture et coulisses de nos projets.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECH_ARTICLES.map((article) => (
            <article 
              key={article.id} 
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                  <span className="text-emerald-400/80">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/50 flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  #{article.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};