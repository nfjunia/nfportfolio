"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {portfolio.experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative pl-8 pb-8 border-l-2 border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ring-4 ring-background" />

              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-balance">
                      {job.position}
                    </h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <p className="text-foreground/70 mb-4 text-balance">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-sm text-foreground/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
