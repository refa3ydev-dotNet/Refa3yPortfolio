import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoadoutSection from "@/components/LoadoutSection";
import ProjectArcs from "@/components/ProjectArcs";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LoadoutSection />
        <ProjectArcs />
        <FeaturedCaseStudy />
        <Timeline />
        <Education />
        <FooterCTA />
      </main>
    </>
  );
}
