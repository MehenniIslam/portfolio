import { MapPin, Car, Phone, Mail, Gamepad2, Code, Trophy, Target, ExternalLink, Play, Disc, Users, Brain, ShieldCheck, Clock } from "lucide-react";
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
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300 text-sm">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-500 shrink-0"><Mail size={20} /></div>
                <span className="break-all font-medium">islamkhalilmehennimeghraoui@gmail.com</span>
              </li>
            </ul>
            <a href="tel:0623669518" className="mt-8 w-full flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
              <Phone size={20} /> {content.callMe}
            </a>
          </div>

          {/* SECTION SOFT SKILLS (NOUVEAU) */}
          <div className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Brain className="text-violet-500" size={24} /> Atouts personnels
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-emerald-500" size={18} />
                <span className="text-sm font-semibold italic uppercase">Calme & Sang-froid</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-blue-500" size={18} />
                <span className="text-sm font-semibold italic uppercase">Patience & Analyse</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-rose-500" size={18} />
                <span className="text-sm font-semibold italic uppercase">Résilience au stress</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-4">
              Capacité à rester lucide dans les situations critiques, que ce soit face à un bug complexe ou lors d'un "clutch" en fin de partie.
            </p>
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
                Le football au club de **Tinqueux** m'a appris à gérer la pression collective. Sur le terrain, je privilégie le **calme** et la **réflexion tactique** pour prendre les meilleures décisions sous la contrainte du temps.
              </p>
            </div>
          </div>

          {/* SECTION GAMING DÉTAILLÉE */}
          <div className="bg-slate-900/5 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <Gamepad2 className="text-rose-500" size={32} />
              <h3 className="text-2xl font-bold uppercase tracking-tight">Esport & Gaming</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl border-2 border-red-500/30 bg-red-500/5 hover:bg-red-500/10 transition-all group">
                <h4 className="text-xl font-bold mb-1">Valorant</h4>
                <p className="text-2xl font-black text-slate-900 dark:text-white mb-1 italic">DIAMANT 3</p>
                <p className="text-sm text-slate-500 font-mono mb-4">LiptonPeche#KCW</p>
                <a href="https://tracker.gg/valorant/profile/riot/LiptonPeche%23KCW/overview" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-red-500 font-bold text-sm hover:underline">
                  Tracker <ExternalLink size={14} />
                </a>
              </div>

              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-all group">
                <h4 className="text-xl font-bold mb-1">League of Legends</h4>
                <p className="text-2xl font-black text-slate-900 dark:text-white mb-1 italic">SILVER 2</p>
                <p className="text-sm text-slate-500 font-mono mb-4">LiptonPeche</p>
                <span className="text-xs text-blue-400 font-bold uppercase">Zen & Focus</span>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Target className="text-violet-500" size={20} /> "Zero Stress Policy"
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  "Mon niveau en Diamant 3 n'est pas seulement dû à mes réflexes, mais à ma capacité à rester froid et à prendre mon temps pour analyser l'adversaire."
                </p>
              </div>
              <a href="https://medal.tv/u/LiptonPeche" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white px-6 py-4 rounded-xl font-bold transition-all shrink-0">
                <Play size={20} fill="white" /> Clips Medal
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};