import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import ValueStrip from "@/components/ValueStrip";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BigCTA from "@/components/BigCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <ValueStrip />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <BigCTA />
      <Footer />
    </>
  );
}
