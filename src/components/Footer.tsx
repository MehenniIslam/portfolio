import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { t } from "./translations";

export const Footer = ({ lang }: { lang: "FR" | "EN" | "ES" | "AR" }) => {
  const currentYear = new Date().getFullYear();
  const content = t[lang].footer;

  return (
    <footer className="bg-white/50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-800/50 py-8 mt-auto backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            © {currentYear} Islam Mehenni Meghraoui. {content.rights}
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <a href="https://github.com/MehenniIslam" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-500 transition-transform hover:scale-110">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-500 transition-transform hover:scale-110">
            <Linkedin className="h-6 w-6" />
          </a>
          {/* LIEN TELEPHONE ICI */}
          <a href="tel:0623669518" className="text-slate-400 hover:text-violet-500 transition-transform hover:scale-110" aria-label="Appeler">
            <Phone className="h-6 w-6" />
          </a>
          <a href="mailto:islamkhalilmehennimeghraoui@gmail.com" className="text-slate-400 hover:text-violet-500 transition-transform hover:scale-110">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};