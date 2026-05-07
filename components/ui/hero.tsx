"use client";

import { motion, Variants } from "framer-motion";
import { portfolio } from "@/lib/data";
import { ArrowRight, GitBranch, Mail } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="h-[70vh] flex items-center justify-center pt-44 pb-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                Available for work
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 text-pretty"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {portfolio.name}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-pretty"
        >
          {portfolio.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2 rounded-3xl border border-foreground/20 hover:bg-foreground/5 font-medium transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
          >
            <GitBranch className="w-4 h-4" />
          </motion.a>

          <motion.a
            href={portfolio.social.email}
            whileHover={{ scale: 1.1, y: -3 }}
            className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
