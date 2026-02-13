
import Hero from "@/components/Hero";
import LoadoutSection from "@/components/LoadoutSection";
import ProjectArcs from "@/components/ProjectArcs";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import FooterCTA from "@/components/FooterCTA";
import { Locale } from "@/i18n/config";
import { messages } from "@/i18n/messages";

interface HomeProps {
  params: { locale: Locale };
}

export default function Home({ params: { locale } }: HomeProps) {
  const dict = messages[locale] || messages.en;

  return (
    <>
      <main>
        <Hero dict={dict} />
        <LoadoutSection dict={dict} />
        <ProjectArcs dict={dict} />
        <FeaturedCaseStudy dict={dict} />
        <Timeline dict={dict} />
        <Education dict={dict} />
        <FooterCTA dict={dict} />
      </main>
    </>
  );
}
