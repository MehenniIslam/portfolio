import React from "react";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Islam Mehenni Meghraoui</h1>
        <p>Étudiant en informatique à l'IUT – Portfolio de projets et compétences en développement web et logiciel.</p>
      </section>

      {/* Projets Section */}
      <section className="projects-section">
        <h2>Mes Projets</h2>
        <p>Voici quelques projets réalisés avec React, Vite, PHP et SQL :</p>
        <ul>
          <li>Portfolio interactif – React + Vite</li>
          <li>Site e-commerce – PHP & MySQL</li>
          <li>Application de gestion – Python & SQL</li>
        </ul>
      </section>

      {/* Compétences Section */}
      <section className="skills-section">
        <h2>Mes Compétences</h2>
        <ul>
          <li>HTML : 95%</li>
          <li>CSS : 80%</li>
          <li>JavaScript / React : 90%</li>
          <li>PHP : 55%</li>
          <li>Python : 85%</li>
          <li>SQL : 85%</li>
          <li>Langues : Français (100%), Anglais (80%), Espagnol (70%), Arabe (85%)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
