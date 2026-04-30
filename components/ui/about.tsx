"use client";

import { motion } from "framer-motion";
import { portfolio } from "../../lib/data";

export function About() {
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {portfolio.bio}
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I&apos;ve spent the last 5 years building web applications that
              solve real problems. My journey started with curiosity and has
              evolved into a passion for creating elegant, scalable solutions
              that users love.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me contributing to
              open-source projects, writing about web development, or exploring
              new technologies that push the boundaries of what&apos;s possible
              on the web.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "20+", label: "Projects Completed" },
              { number: "15+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
