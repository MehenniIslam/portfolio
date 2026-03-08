const categories = [
  {
    title: "Langages de Programmation",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
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
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
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

export const Skills = ({ lang }: { lang: string }) => {
  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Mes <span className="text-violet-500">Compétences</span></h2>
        <p className="text-slate-500 text-lg">Technologies acquises à l'IUT et en autodidacte [cite: 22, 80, 129]</p>
      </div>

      <div className="flex flex-col gap-12">
        {categories.map((category, catIdx) => (
          <div key={category.title} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 animate-fade-in-up" style={{ animationDelay: `${catIdx * 0.1}s` }}>
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-violet-500">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-violet-400 hover:shadow-lg transition-all transform hover:-translate-y-2"
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