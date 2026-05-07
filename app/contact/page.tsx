import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { View } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="py-28 w-full ">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default page;
