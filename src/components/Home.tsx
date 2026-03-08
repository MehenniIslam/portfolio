import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { t } from "./translations"; 
import photoAvecCasque from "@/assets/photo-casque.jpg"; 
import photoSansCasque from "@/assets/photo-sans-casque.jpg"; 

export const Home = ({ lang }: { lang: "FR" | "EN" | "ES" | "AR" }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const content = t[lang].home;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mu9ozq5",   // Ton Service ID
        "template_v8szh2k",  // Ton Template ID
        e.currentTarget,
        "LbbIRCJY3KXuxCAuO"  // Ta clé publique (Public Key)
      )
      .then(
        () => {
          alert(content.success);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erreur EmailJS:", error);
          alert(content.error);
        }
      );
  };

  return (
    <div className="pt-32 pb-12 px-4 flex flex-col items-center justify-center">
      
      {/* HEADER / PRESENTATION */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-32 animate-fade-in-up">
        
        {/* EFFET PHOTO */}
        <div className="flex-shrink-0 relative group w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-2 border-violet-500/50 cursor-pointer">
          <img src={photoSansCasque} alt="Islam" className="absolute inset-0 w-full h-full object-cover" />
          <img src={photoAvecCasque} alt="Islam Casque" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        </div>

        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            {content.greeting} <span className="text-violet-500 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">Islam</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            {content.description}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="/CV-Info-Mehenni-Meghraoui_Islam.pdf" download className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:-translate-y-1">
              <Download size={20} /> {content.cvFr}
            </a>
            <a href="/Mehenni-Meghraoui-Islam.pdf" download className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:-translate-y-1">
              <Download size={20} /> {content.cvEn}
            </a>
          </div>
        </div>
      </div>

      {/* PROJETS RECENTS */}
      <div className="w-full max-w-5xl mb-32">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold">{content.recentProjects}</h2>
          <Link to="/projects" className="text-violet-500 hover:text-violet-400 font-medium flex items-center gap-1">
            {content.viewAll} <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-violet-500 transition-colors">
              <h3 className="text-xl font-bold mb-3">Bubble Survivor (Python)</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">Jeu de survie en terminal. Lauréat 2ème place au concours NSI de la Marne.</p>
           </div>
           <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-violet-500 transition-colors">
              <h3 className="text-xl font-bold mb-3">Base de données JO</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">Création et gestion d'une base de données complexe en SQL avec génération de données.</p>
           </div>
        </div>
      </div>

      {/* APERCU COMPETENCES */}
      <div className="w-full max-w-5xl mb-32 text-center">
        <h2 className="text-3xl font-bold mb-8">{content.skillsTitle}</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Python", "C++", "SQL", "PHP", "HTML/CSS", "Symfony", "React"].map(skill => (
            <span key={skill} className="px-5 py-3 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-300">
              {skill}
            </span>
          ))}
        </div>
        <Link to="/skills" className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-600 dark:text-violet-400 px-6 py-3 rounded-xl font-medium hover:bg-violet-500/20 transition-colors">
          {content.exploreSkills} <ArrowRight size={18} />
        </Link>
      </div>

      {/* CONTACT */}
      <div id="contact" className="w-full max-w-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">{content.contactTitle}</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-violet-500" size={20} />
            <input type="text" name="name" placeholder={content.namePlaceholder} value={formData.name} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-violet-500" size={20} />
            <input type="email" name="email" placeholder={content.emailPlaceholder} value={formData.email} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-3.5 text-violet-500" size={20} />
            <textarea name="message" placeholder={content.messagePlaceholder} value={formData.message} onChange={handleChange} required rows={4} className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all resize-none" />
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-violet-500/25">
            <Send size={18} /> {content.send}
          </button>
        </form>
      </div>
    </div>
  );
};