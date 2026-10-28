import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import CTASection from "@/components/sections/CTASection";

export default function Services() {
  useSeo({
    title: "Our Services | Apostille & Attestation | Delhi Apostille",
    description: "Explore our full range of services: MEA apostille, educational, personal & commercial attestation, embassy legalisation and certified translation in Delhi.",
  });
  return (
    <>
      <PageHero title="Our Services" subtitle="Complete apostille, attestation and legalisation solutions under one roof." crumbs={["Services"]} />
      <ServicesGrid heading={false} />
      <Process />
      <CTASection />
    </>
  );
}
