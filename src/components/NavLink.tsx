// Navigation.tsx
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom"; // Assure-toi d'utiliser react-router-dom

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation = ({ darkMode, toggleDarkMode }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/skills", label: "Compétences" },
    { path: "/projects", label: "Projets" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md border-b border-purple-500/20 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Nom qui "spawn" au chargement */}
          <div className="text-xl font-bold text-purple-600 dark:text-purple-400 animate-fade-in-left">
            Islam Mehenni Meghraoui
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors font-medium ${
                    isActive
                      ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-purple-600 dark:text-purple-400">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 text-purple-600 dark:text-purple-400">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-purple-600 dark:text-purple-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20 bg-white dark:bg-black">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};