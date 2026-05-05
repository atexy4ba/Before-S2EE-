import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/sections/Hero";
import WhatIs from "@/components/sections/WhatIs";
import Agenda from "@/components/sections/Agenda";
import Training from "@/components/sections/Training";
import QA from "@/components/sections/QA";
import BannerCTA from "@/components/sections/BannerCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="flex flex-col relative z-10">
        <Hero />
        <WhatIs />
        <Agenda />
        <Training />
        <QA />
        <BannerCTA />
      </main>
      <Footer />
    </>
  );
}
