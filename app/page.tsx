import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsBar from "@/components/BenefitsBar";
import ProblemSection from "@/components/ProblemSection";
import Transformation from "@/components/Transformation";
import AuthoritySection from "@/components/AuthoritySection";
import WhatYouLearn from "@/components/WhatYouLearn";
import Modules from "@/components/Modules";
import Audience from "@/components/Audience";
import Testimonials from "@/components/Testimonials";
import Bonuses from "@/components/Bonuses";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BenefitsBar />
        <ProblemSection />
        <Transformation />
        <AuthoritySection />
        <WhatYouLearn />
        <Modules />
        <Audience />
        <Testimonials />
        <Bonuses />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
