"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: any;
  tags: string[];
  link: string;
  github: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  github,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-colors ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="p-6 md:p-8 bg-background/50 backdrop-blur-sm">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-balance">
          {title}
        </h3>
        <p className="text-foreground/70 mb-6 leading-relaxed text-balance">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-blue-500 transition-colors font-medium text-sm"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-purple-500 transition-colors font-medium text-sm"
          >
            Code
            <GitBranch className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
