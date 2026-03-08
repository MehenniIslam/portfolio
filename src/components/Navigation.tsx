import { useState } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.png"; // Assure-toi d'avoir ton logo ici

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  lang: string;
  setLang: (lang: string) => void;
}

export const Navigation = ({ darkMode, toggleDarkMode, lang, setLang }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/skills", label: "Compétences" },
    { path: "/projects", label: "Projets" },
  ];

  const languages = ["FR", "EN", "ES", "AR"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm border-b border-violet-200 dark:border-violet-900/30 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          <NavLink to="/" className="flex items-center animate-fade-in-left">
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors font-medium text-lg ${
                    isActive
                      ? "text-violet-500 dark:text-violet-400 border-b-2 border-violet-500"
                      : "text-slate-600 dark:text-slate-300 hover:text-violet-400 dark:hover:text-violet-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-slate-700">
              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-1 p-2 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 text-violet-500 dark:text-violet-400 transition-colors"
                >
                  <Globe size={20} />
                  <span className="text-sm font-bold">{lang}</span>
                </button>
                {showLangMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg shadow-xl overflow-hidden">
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setShowLangMenu(false); }}
                        className="block w-full text-left px-4 py-2 hover:bg-violet-50 dark:hover:bg-violet-900/30 text-slate-700 dark:text-slate-200"
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors text-violet-500 dark:text-violet-400">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 text-violet-500 dark:text-violet-400">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-violet-500 dark:text-violet-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-violet-100 dark:border-violet-900/20 bg-white dark:bg-slate-900">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-4 py-3 text-slate-800 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-2 px-4 py-2">
               {languages.map(l => (
                 <button key={l} onClick={() => {setLang(l); setIsOpen(false)}} className={`px-3 py-1 rounded-md ${lang === l ? 'bg-violet-500 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>{l}</button>
               ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};