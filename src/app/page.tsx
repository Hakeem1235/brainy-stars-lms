import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Portals } from "@/components/landing/Portals";
import { Audience } from "@/components/landing/Audience";
import { ValueProposition } from "@/components/landing/ValueProposition";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Certifications } from "@/components/landing/Certifications";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-gold/30">
      <Navbar />
      <Hero />
      <Portals />
      <Audience />
      <ValueProposition />
      <Features />
      <HowItWorks />
      <Certifications />
      <Testimonials />
      <Footer />
    </main>
  );
}
