import { t } from "@/components/translations";
import { Brain, ShieldCheck, Clock, Target, Users, Trophy } from "lucide-react";

const categories = [
  {
    title: "Atouts & Soft Skills", // NOUVELLE SECTION MISE EN AVANT
    isSpecial: true,
    skills: [
      { name: "Calme & Sang-froid", desc: "Capacité à rester lucide et efficace sous la pression.", icon: <ShieldCheck className="text-emerald-500" size={32} /> },
      { name: "Patience & Analyse", desc: "Prend le temps d'analyser chaque problème pour une solution optimale.", icon: <Clock className="text-blue-500" size={32} /> },
      { name: "Gestion du Stress", desc: "Résilience acquise lors de situations critiques (sport/projets).", icon: <Brain className="text-violet-500" size={32} /> },
      { name: "Esprit d'Équipe", desc: "Valeurs de cohésion renforcées par la pratique du foot à Tinqueux.", icon: <Users className="text-amber-500" size={32} /> },
    ]
  },
  {
    title: "Langages de Programmation",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg"},
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    ]
  },
  {
    title: "Frameworks & Librairies",
    skills: [
      { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Swift UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    ]
  },
  {
    title: "Outils & Logiciels",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
      { name: "Bash / Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "PHPStorm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg" },
      { name: "Oracle DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    ]
  },
  {
    title: "Langues",
    skills: [
      { name: "Français (Natif)", icon: "🇫🇷" },
      { name: "Espagnol (C1/B2)", icon: "🇪🇸" },
      { name: "Anglais (B2)", icon: "🇬🇧" },
      { name: "Arabe (B2)", icon: "🇩🇿" },
    ]
  }
];

export const Skills = ({ lang }: { lang: "FR" | "EN" | "ES" | "AR" }) => {
  const content = t[lang].skills;

  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{content.title} <span className="text-violet-500">{content.titleSpan}</span></h2>
        <p className="text-slate-400 text-lg italic">Expertise technique & Savoir-être</p>
      </div>

      <div className="flex flex-col gap-16">
        {categories.map((category, catIdx) => (
          <div key={category.title} className={`animate-fade-in-up`} style={{ animationDelay: `${catIdx * 0.1}s` }}>
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-violet-500 flex items-center gap-3">
              {category.title}
              {category.title === "Atouts & Soft Skills" && <Trophy size={20} className="text-amber-500" />}
            </h3>
            
            {/* Si c'est la section spéciale Soft Skills, on affiche des cartes plus grandes */}
            <div className={`grid gap-6 ${category.isSpecial ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"}`}>
              {category.skills.map((skill: any) => (
               <div
                  key={skill.name}
                  className={`group flex ${category.isSpecial ? "flex-row items-start p-8" : "flex-col items-center justify-center p-6"} bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-violet-500 transition-all shadow-sm hover:shadow-xl`}
                >
                  {/* Gestion Icônes (Images vs Lucide vs Emoji) */}
                  <div className={`${category.isSpecial ? "mr-6 shrink-0" : "mb-4"} transition-transform group-hover:scale-110`}>
                    {typeof skill.icon === "string" && skill.icon.startsWith("http") ? (
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                    ) : typeof skill.icon === "object" ? (
                      skill.icon
                    ) : (
                      <span className="text-4xl">{skill.icon}</span>
                    )}
                  </div>

                  <div className={category.isSpecial ? "text-left" : "text-center"}>
                    <span className={`block font-bold text-slate-800 dark:text-slate-100 ${category.isSpecial ? "text-xl mb-1" : "text-sm"}`}>
                      {skill.name}
                    </span>
                    {skill.desc && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* BANDEAU SC TINQUEUX EN BAS DES COMPÉTENCES */}
        <div className="mt-8 bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-500 p-3 rounded-2xl text-white shadow-lg shadow-emerald-500/20">
              <Users size={24} />
            </div>
            <p className="text-slate-700 dark:text-slate-200 font-medium leading-tight">
              Valeurs acquises au <strong>SC Tinqueux</strong> : Discipline, Respect et Force Collective.
            </p>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 italic">
            Mentalité Sportive
          </span>
        </div>
      </div>
    </div>
  );
};