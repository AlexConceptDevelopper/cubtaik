import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectsShowcase } from "../components/ProjectsShowcase";
import { TechFeed } from "../components/TechFeed";
import { AboutStudio } from "../components/AboutStudio";
import { Helmet } from "react-helmet-async";

export const Home: React.FC = () => {
  // Données structurées Schema.org pour lier l'écosystème CubTaik à Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CubTaik",
    "url": "https://www.cubtaik.fr",
    "logo": "https://www.cubtaik.fr/cubtaik-favicon-32.png",
    "description": "Studio indépendant de création de logiciels, SaaS et micro-services Web.",
    "founder": {
      "@type": "Person",
      "name": "Alexandre Cubizolle"
    },
    "publishingPrinciples": "https://www.cubtaik.fr/",
    "knowsAbout": ["Full-Stack Development", "Java Spring Boot", "React", "TypeScript", "SaaS Architecture", "SEO Optimization"],
    "brand": [
      {
        "@type": "Brand",
        "name": "SolvHub"
      },
      {
        "@type": "Brand",
        "name": "BuyLogic"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Helmet>
        <title>CubTaik – Studio de Création Logicielle & SaaS Indépendant</title>
        <meta
          name="description"
          content="CubTaik est le studio indépendant qui conçoit, développe et propulse un écosystème de produits numériques, micro-services et applications Web (SolvHub, BuyLogic)."
        />
        <link rel="canonical" href="https://www.cubtaik.fr/" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono mb-8 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Studio de Création Logicielle & SaaS
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight sm:leading-none">
              Nous bâtissons des{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-teal-100">
                produits numériques
              </span>{" "}
              utiles et automatisés.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
              CubTaik est l'entité centrale qui conçoit, développe et propulse des micro-services Web axés sur la simplicité et l'expérience utilisateur.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projets"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 text-xs uppercase tracking-wider"
              >
                Découvrir nos réalisations
              </a>
              <a
                href="#actualites"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 transition-all text-xs uppercase tracking-wider font-mono"
              >
                // Tech_Feed
              </a>
            </div>
          </div>
        </section>

        <ProjectsShowcase />
        <TechFeed />
        <AboutStudio />
      </main>

      <Footer />
    </div>
  );
};