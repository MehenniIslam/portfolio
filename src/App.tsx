import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import NotFound from "./pages/NotFound";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<"FR" | "EN" | "ES" | "AR">("FR");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Le chargement dure 2.2 secondes pour laisser l'animation de saut se terminer
    setTimeout(() => setIsLoading(false), 2200);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
  }, [darkMode, lang]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Scène de chargement avec balle + "islam" */}
        <div className="relative flex flex-col items-center justify-end h-64 w-[300px]">
          {/* La balle violette qui saute */}
          <div className="w-16 h-16 bg-violet-500 rounded-full absolute top-0 animate-ball-bounce z-10 shadow-[0_0_20px_rgba(139,92,246,0.6)]"></div>
          
          {/* Ton nom "islam" dessiné en CSS */}
          <div className="flex items-baseline text-6xl font-extrabold text-slate-100 relative z-0 origin-bottom scale-[1.3] animate-logo-crush">
            <span className="relative">
              {/* Le corps du 'i' qui s'aplatit */}
              <span className="block animate-i-crush origin-bottom">i</span>
              {/* Le point du 'i' qui s'écrase */}
              <span className="w-4 h-4 bg-violet-500 rounded-full absolute top-[-1.5rem] left-1 animate-dot-crush shadow-[0_0_10px_rgba(139,92,246,0.6)]"></span>
            </span>
            <span>s</span>
            <span>l</span>
            <span>a</span>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
};

export default App;