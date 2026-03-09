import { t } from "@/components/translations";

const categories = [
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
      { name: "Français (Natif)", icon: "🇫🇷", url: "#" },
      { name: "Espagnol (C1/B2)", icon: "🇪🇸", url: "#" },
      { name: "Anglais (B2)", icon: "🇬🇧", url: "#" },
      { name: "Arabe (B2)", icon: "🇩🇿", url: "#" },
    ]
  }
];

export const Skills = ({ lang }: { lang: "FR" | "EN" | "ES" | "AR" }) => {
  const content = t[lang].skills;

  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{content.title} <span className="text-violet-500">{content.titleSpan}</span></h2>
        <p className="text-slate-400 text-lg">{content.subtitle}</p>
      </div>

      <div className="flex flex-col gap-12">
        {categories.map((category, catIdx) => (
          <div key={category.title} className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 animate-fade-in-up" style={{ animationDelay: `${catIdx * 0.1}s` }}>
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-violet-500">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.skills.map((skill) => (
               <div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center p-6 bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-2 cursor-default"
                >
                  {skill.icon.startsWith("http") ? (
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                  ) : (
                    <span className="text-4xl mb-4 group-hover:scale-110 transition-transform block">{skill.icon}</span>
                  )}
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};