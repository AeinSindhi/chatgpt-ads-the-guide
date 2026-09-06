import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Learn from "@/components/Learn";
import InsideGuide from "@/components/InsideGuide";
import Audience from "@/components/Audience";
import Journey from "@/components/Journey";
import Preview from "@/components/Preview";
import WhyThisGuide from "@/components/WhyThisGuide";
import WhatYouGet from "@/components/WhatYouGet";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main className="pb-16 sm:pb-0">
      <Header />
      <Hero />
      <Problem />
      <Learn />
      <InsideGuide />
      <Audience />
      <Journey />
      <Preview />
      <WhyThisGuide />
      <WhatYouGet />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
