import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Products from "@/components/Products";
import Facility from "@/components/Facility";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnquiryWidget from "@/components/EnquiryWidget";

export default function Home() {
  return (
    <>
      <main id="home" className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
        <Nav />
        <Hero />
        <StatsStrip />
        <Products />
        <Facility />
        <Gallery />
        <WhyUs />
        <Partners />
        <Contact />
        <Footer />
      </main>
      <EnquiryWidget />
    </>
  );
}
