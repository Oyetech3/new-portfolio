"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-10 md:py-20 max-w-screen-sm mx-auto px-4"
    >
      <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>

      <div className="mb-3">
        <p className="text-lg">Email: <a className="text-gray-300 text-base" href="mailto:oyetech30@gmail.com">oyetech30@gmail.com</a></p>
        <p className="text-lg">Phone: <a className="text-gray-300 text-base" href="tel:+2348143011868">+2348143011868</a></p>
      </div>

      <p className="mb-8 text-gray-300">Send message directly to my gmail 👇</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f04770]"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f04770]"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f04770]"
          />
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="bg-[#f04770] text-white py-3 rounded font-semibold hover:bg-[#d03a64] transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {success && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </form>
    </motion.section>
  );
}

export default ContactPage;

