import { MapPin, Car, Phone, Mail, Gamepad2, Code, Trophy, Target, ExternalLink, Play, Disc, Users } from "lucide-react";
import { t } from "../components/translations";

export const About = ({ lang }: { lang: "FR" | "EN" | "ES" | "AR" }) => {
  const content = t[lang].about;

  const hobbyIcons = [
    <Trophy size={32} className="text-violet-500" />,     // Football
    <Trophy size={32} className="text-blue-500" />,       // Volleyball
    <Code size={32} className="text-emerald-500" />,      // Programmation
    <Gamepad2 size={32} className="text-rose-500" />      // Jeux Vidéo
  ];

  return (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen">
      
      {/* HEADER */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{content.title} <span className="text-violet-500">{content.titleSpan}</span></h2>
        <p className="text-slate-400 text-lg">{content.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        
        {/* COLONNE GAUCHE : INFOS & CONTACT */}
        <div className="lg:col-span-1 space-y-6 animate-fade-in-left">
          <div className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-violet-500 pl-3">{content.infoTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-500"><MapPin size={20} /></div>
                <span className="font-medium">{content.location}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-500"><Car size={20} /></div>
                <span className="font-medium">{content.license}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-500"><Mail size={20} /></div>
                <a href="mailto:islamkhalilmehennimeghraoui@gmail.com" className="text-sm font-medium hover:text-violet-500 transition-colors break-all">
                  islamkhalilmehennimeghraoui@gmail.com
                </a>
              </li>
            </ul>
            <a href="tel:0623669518" className="mt-8 w-full flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
              <Phone size={20} /> {content.callMe}
            </a>
          </div>

          {/* RÉSUMÉ HOBBIES RAPIDE */}
          <div className="grid grid-cols-2 gap-4">
            {content.hobbies.map((hobby, index) => (
              <div key={hobby} className="p-4 bg-white/50 dark:bg-slate-900/30 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group hover:border-violet-500 transition-colors">
                <div className="mb-2 group-hover:scale-110 transition-transform">{hobbyIcons[index]}</div>
                <span className="text-[10px] font-bold uppercase tracking-wider">{hobby}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COLONNE DROITE : DESCRIPTION, FOOT & GAMING */}
        <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
          
          {/* BIO SECTION */}
          <div className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
             <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Disc className="text-violet-500" /> Bio</h3>
             <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
              "{content.description}"
            </p>
          </div>

          {/* SECTION FOOTBALL - TINQUEUX */}
          <div className="bg-gradient-to-r from-emerald-600/10 to-blue-600/10 dark:from-emerald-600/20 dark:to-blue-600/20 p-8 rounded-3xl border border-emerald-500/30 shadow-lg relative overflow-hidden group">
            <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <Trophy size={150} className="text-emerald-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500 rounded-2xl text-white shadow-lg shadow-emerald-500/20">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Parcours Sportif</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold">Joueur au SC Tinqueux</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
                Passionné de football, j'évolue actuellement au club de **Tinqueux**. Le sport de haut niveau m'a inculqué la **persévérance**, la **rigueur tactique** et l'importance de la **cohésion d'équipe**. Des valeurs que je transpose quotidiennement dans mes projets de développement informatique.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};