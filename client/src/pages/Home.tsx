import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { About } from "@/components/About";
import { Initiatives } from "@/components/Initiatives";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { News } from "@/components/News";
import { Donation } from "@/components/Donation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ImpactStats />
        <About />
        <Initiatives />
        <Gallery />
        <Testimonials />
        <News />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
