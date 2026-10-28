import useSeo from "@/hooks/useSeo";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import Departments from "@/components/sections/Departments";
import Countries from "@/components/sections/Countries";
import WhyChoose from "@/components/sections/WhyChoose";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/FAQ";
import { FAQS } from "@/data/site";

export default function Home() {
  useSeo({
    title: "Delhi Apostille | MEA Apostille & Attestation Services in Delhi",
    description: "Get MEA apostille, certificate attestation & embassy legalisation in Delhi NCR. Free doorstep pickup, express processing & 50,000+ documents attested. Free quote today!",
    image: "https://static.prod-images.emergentagent.com/jobs/d1b432ff-cb8c-4f73-8b34-1ef3159dad0b/images/3bc28cf435ccfe92503dd411c07c36b1d7db12719b8e8b9ca185c88bc3e0ee8f.jpeg",
    schema: {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Delhi Apostille",
      description: "MEA Apostille & Attestation Services in Delhi",
      areaServed: "IN",
      url: "https://www.delhi-apostille.in",
      telephone: "+919810000000",
      address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
    },
  });
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Process />
      <Departments />
      <Stats />
      <WhyChoose />
      <Countries />
      <Testimonials />
      <BlogPreview />
      <FAQ items={FAQS} />
      <CTASection />
    </>
  );
}
