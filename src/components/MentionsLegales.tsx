import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const MentionsLegales = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-violet-500 mb-8 hover:underline">
        <ArrowLeft size={20} /> Retour à l'accueil
      </Link>
      
      <h1 className="text-4xl font-bold mb-10 text-slate-900 dark:text-white">Mentions Légales</h1>
      
      <div className="space-y-8 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-violet-500">1. Présentation du site</h2>
          <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
          <p className="mt-2"><strong>Propriétaire & Éditeur :</strong> Islam Mehenni Meghraoui</p>
          <p><strong>Statut :</strong> Étudiant / Développeur</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-violet-500">2. Hébergement</h2>
          <p>Le site est hébergé par : [Nom de ton hébergeur, ex: Vercel Inc / Netlify / Hostinger]</p>
          <p>Adresse de l'hébergeur : [Adresse de l'hébergeur]</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-violet-500">3. Propriété intellectuelle</h2>
          <p>Tout le contenu présent sur ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive de Islam Mehenni Meghraoui, sauf mention contraire. Toute reproduction ou distribution est interdite sans autorisation préalable.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-violet-500">4. Données personnelles</h2>
          <p>Les informations recueillies via le formulaire de contact (nom, email) sont uniquement utilisées pour répondre à vos messages. Elles ne sont jamais transmises à des tiers.</p>
        </section>
      </div>
    </div>
  );
};