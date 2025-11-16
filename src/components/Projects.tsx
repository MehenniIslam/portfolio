import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import pegsolitaireImg from "@/assets/pegsolitaire.png";
import vmLinuxImg from "@/assets/vm-linux.png";
import sqlDbImg from "@/assets/sql-db.png";

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
    description:
      "Jeu de billes classique où l’objectif est de sauter les billes pour n’en laisser qu’une sur le plateau. Développé en Python avec logique automatique pour résoudre le puzzle.",
    image: pegsolitaireImg,
    tags: ["Python", "Jeu", "Algorithme"],
    link: "https://github.com/MehenniIslam/Pegsolitaire",
  },
  {
    id: 2,
    title: "Machine Virtuelle Linux",
    description:
      "Machine virtuelle Linux configurée de A à Z : installation du système, gestion des utilisateurs, réseaux, packages et environnement de développement complet.",
    image: vmLinuxImg,
    tags: ["Linux", "VM", "Virtualisation"],
    link: "https://github.com/MehenniIslam/VM",
  },
  {
    id: 3,
    title: "Base de données SQL",
    description:
      "Base de données créée en SQL : tables, relations, requêtes complexes et gestion de données. Projet démontrant la conception et manipulation d’une base structurée pour des applications réelles.",
    image: sqlDbImg,
    tags: ["SQL", "Base de données", "Gestion de données"],
    link: "https://github.com/MehenniIslam/SQL_BaseDonne",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations académiques et personnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Voir plus
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};