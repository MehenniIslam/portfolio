import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} Islam Mehenni Meghraoui. Tous droits réservés.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/MehenniIslam" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-500 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-500 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:islamkhalilmehennimeghraoui@gmail.com" className="text-slate-400 hover:text-violet-500 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};