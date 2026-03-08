interface Skill {
  label: string;
  category: "languages" | "programming";
}

const skills: Skill[] = [
  { label: "Français", category: "languages" },
  { label: "Anglais", category: "languages" },
  { label: "Espagnol", category: "languages" },
  { label: "Arabe", category: "languages" },
  { label: "HTML", category: "programming" },
  { label: "CSS", category: "programming" },
  { label: "C++", category: "programming" },
  { label: "PHP", category: "programming" },
  { label: "Python", category: "programming" },
  { label: "SQL", category: "programming" },
];

export const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
          Mes <span className="text-purple-600 dark:text-purple-400">Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="group relative w-36 h-36 md:w-40 md:h-40 flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900/50 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-3 cursor-default"
              style={{ animation: `float 3s ease-in-out infinite ${index * 0.2}s` }}
            >
              <div className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {skill.label}
              </div>
              <div className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                {skill.category === 'languages' ? 'Langue' : 'Tech'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};