import { MapPin, Car, Phone, Mail, Gamepad2, Code, Trophy, Target, ExternalLink, Play, Disc } from "lucide-react";
import { t } from "../components/translations";

export const About = ({ lang }: { lang: "FR" | "EN" | "ES" | "AR" }) => {
  const content = t[lang].about;

  // Icônes pour les hobbies généraux
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

          {/* PETIT RÉSUMÉ PASSIONS */}
          <div className="grid grid-cols-2 gap-4">
            {content.hobbies.map((hobby, index) => (
              <div key={hobby} className="p-4 bg-white/50 dark:bg-slate-900/30 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group hover:border-violet-500 transition-colors">
                <div className="mb-2 group-hover:scale-110 transition-transform">{hobbyIcons[index]}</div>
                <span className="text-xs font-bold uppercase tracking-wider">{hobby}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COLONNE DROITE : DESCRIPTION & GAMING */}
        <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
          
          {/* DESCRIPTION PRINCIPALE */}
          <div className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
             <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Disc className="text-violet-500 animate-spin-slow" /> Bio</h3>
             <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
              "{content.description}"
            </p>
          </div>

          {/* SECTION GAMING DÉTAILLÉE */}
          <div className="bg-slate-900/5 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="text-yellow-500" size={32} />
              <h3 className="text-2xl font-bold uppercase tracking-tight">Gaming & Competitive Ranks</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* VALORANT CARD */}
              <div className="p-6 rounded-2xl border-2 border-red-500/30 bg-red-500/5 group hover:bg-red-500/10 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold">Valorant</h4>
                  <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase">Main FPS</span>
                </div>
                <p className="text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase italic">Diamant 3</p>
                <p className="text-sm text-slate-500 font-mono mb-4">LiptonPeche#KCW</p>
                <a href="https://tracker.gg/valorant/profile/riot/LiptonPeche%23KCW/overview" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-red-500 font-bold text-sm hover:underline">
                  View Tracker <ExternalLink size={14} />
                </a>
              </div>

              {/* LOL CARD */}
              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 group hover:bg-blue-500/10 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold">League of Legends</h4>
                </div>
                <p className="text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase italic">Silver 2</p>
                <p className="text-sm text-slate-500 font-mono mb-4">LiptonPeche</p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-500 font-bold text-sm hover:underline">
                  View OP.GG <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* FPS & MEDAL CLIPS */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Target className="text-violet-500" size={20} /> Joueur FPS & FIFA
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Grand amateur de FPS compétitifs et de FIFA. Le gaming m'a appris la gestion du stress, le travail d'équipe et la persévérance.
                </p>
              </div>
              <a 
                href="https://medal.tv/u/LiptonPeche" // Remplace par ton lien exact si besoin
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white px-6 py-4 rounded-xl font-bold transition-all shrink-0 shadow-lg shadow-violet-500/20"
              >
                <Play size={20} fill="white" /> Voir mes Clips Medal
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};