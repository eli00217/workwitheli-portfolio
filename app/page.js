import Header from "@/components/Header";
import ScrollFx from "@/components/ScrollFx";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyEli from "@/components/WhyEli";
import CaseStudies from "@/components/CaseStudies";
import StartSimple from "@/components/StartSimple";
import Faq from "@/components/Faq";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Background />
      <ScrollFx />
      <Header />
      <Hero />
      <Services />
      <WhyEli />
      <Process />
      <Portfolio />
      <Tools />
      <CaseStudies />
      <About />
      <StartSimple />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}







