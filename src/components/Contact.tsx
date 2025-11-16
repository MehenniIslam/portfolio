import { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mu9ozq5",
        "template_v8szh2k",
        e.currentTarget,
        "LbbIRCJY3KXuxCAuO"
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("Erreur lors de l'envoi. Réessaye plus tard.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        backgroundImage: `linear-gradient(to bottom right, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))`,
      }}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-moi
          </h2>
          <p className="text-white/80 text-lg">
            Une question, un projet ou juste dire bonjour ? Remplissez le formulaire ci-dessous !
          </p>
        </div>

        <form className="space-y-6 bg-white/10 p-8 rounded-lg shadow-lg border border-white/20" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2 border-b border-white/30 pb-2">
            <User size={20} className="text-white/80" />
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent text-white placeholder-white/70 w-full focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-white/30 pb-2">
            <Mail size={20} className="text-white/80" />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent text-white placeholder-white/70 w-full focus:outline-none"
            />
          </div>

          <div className="flex items-start gap-2 border-b border-white/30 pb-2">
            <MessageSquare size={20} className="text-white/80 mt-2" />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent text-white placeholder-white/70 w-full focus:outline-none resize-none h-32"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            <Send size={18} /> Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
