"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";
import { ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-foreground/10 bg-white/5 py-12 px-4">
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
            <div className="flex items-center gap-3">
              <motion.a
                href={"https://www.linkedin.com/in/solomon-waja-92ba19389/"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
              >
                <FaLinkedinIn size={20} />
              </motion.a>
              <motion.a
                href={"https://x.com/junia53745"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
              >
                <FaSquareXTwitter size={20} />
              </motion.a>
              <motion.a
                href={"https://www.instagram.com/nfjuniah/"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
              >
                <IoLogoInstagram size={20} />
              </motion.a>
            </div>

            <div className="h-8 w-px bg-foreground/10" />

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-foreground/5 cursor-pointer fixed bottom-6 border right-6 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
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
