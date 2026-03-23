import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { MentionsLegales } from "./components/MentionsLegales"; // Nouvelle page

const NotFoundFallback = () => (
  <div className="pt-40 text-center text-2xl font-bold">Page introuvable (404)</div>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<"FR" | "EN" | "ES" | "AR">("FR");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
  }, [darkMode, lang]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="relative flex flex-col items-center justify-center h-64">
          <div className="flex items-baseline text-[8rem] leading-none font-extrabold text-slate-100">
            <span className="relative flex justify-center">
              <div className="w-7 h-7 bg-violet-500 rounded-full absolute -top-1 animate-pixar-ball z-10 shadow-[0_0_20px_rgba(139,92,246,0.8)]"></div>
              <span className="block animate-pixar-i origin-bottom">ı</span>
            </span>
            <span>m</span>
            <span>m</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-black dark:via-[#1a0b2e] dark:to-[#0a1128] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col">
        <Navigation darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} lang={lang} setLang={setLang} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/skills" element={<Skills lang={lang} />} />
            <Route path="/projects" element={<Projects lang={lang} />} />
            {/* LA NOUVELLE ROUTE EST ICI */}
            <Route path="/mentions-legales" element={<MentionsLegales lang={lang} />} />
            <Route path="*" element={<NotFoundFallback />} />
          </Routes>
        </main>
        {/* Note: Tu peux retirer le Footer de Home.tsx et le laisser ici s'il est commun à toutes les pages */}
      </div>
    </BrowserRouter>
  );
};

export default App;