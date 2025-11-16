import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import pegsolitaireImg from "@/assets/pegsolitaire.png";
import vmLinuxImg from "@/assets/vm-linux.png";
import sqlDbImg from "@/assets/sql-db.png";

const projects = [
  {
    id: 1,
    title: "PegSolitaire (Python)",
    description:
      "Jeu de billes où l’objectif est de sauter les billes pour n’en laisser qu’une. Développé en Python avec une logique intelligente.",
    image: pegsolitaireImg,
    tags: ["Python", "Jeu", "Algorithme"],
    link: "https://iut-info.univ-reims.fr/gitlab/mehe0005/sae1_pegsolitaire",
  },
  {
    id: 2,
    title: "Machine Virtuelle Linux",
    description:
      "VM Linux configurée de A à Z : installation, utilisateurs, réseau, packages et environnement complet de développement.",
    image: vmLinuxImg,
    tags: ["Linux", "VM", "Virtualisation"],
    link: "https://iut-info.univ-reims.fr/gitlab/mehe0005/ms103",
  },
  {
    id: 3,
    title: "Base de données SQL",
    description:
      "Création complète d’une base SQL : tables, relations, requêtes avancées et gestion structurée des données.",
    image: sqlDbImg,
    tags: ["SQL", "Base de données"],
    link: "https://iut-info.univ-reims.fr/gitlab/mehe0005/sae_sql_mehenni_islam_djo-djolo_ayessa",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="
        py-20 
        bg-gradient-to-r 
        from-[hsl(var(--primary))] 
        to-purple-600
        dark:from-[hsl(var(--skill-bar-fill))] 
        dark:to-purple-700
      "
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Découvrez mes réalisations académiques et personnelles
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="
                group 
                bg-white/10 
                rounded-xl 
                overflow-hidden 
                shadow-lg 
                border border-white/20 
                hover:shadow-2xl 
                transition-all duration-300 
                hover:-translate-y-2
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover 
                    group-hover:scale-110 
                    transition-transform duration-500
                  "
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/80 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Button
                  asChild
                  className="
                    w-full 
                    bg-white 
                    text-blue-600 
                    hover:bg-gray-200
                    font-semibold
                  "
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Voir plus <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
