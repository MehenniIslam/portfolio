import { MapPin, Car, Phone, Mail, Gamepad2, Code, Trophy, MonitorPlay } from "lucide-react";
import { t } from "../components/translations";

export const About = ({ lang }: { lang: "FR" | "EN" | "ES" | "AR" }) => {
  const content = t[lang].about;

  // Icônes correspondant à tes 4 hobbies du CV
  const hobbyIcons = [
    <Trophy size={32} className="text-violet-500" />,     // Football
    <Trophy size={32} className="text-blue-500" />,       // Volleyball
    <Code size={32} className="text-emerald-500" />,      // Programmation
    <Gamepad2 size={32} className="text-rose-500" />      // Jeux Vidéo
  ];

  return (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
      
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{content.title} <span className="text-violet-500">{content.titleSpan}</span></h2>
        <p className="text-slate-400 text-lg">{content.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Colonne de gauche : Description et Infos */}
        <div className="space-y-8 animate-fade-in-left">
          <div className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 border-l-4 border-violet-500 pl-3">
              {content.infoTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-500"><MapPin size={24} /></div>
                <span className="text-lg font-medium">{content.location}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-500"><Car size={24} /></div>
                <span className="text-lg font-medium">{content.license}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-500"><Mail size={24} /></div>
                <a href="mailto:islamkhalilmehennimeghraoui@gmail.com" className="text-lg font-medium hover:text-violet-500 transition-colors break-all">
                  islamkhalilmehennimeghraoui@gmail.com
                </a>
              </li>
            </ul>

            {/* LE BOUTON D'APPEL DIRECT ICI */}
            <a 
              href="tel:0623669518" 
              className="mt-8 w-full flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-violet-500/25 hover:-translate-y-1"
            >
              <Phone size={24} /> {content.callMe} : 06 23 66 95 18
            </a>
          </div>
        </div>

        {/* Colonne de droite : Passions / Hobbies */}
        <div className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 h-full">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 border-l-4 border-violet-500 pl-3">
            {content.hobbiesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.hobbies.map((hobby, index) => (
              <div key={hobby} className="group flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-violet-500 hover:shadow-lg transition-all transform hover:-translate-y-2">
                <div className="mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {hobbyIcons[index]}
                </div>
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200">{hobby}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};