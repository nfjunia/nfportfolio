"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import firstLogo from "@/assets/images/MainLogoW.png";
import secondLogo from "@/assets/images/NewShipManLogoW-2.png";

const companies = [
  { name: "First Logo", logo: firstLogo },
  { name: "Second Logo", logo: secondLogo },
];

export default function WorkedWith() {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-lg text-muted-foreground mb-6">Worked with</p>

        <div className="flex flex-wrap gap-4">
          {companies.map((company) => (
            <motion.div
              key={company.name}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-[180px] h-[60px] 
                         rounded-xl border border-white/10 
                         bg-white/5 backdrop-blur-sm 
                         hover:border-white/20 transition-all"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={100}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
