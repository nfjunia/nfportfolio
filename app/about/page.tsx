import { About } from "@/components/ui/about";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="py-28 w-full ">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default page;
