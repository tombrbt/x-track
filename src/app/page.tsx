import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyPoints from "@/components/KeyPoints";
import Features from "@/components/Features";
import DataBox from "@/components/DataBox";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <KeyPoints />
        <Features />
        <DataBox />
        <WhyUs />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
