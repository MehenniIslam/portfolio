import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import pegsolitaireImg from "@/assets/pegsolitaire.png";
import vmLinuxImg from "@/assets/vm-linux.png";
import sqlDbImg from "@/assets/sql-db.png";
import bubbleImg from "@/assets/buble.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PegSolitaire (Python)",
    description: "Jeu de billes classique où l’objectif est de sauter les billes pour n’en laisser qu’une sur le plateau. Développé en Python avec logique automatique pour résoudre le puzzle.",
    image: pegsolitaireImg,
    tags: ["Python", "Jeu", "Algorithme"],
    link: "https://github.com/MehenniIslam/Pegsolitaire",
  },
  {
    id: 2,
    title: "Machine Virtuelle Linux",
    description: "Machine virtuelle Linux configurée de A à Z : installation du système, gestion des utilisateurs, réseaux, packages et environnement de développement complet.",
    image: vmLinuxImg,
    tags: ["Linux", "VM", "Virtualisation"],
    link: "https://github.com/MehenniIslam/VM",
  },
  {
    id: 3,
    title: "Base de données SQL",
    description: "Base de données créée en SQL : tables, relations, requêtes complexes et gestion de données. Projet démontrant la conception et manipulation d’une base structurée.",
    image: sqlDbImg,
    tags: ["SQL", "Base de données"],
    link: "https://github.com/MehenniIslam/SQL_BaseDonne",
  },
  {
    id: 4,
    title: "Bubble Survivor",
    description: "J’ai créé le jeu Bubble Survivor en Python, un projet qui a été honoré par le titre de Lauréat de la Marne.",
    image: bubbleImg,
    tags: ["Python", "Jeu", "Lauréat"],
    link: "https://github.com/MehenniIslam/BubbleSurvivor",
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[currentIndex];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Mes <span className="text-purple-600 dark:text-purple-400">Projets</span>
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-4xl">
        <button onClick={prevProject} className="absolute -left-4 md:-left-12 z-10 p-3 bg-white/50 dark:bg-black/50 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-full text-purple-600 dark:text-purple-400 backdrop-blur-sm transition-all transform hover:scale-110">
          <ChevronLeft size={32} />
        </button>

        <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 animate-float transition-all duration-500">
          <div className="relative h-72">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <h3 className="absolute bottom-4 left-6 text-3xl font-bold text-white">{project.title}</h3>
          </div>
          
          <div className="p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg min-h-[80px]">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium">
              Voir sur GitHub <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <button onClick={nextProject} className="absolute -right-4 md:-right-12 z-10 p-3 bg-white/50 dark:bg-black/50 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-full text-purple-600 dark:text-purple-400 backdrop-blur-sm transition-all transform hover:scale-110">
          <ChevronRight size={32} />
        </button>
      </div>
      
      <div className="flex gap-2 mt-8">
        {projects.map((_, idx) => (
          <div key={idx} className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-700"}`} />
        ))}
      </div>
    </div>
  );
};