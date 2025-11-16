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

import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              IUT Informatique – Étudiant développeur
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

