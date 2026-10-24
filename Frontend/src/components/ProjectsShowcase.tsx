import React, { useState } from 'react';

// =====================================================================
// DÉFINITION DES CHEMINS D'IMAGES
// =====================================================================
const IMG_BUYLOGIC_MAIN = "/projects/buylogic-main.png";
const IMG_BUYLOGIC_PREVIEW1 = "/projects/buylogic-preview-1.png";
const IMG_BUYLOGIC_PREVIEW2 = "/projects/buylogic-preview-2.png";

const IMG_SOURIS_MAIN = "/projects/lettrepetitesouris-main.png";
const IMG_SOURIS_PREVIEW1 = "/projects/lettrepetitesouris-preview-1.png";
const IMG_SOURIS_PREVIEW2 = "/projects/lettrepetitesouris-preview-2.png";

const IMG_NOEL_MAIN = "/projects/permisduperenoel-main.png";
const IMG_NOEL_PREVIEW1 = "/projects/permisduperenoel-preview-1.png";
const IMG_NOEL_PREVIEW2 = "/projects/permisduperenoel-preview-2.png";

const IMG_SOLVHUB_MAIN = "/projects/solvhub-main.png";
const IMG_SOLVHUB_PREVIEW1 = "/projects/solvhub-preview-1.png";
const IMG_SOLVHUB_PREVIEW2 = "/projects/solvhub-preview-2.png";

interface Project {
  id: string;
  title: string;
  domain: string;
  status: string;
  description: string;
  tags: string[];
  url: string;
  images: {
    main: string;
    preview1: string;
    preview2: string;
  };
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'buylogic',
    title: 'BuyLogic',
    domain: 'buylogic.fr',
    status: 'PRODUCTION',
    description: "Plateforme SaaS prédictive d'optimisation des achats et des stocks pour PME. Analyse automatisée des flux, suivi centralisé des commandes fournisseurs et tableaux de bord décisionnels en temps réel.",
    tags: ['React TSX', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://www.buylogic.fr',
    images: {
      main: IMG_BUYLOGIC_MAIN,
      preview1: IMG_BUYLOGIC_PREVIEW1,
      preview2: IMG_BUYLOGIC_PREVIEW2,
    },
  },
  {
    id: 'solvhub',
    title: 'SolvHub',
    domain: 'solvhub.fr',
    status: 'PRODUCTION',
    description: "Plateforme communautaire de résolution de pannes mécaniques et d'équipements. Système d'entraide basé sur le vote, la validation de solutions techniques et des badges de maîtrise pour les contributeurs.",
    tags: ['React TSX', 'Spring Boot', 'PostgreSQL', 'Cloudinary', 'Tailwind CSS'],
    url: 'https://solvhub.fr',
    images: {
      main: IMG_SOLVHUB_MAIN,
      preview1: IMG_SOLVHUB_PREVIEW1,
      preview2: IMG_SOLVHUB_PREVIEW2,
    },
  },
  {
    id: 'lettre-petite-souris',
    title: 'Lettre Petite Souris',
    domain: 'lettrepetitesouris.fr',
    status: 'PRODUCTION',
    description: "Plateforme SaaS dédiée à la création et l'impression instantanée de kits souvenirs personnalisés pour enfants. Gestion automatisée du tunnel de commande et génération synchrone de documents PDF haute définition.",
    tags: ['React TSX', 'Spring Boot', 'Stripe', 'Brevo API'],
    url: 'https://lettrepetitesouris.fr',
    images: {
      main: IMG_SOURIS_MAIN,
      preview1: IMG_SOURIS_PREVIEW1,
      preview2: IMG_SOURIS_PREVIEW2,
    },
  },
  {
    id: 'permis-pere-noel',
    title: 'Permis du Père Noël',
    domain: 'permisduperenoel.fr',
    status: 'PRODUCTION',
    description: "Service web e-commerce permettant la configuration et le téléchargement immédiat de diplômes et permis d'authenticité pour les fêtes. Architecture résiliente et délivrabilité e-mail garantie.",
    tags: ['React TSX', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://permisduperenoel.fr',
    images: {
      main: IMG_NOEL_MAIN,
      preview1: IMG_NOEL_PREVIEW1,
      preview2: IMG_NOEL_PREVIEW2,
    },
  },
];

export const ProjectsShowcase: React.FC = () => {
  // État pour gérer la modale de zoom d'image
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="projets" className="py-24 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">// SHOWCASE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-2">Nos Réalisations</h2>
          <p className="mt-3 text-slate-400">Découvrez les plateformes et services numériques édités sous le pavillon CubTaik.</p>
        </div>

        {/* Liste des Projets */}
        <div className="space-y-24">
          {PROJECTS_DATA.map((project) => (
            <article 
              key={project.id} 
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              {/* GRILLE D'IMAGES (Grosse image à gauche + 2 en colonne à droite) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                
                {/* Image principale (2 colonnes) - Cliquable */}
                <div 
                  onClick={() => setActiveImage(project.images.main)}
                  className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950 aspect-[16/10] cursor-pointer relative group/img shadow-md"
                >
                  <img 
                    src={project.images.main} 
                    alt={`Capture principale de ${project.title} - ${project.domain}`} 
                    className="w-full h-full object-cover object-top group-hover/img:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono text-emerald-400">
                    🔍 Cliquer pour agrandir
                  </div>
                </div>

                {/* 2 Images secondaires à droite - Cliquables */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  <div 
                    onClick={() => setActiveImage(project.images.preview1)}
                    className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950 aspect-[16/10] lg:aspect-[16/9] cursor-pointer relative group/img shadow-md"
                  >
                    <img 
                      src={project.images.preview1} 
                      alt={`Aperçu 1 de ${project.title}`} 
                      className="w-full h-full object-cover object-top group-hover/img:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-[10px] font-mono text-emerald-400">
                      🔍 Agrandir
                    </div>
                  </div>

                  <div 
                    onClick={() => setActiveImage(project.images.preview2)}
                    className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950 aspect-[16/10] lg:aspect-[16/9] cursor-pointer relative group/img shadow-md"
                  >
                    <img 
                      src={project.images.preview2} 
                      alt={`Aperçu 2 de ${project.title}`} 
                      className="w-full h-full object-cover object-top group-hover/img:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-[10px] font-mono text-emerald-400">
                      🔍 Agrandir
                    </div>
                  </div>
                </div>

              </div>

              {/* BLOC EXPLICATIF EN BAS */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{project.domain}</span>
                  </div>
                  
                  {/* Titre cliquable optimisé SEO */}
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                      aria-label={`Accéder au site officiel de ${project.title}`}
                    >
                      {project.title} ↗
                    </a>
                  </h3>
                  
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton d'action avec ancre optimisée */}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Visiter la plateforme ${project.title} (${project.domain})`}
                  className="shrink-0 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/10"
                >
                  Visiter {project.title} ↗
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ================= MODALE / LIGHTBOX PLEIN ÉCRAN ================= */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Bouton Fermer */}
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-emerald-400 hover:border-emerald-500 transition-all"
            >
              ✕ Fermer
            </button>
            {/* Image en grand */}
            <img 
              src={activeImage} 
              alt="Aperçu agrandi du projet" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-slate-800 shadow-2xl bg-slate-900"
            />
          </div>
        </div>
      )}
    </section>
  );
};