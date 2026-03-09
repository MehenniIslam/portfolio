import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import NotFound from "./pages/NotFound";
import logo from "@/assets/logo.png";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<"FR" | "EN" | "ES" | "AR">("FR");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        <div className="relative flex flex-col items-center justify-end h-64 w-64">
          {/* La balle violette qui tombe */}
          <div className="w-12 h-12 bg-violet-500 rounded-full absolute top-0 animate-ball-smash z-10 shadow-[0_0_20px_rgba(139,92,246,0.6)]"></div>
          {/* Ton Logo qui se fait écraser */}
          <img src={logo} alt="Logo" className="w-28 h-auto animate-logo-smash relative z-0 origin-bottom" />
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