import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 : Entité */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-lg text-slate-100">CUBTAIK</span>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Studio indépendant d'édition logicielle et d'outils web automatisés.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            SIREN : 109 752 832 — France
          </p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div>
          <h4 className="text-slate-200 font-semibold mb-3">Nos Projets</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="https://www.buylogic.fr" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                BuyLogic ↗
              </a>
            </li>
            <li>
              <a href="https://solvhub.fr" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                SolvHub ↗
              </a>
            </li>
            <li>
              <a href="https://www.lettrepetitesouris.fr" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                Lettre Petite Souris ↗
              </a>
            </li>
            <li>
              <a href="https://www.permisduperenoel.fr" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                Permis du Père Noël ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Régime fiscal */}
        <div>
          <h4 className="text-slate-200 font-semibold mb-3">Informations</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            TVA non applicable, art. 293 B du CGI
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} CubTaik. Tous droits réservés.
      </div>
    </footer>
  );
};