import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import pegsolitaireImg from "@/assets/pegsolitaire.png";
import vmLinuxImg from "@/assets/vm-linux.png";
import sqlDbImg from "@/assets/sql-db.png";

const projects = [
  {
    id: 1,
    title: "PegSolitaire (Python)",
    description: "Jeu de billes avec logique intelligente.",
    image: pegsolitaireImg,
    tags: ["Python", "Jeu", "Algorithme"],
    link: "https://github.com/tonCompteGitHub",
  },
  {
    id: 2,
    title: "Machine Virtuelle Linux",
    description: "VM Linux complète avec environnement dev.",
    image: vmLinuxImg,
    tags: ["Linux", "VM", "Virtualisation"],
    link: "https://github.com/tonCompteGitHub",
  },
  {
    id: 3,
    title: "Base de données SQL",
    description: "Base SQL complète et requêtes avancées.",
    image: sqlDbImg,
    tags: ["SQL", "Base de données"],
    link: "https://github.com/tonCompteGitHub",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-foreground/80 dark:text-white/80 text-lg max-w-2xl mx-auto">
            Découvrez mes réalisations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/10 dark:bg-white/10 rounded-xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 dark:text-white/80 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/80"
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
