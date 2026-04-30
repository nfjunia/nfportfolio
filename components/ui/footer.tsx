"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-foreground/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              {portfolio.name}
            </h3>
            <p className="text-foreground/60 text-sm">
              Full-Stack Developer • Web Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="flex gap-4">
              <motion.a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-foreground/60 hover:text-blue-500 transition-colors text-sm font-medium"
              >
                GitHub
              </motion.a>
              <motion.a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-foreground/60 hover:text-purple-500 transition-colors text-sm font-medium"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href={portfolio.social.email}
                whileHover={{ scale: 1.1 }}
                className="text-foreground/60 hover:text-pink-500 transition-colors text-sm font-medium"
              >
                Email
              </motion.a>
            </div>

            <div className="h-8 w-px bg-foreground/10" />

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-foreground/10 text-center"
        >
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
