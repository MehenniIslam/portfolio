import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import proPhoto from "@/assets/my-photo.jpg"; 

export const Home = ({ lang }: { lang: string }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm("service_mu9ozq5", "template_v8szh2k", e.currentTarget, "LbbIRCJY3KXuxCAuO")
      .then(() => {
          alert("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        }, (error) => {
          console.error(error);
          alert("Erreur lors de l'envoi.");
        });
  };

  return (
    <div className="pt-28 pb-12 px-4 flex flex-col items-center justify-center">
      
      {/* SECTION HEADER / PRESENTATION */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-32 animate-fade-in-up">
        <div className="flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-violet-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          <img
            src={proPhoto}
            alt="Islam Mehenni Meghraoui"
            className="relative w-64 h-64 rounded-2xl object-cover shadow-xl border-2 border-violet-200 dark:border-violet-800"
          />
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Bonjour, je suis <span className="text-violet-500">Islam</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Étudiant en informatique à l'IUT, motivé et sérieux. Passionné par le développement logiciel et déterminé à me spécialiser en cybersécurité. Je m'investis pleinement pour apprendre et progresser.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="/CV-Info-Mehenni-Meghraoui_Islam.pdf" download className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-violet-500/30 hover:-translate-y-1">
              <Download size={20} /> CV Français
            </a>
            <a href="/Mehenni-Meghraoui-Islam.pdf" download className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-6 py-3 rounded-xl font-medium transition-all hover:-translate-y-1">
              <Download size={20} /> CV English
            </a>
          </div>
        </div>
      </div>

      {/* SECTION APERCU PROJETS */}
      <div className="w-full max-w-5xl mb-32">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold">Projets Récents</h2>
          <Link to="/projects" className="text-violet-500 hover:text-violet-600 font-medium flex items-center gap-1">
            Voir tout <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-violet-400 transition-colors">
              <h3 className="text-xl font-bold mb-3">Bubble Survivor (Python)</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">Jeu de survie en terminal. Lauréat 2ème place au concours NSI de la Marne.</p>
           </div>
           <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-violet-400 transition-colors">
              <h3 className="text-xl font-bold mb-3">Base de données JO</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">Création et gestion d'une base de données complexe en SQL avec génération de données.</p>
           </div>
        </div>
      </div>

      {/* SECTION APERCU SKILLS */}
      <div className="w-full max-w-5xl mb-32 text-center">
        <h2 className="text-3xl font-bold mb-8">Langages & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Python", "C++", "SQL", "PHP", "HTML/CSS", "Symfony", "React"].map(skill => (
            <span key={skill} className="px-5 py-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-300">
              {skill}
            </span>
          ))}
        </div>
        <Link to="/skills" className="inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-6 py-3 rounded-xl font-medium hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors">
          Explorer mes compétences <ArrowRight size={18} />
        </Link>
      </div>

      {/* SECTION CONTACT */}
      <div id="contact" className="w-full max-w-lg bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">Me Contacter</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-violet-400" size={20} />
            <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-violet-400 outline-none transition-all" />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-violet-400" size={20} />
            <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-violet-400 outline-none transition-all" />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-3.5 text-violet-400" size={20} />
            <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required rows={4} className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-violet-400 outline-none transition-all resize-none" />
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-violet-500/25">
            <Send size={18} /> Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};