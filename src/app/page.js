import About from "@/components/About";
import BlogCarousel from "@/components/BlogCarousel";
import CtaBanner from "@/components/CtaBanner";
import Expertises from "@/components/Expertises";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ValueProps from "@/components/ValueProps";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Hero />
        <ValueProps />
        <Services />
        <Expertises />
        <About />
        <Testimonials />
        <Faq />
        <BlogCarousel />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
