import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About"; // NOUVELLE IMPORTATION
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import NotFound from "./pages/NotFound";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<"FR" | "EN" | "ES" | "AR">("FR");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
  }, [darkMode, lang]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-950">
        <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
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
            <Route path="/about" element={<About lang={lang} />} /> {/* NOUVELLE ROUTE */}
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