import { useEffect, useRef, useState } from "react";

interface Skill {
  label: string;
  percent: number;
  category: "languages" | "programming";
}

const skills: Skill[] = [
  { label: "Français", percent: 100, category: "languages" },
  { label: "Anglais", percent: 80, category: "languages" },
  { label: "Espagnol", percent: 70, category: "languages" },
  { label: "Arabe", percent: 85, category: "languages" },
  { label: "HTML", percent: 95, category: "programming" },
  { label: "CSS", percent: 70, category: "programming" },
  { label: "C++", percent: 50, category: "programming" },
  { label: "PHP", percent: 55, category: "programming" },
  { label: "Python", percent: 85, category: "programming" },
  { label: "SQL", percent: 85, category: "programming" },
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  return (
    <div ref={barRef} className="mb-6 animate-slide-in-left">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.label}</span>
        <span className="text-white/80">{skill.percent}%</span>
      </div>
      <div className="h-3 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1500 ease-out"
          style={{
            width: isVisible ? `${skill.percent}%` : "0%",
            transitionDuration: "1.5s",
          }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const languages = skills.filter((s) => s.category === "languages");
  const programming = skills.filter((s) => s.category === "programming");

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: "#6B5B95" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compétences
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Mes compétences linguistiques et techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/10 p-8 rounded-lg shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              Langues
            </h3>
            <div>
              {languages.map((skill) => (
                <SkillBar key={skill.label} skill={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-lg shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              Programmation
            </h3>
            <div>
              {programming.map((skill) => (
                <SkillBar key={skill.label} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
