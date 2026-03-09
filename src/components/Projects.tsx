import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Github, Play, X } from "lucide-react";
import { t } from "../components/translations";

import bubbleImg from "@/assets/buble.png";
import pegsolitaireImg from "@/assets/pegsolitaire.png";
import vmLinuxImg from "@/assets/vm-linux.png";
import sqlDbImg from "@/assets/sql-db.png";
import easportImg from "@/assets/Easport.png"; 
import easportVideo from "@/assets/Easport.mov";

export const Projects = ({ lang }: { lang: "FR" | "EN" | "ES" | "AR" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null); // State pour le pop-up vidéo
  const content = t[lang].projects;

  const projects = [
    {
      id: 1,
      title: "Easport (En cours)",
      description: content.easportDesc,
      image: easportImg,
      video: easportVideo,
      tags: ["SwiftUI", "iOS", "Mobile", "Dev"],
      link: "https://github.com/MehenniIslam/Easport",
    },
    {
      id: 2,
      title: "Bubble Survivor",
      description: "Jeu de survie en terminal développé en Python (POO). Lauréat 2ème place à la Coupe NSI de la Marne.",
      image: bubbleImg,
      video: null,
      tags: ["Python", "POO", "Jeu", "Algorithmique"],
      link: "https://github.com/MehenniIslam/BubbleSurvivor",
    },
    {
      id: 3,
      title: "PegSolitaire",
      description: "Jeu de billes classique avec résolution automatique via algorithme en Python.",
      image: pegsolitaireImg,
      video: null,
      tags: ["Python", "Algorithme", "Logique"],
      link: "https://github.com/MehenniIslam/Pegsolitaire",
    },
    {
      id: 4,
      title: "Base de Données JO",
      description: "Conception SQL complète, tables, relations et requêtes complexes avec génération de données CSV.",
      image: sqlDbImg,
      video: null,
      tags: ["SQL", "Conception", "SGBD"],
      link: "https://github.com/MehenniIslam/SQL_BaseDonne",
    },
    {
      id: 5,
      title: "Machine Virtuelle Linux",
      description: "Configuration complète de A à Z : système, réseau, packages et environnement.",
      image: vmLinuxImg,
      video: null,
      tags: ["Linux", "Réseau", "Administration"],
      link: "https://github.com/MehenniIslam/VM",
    },
  ];

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          {content.title} <span className="text-violet-500">{content.titleSpan}</span>
        </h2>
        <p className="text-slate-400 text-lg">{content.subtitle}</p>
      </div>

      <div className="relative h-[550px] flex items-center justify-center mb-32 perspective-1000">
        <button
          onClick={prevProject}
          className="absolute left-2 md:left-10 z-50 p-4 bg-white/10 dark:bg-slate-800/50 border border-white/20 rounded-full text-violet-500 hover:bg-violet-500 hover:text-white shadow-xl backdrop-blur-md transition-all"
        >
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
              <div
                key={project.id}
                className="absolute w-[90%] md:w-full max-w-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 ease-out flex flex-col group"
                style={{ transform: transformStyle, zIndex, opacity }}
              >
                <div className="relative h-60 bg-black overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-md pointer-events-none">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-slate-700 dark:text-slate-300 mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-lg text-xs font-bold border border-violet-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  
                  <div className="mt-auto flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center py-3 bg-slate-900 dark:bg-slate-800 hover:bg-violet-600 text-white rounded-xl transition-colors font-medium gap-2">
                      <Github size={18} /> {content.viewGithub}
                    </a>
                    
                    {project.video && (
                      <button onClick={() => setActiveVideo(project.video!)} className="flex-1 inline-flex items-center justify-center py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl transition-colors font-medium gap-2">
                        <Play size={18} /> {content.watchVideo}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextProject}
          className="absolute right-2 md:right-10 z-50 p-4 bg-white/10 dark:bg-slate-800/50 border border-white/20 rounded-full text-violet-500 hover:bg-violet-500 hover:text-white shadow-xl backdrop-blur-md transition-all"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-violet-500">{content.allProjects}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={`grid-${project.id}`}
            className="group flex flex-col bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-2 hover:border-violet-500"
          >
            <div className="h-48 overflow-hidden relative bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-violet-400">
                  <ExternalLink className="h-6 w-6" /> <span className="font-bold">{content.viewGithub}</span>
                </a>
                {project.video && (
                  <button onClick={() => setActiveVideo(project.video!)} className="flex items-center gap-2 hover:text-violet-400">
                    <Play className="h-6 w-6" /> <span className="font-bold">{content.watchVideo}</span>
                  </button>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold mb-2 group-hover:text-violet-500 transition-colors">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in-up" 
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] border border-slate-700"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setActiveVideo(null)} 
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-violet-600 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full h-auto max-h-[85vh] object-contain bg-black" 
            />
          </div>
        </div>
      )}

    </div>
  );
};