import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Team } from "@/components/Team";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Services />
        <Process />
        <WhyUs />
        <Team />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
