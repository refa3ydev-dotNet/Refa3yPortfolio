
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
