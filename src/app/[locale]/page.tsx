import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ScrollIntro from "@/components/ScrollIntro";
import { Locale } from "@/i18n/config";
import { messages } from "@/i18n/messages";

// Statically import initial viewport components
// (ScrollIntro and Hero are critical for LCP and initial interaction)

// Dynamically import below-the-fold components
const LoadoutSection = dynamic(() => import("@/components/LoadoutSection"));
const WebServicesSection = dynamic(() => import("@/components/WebServicesSection"));
const CreativeProcessSection = dynamic(() => import("@/components/CreativeProcessSection"));
const AboutMeSection = dynamic(() => import("@/components/AboutMeSection"));
const ProjectArcs = dynamic(() => import("@/components/ProjectArcs"));
const FeaturedCaseStudy = dynamic(() => import("@/components/FeaturedCaseStudy"));
const Timeline = dynamic(() => import("@/components/Timeline"));
const Education = dynamic(() => import("@/components/Education"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const FooterCTA = dynamic(() => import("@/components/FooterCTA"));

interface HomeProps {
  params: { locale: Locale };
}

export default function Home({ params: { locale } }: HomeProps) {
  const dict = messages[locale] || messages.en;

  return (
    <>
      <main>
        {/* SEO Hidden Text for Ranking */}
        <section className="sr-only">
          <h1>Omar Ayman - Portfolio</h1>
          <p>
            I am Omar Ayman, a web developer also known as Omar Refay, Omar Refaey, Omar Refa3y, and Omar Refaaey.
            Explore my projects and skills in web development.
          </p>
          <p lang="ar" dir="rtl">
            أنا عمر أيمن (عمر رفاعي)، مطور ويب ومبرمج.
            (عمر رفاعي مطور ويب، عمر أيمن مطور ويب).
          </p>
        </section>

        <ScrollIntro dict={dict} />
        <Hero dict={dict} />
        
        {/* Below the fold sections load dynamically as the user scrolls */}
        <LoadoutSection dict={dict} />
        <WebServicesSection dict={dict} />
        <CreativeProcessSection dict={dict} />
        <AboutMeSection dict={dict} />
        <ProjectArcs dict={dict} />
        <FeaturedCaseStudy dict={dict} />
        <Timeline dict={dict} />
        <Education dict={dict} />
        <TestimonialsSection dict={dict} />
        <FooterCTA dict={dict} />
      </main>
    </>
  );
}
