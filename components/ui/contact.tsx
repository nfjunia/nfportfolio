"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ fullName: "", contact: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
        if (data.details) {
          data.details.forEach((detail: { field: string; message: string }) => {
            toast.error(`${detail.field}: ${detail.message}`);
          });
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${portfolio.email}`}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-foreground/70">{portfolio.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${portfolio.phone}`}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-foreground/70">{portfolio.phone}</p>
                  </div>
                </motion.a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="p-3 rounded-lg bg-pink-500/10 text-pink-500 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-foreground/70">{portfolio.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-foreground/10">
              <h4 className="font-medium mb-4">Follow me</h4>
              <div className="flex gap-4">
                {Object.entries(portfolio.social).map(([name, url]) => {
                  if (name === "email") return null;
                  return (
                    <motion.a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors capitalize text-sm font-medium"
                    >
                      {name}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 border border-blue-500/20"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium mb-2"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
