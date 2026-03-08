import React, { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import emailjs from "emailjs-com";
import myPhoto from "@/assets/my-photo.jpg"; 

export const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm("service_mu9ozq5", "template_v8szh2k", e.currentTarget, "LbbIRCJY3KXuxCAuO")
      .then(() => {
          alert("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        }, (error) => {
          console.error(error);
          alert("Erreur lors de l'envoi. Réessaye plus tard.");
        });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20 animate-fade-in-up">
        <div className="flex-shrink-0">
          <img
            src={myPhoto}
            alt="Islam Mehenni Meghraoui"
            className="w-56 h-56 rounded-2xl object-cover shadow-2xl shadow-purple-500/20 border-2 border-purple-500"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Bonjour, je suis <span className="text-purple-600 dark:text-purple-400">Islam</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Étudiant en deuxième année de BUT Informatique à l'IUT. Passionné par le développement logiciel et la gestion de bases de données, je construis des solutions modernes et efficaces. Découvrez mes projets ou contactez-moi directement ci-dessous !
          </p>
        </div>
      </div>

      <div className="w-full max-w-lg bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900/50">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Contactez-moi</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-purple-500" size={20} />
            <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 dark:text-white outline-none" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-purple-500" size={20} />
            <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 dark:text-white outline-none" />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-purple-500" size={20} />
            <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required rows={4} className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 dark:text-white outline-none" />
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors">
            <Send size={18} /> Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
};