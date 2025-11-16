import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ouverture du client mail
    window.location.href = `mailto:tonemail@example.com?subject=Contact de ${formData.name}&body=${formData.message} (${formData.email})`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-8 text-center">
          Contact
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded border border-skill-bar-bg dark:border-skill-bar-bg bg-gray-100 dark:bg-gray-800 text-foreground dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded border border-skill-bar-bg dark:border-skill-bar-bg bg-gray-100 dark:bg-gray-800 text-foreground dark:text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded border border-skill-bar-bg dark:border-skill-bar-bg bg-gray-100 dark:bg-gray-800 text-foreground dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground p-3 rounded font-bold hover:bg-primary/80 transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
