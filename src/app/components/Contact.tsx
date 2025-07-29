"use client"

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
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        });
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
        }
    };

    return (
        <div>
            <motion.section 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="py-10 md:py-20 max-w-lg"
            >
                <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400"
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400"
                    />
                    <textarea 
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#1a1a2e] text-white placeholder-gray-400"
                    />
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="bg-[#f04770] text-white py-3 rounded font-semibold hover:bg-[#d03a64] transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {success && <p className="text-green-500">Message sent successfully!</p>}
                </form>
            </motion.section>
        </div>
    );
}

export default ContactPage;
