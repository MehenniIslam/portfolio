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
        "service_mu9ozq5",   //  Service ID
        "template_v8szh2k",  //  Template ID
        e.currentTarget,     // le formulaire
        "LbbIRCJY3KXuxCAuO" //  User ID
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
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <User size={20} />
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <Mail size={20} />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group textarea-group">
          <MessageSquare size={20} />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-button">
          <Send size={18} /> Envoyer
        </button>
      </form>
    </section>
  );
}