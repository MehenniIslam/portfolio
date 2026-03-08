import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import bubbleImg from "@/assets/buble.png";
import pegsolitaireImg from "@/assets/pegsolitaire.png";
import vmLinuxImg from "@/assets/vm-linux.png";
import sqlDbImg from "@/assets/sql-db.png";

const projects = [
  {
    id: 1,
    title: "Bubble Survivor",
    description: "Jeu de survie en terminal développé en Python (POO). Lauréat 2ème place à la Coupe NSI de la Marne[cite: 51, 53, 116, 117].",
    image: bubbleImg,
    tags: ["Python", "POO", "Jeu", "Algorithmique"],
    link: "https://github.com/MehenniIslam/BubbleSurvivor",
  },
  {
    id: 2,
    title: "PegSolitaire",
    description: "Jeu de billes classique avec résolution automatique via algorithme en Python[cite: 48].",
    image: pegsolitaireImg,
    tags: ["Python", "Algorithme", "Logique"],
    link: "https://github.com/MehenniIslam/Pegsolitaire",
  },
  {
    id: 3,
    title: "Base de Données JO",
    description: "Conception SQL complète, tables, relations et requêtes complexes avec génération de données CSV[cite: 69, 124, 125].",
    image: sqlDbImg,
    tags: ["SQL", "Conception", "SGBD"],
    link: "https://github.com/MehenniIslam/SQL_BaseDonne",
  },
  {
    id: 4,
    title: "Machine Virtuelle Linux",
    description: "Configuration complète de A à Z : système, réseau, packages et environnement[cite: 33, 92].",
    image: vmLinuxImg,
    tags: ["Linux", "Réseau", "Administration"],
    link: "https://github.com/MehenniIslam/VM",
  },
];

export const Projects = ({ lang }: { lang: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Mes <span className="text-violet-500">Projets</span></h2>
        <p className="text-slate-500 text-lg">Découvrez mes réalisations techniques</p>
      </div>

      {/* CARROUSEL 3D (Style Ben 10 / Coverflow) */}
      <div className="relative h-[500px] flex items-center justify-center mb-32 perspective-1000">
        <button onClick={prevProject} className="absolute left-2 md:left-10 z-50 p-4 bg-white/80 dark:bg-slate-800/80 rounded-full text-violet-500 hover:bg-violet-100 shadow-xl backdrop-blur-md transition-all">
          <ChevronLeft size={32} />
        </button>

        <div className="relative w-full max-w-3xl h-full flex items-center justify-center transform-style-3d">
          {projects.map((project, index) => {
            let offset = index - currentIndex;
            if (offset < -1) offset += projects.length;
            if (offset > 1) offset -= projects.length;

            let transformStyle = "translateX(100vw) scale(0)";
            let zIndex = 0;
            let opacity = 0;

            if (offset === 0) {
              transformStyle = "translateX(0) scale(1) translateZ(0px) rotateY(0deg)";
              zIndex = 30;
              opacity = 1;
            } else if (offset === -1) {
              transformStyle = "translateX(-35%) scale(0.8) translateZ(-100px) rotateY(15deg)";
              zIndex = 20;
              opacity = 0.6;
            } else if (offset === 1) {
              transformStyle = "translateX(35%) scale(0.8) translateZ(-100px) rotateY(-15deg)";
              zIndex = 20;
              opacity = 0.6;
            }

            return (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-[90%] md:w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-500 ease-out cursor-pointer block"
                style={{ transform: transformStyle, zIndex, opacity }}
              >
                <div className="relative h-60">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-lg text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <button onClick={nextProject} className="absolute right-2 md:right-10 z-50 p-4 bg-white/80 dark:bg-slate-800/80 rounded-full text-violet-500 hover:bg-violet-100 shadow-xl backdrop-blur-md transition-all">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* GRILLE DES PROJETS (Pose normale en bas) */}
      <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-violet-500">Tous les projets</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={`grid-${project.id}`}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:border-violet-400 transition-all hover:-translate-y-2"
          >
            <div className="h-48 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ExternalLink className="text-white h-10 w-10" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold mb-2 group-hover:text-violet-500 transition-colors">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0,3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-500 dark:text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};