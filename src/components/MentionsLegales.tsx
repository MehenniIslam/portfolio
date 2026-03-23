import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const MentionsLegales = ({ lang }: { lang: string }) => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto animate-fade-in">
      <Link to="/" className="inline-flex items-center gap-2 text-violet-500 mb-8 hover:translate-x-1 transition-transform">
        <ArrowLeft size={20} /> {lang === "FR" ? "Retour à l'accueil" : "Back to home"}
      </Link>
      
      <h1 className="text-4xl font-bold mb-10">Mentions Légales</h1>
      
      <div className="space-y-8 text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-violet-500">1. Édition du site</h2>
          <p>Ce site est le portfolio personnel de <strong>Islam Mehenni Meghraoui</strong>.</p>
          <p>Contact : islam.mehenni-meghraoui@etudiant.univ-reims.fr</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-violet-500">2. Hébergement</h2>
          <p>Ce site est hébergé par <strong>Vercel Inc.</strong>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-violet-500">3. Propriété intellectuelle</h2>
          <p>L'ensemble du contenu (textes, code, design) est la propriété de Islam Mehenni Meghraoui. Toute reproduction est interdite sans accord écrit.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-violet-500">4. Cookies & Données</h2>
          <p>Ce site n'utilise aucun cookie de traçage publicitaire. Les données envoyées via le formulaire de contact sont utilisées exclusivement pour le traitement de votre demande.</p>
        </section>
      </div>
    </div>
  );
};