import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import myPhoto from "@/assets/my-photo.jpg"; 

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-hero-from/90 to-hero-to/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center animate-fade-in-up gap-8">
          {/* Texte */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Bienvenue sur mon portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              IUT informatique – projets, compétences et contact
            </p>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all"
            >
              Voir mes projets
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Portrait pro */}
          <div className="mt-8 md:mt-0 flex-shrink-0">
            <img
              src={myPhoto}
              alt="Portrait professionnel Islam Mehenni Meghraoui"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
