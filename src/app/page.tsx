import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full">
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <CTA />
      </div>
    </main>
  );
}
