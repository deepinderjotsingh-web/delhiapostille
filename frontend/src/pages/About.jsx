import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import WhyChoose from "@/components/sections/WhyChoose";
import Departments from "@/components/sections/Departments";
import CTASection from "@/components/sections/CTASection";
import Icon from "@/lib/icons";
import { IMG } from "@/data/site";

const VALUES = [
  { icon: "ShieldCheck", title: "Integrity", desc: "Every apostille and stamp we deliver is 100% genuine and government-verifiable." },
  { icon: "Clock", title: "Speed", desc: "Established channels and dedicated runners ensure the fastest turnaround." },
  { icon: "Lock", title: "Confidentiality", desc: "Your documents and data are handled with strict privacy and full insurance." },
  { icon: "Headset", title: "Support", desc: "A dedicated case manager guides you from pickup to final delivery." },
];

export default function About() {
  useSeo({
    title: "About Us | Delhi Apostille & Attestation Services",
    description: "Learn about Delhi Apostille — an MEA-authorised document legalisation agency serving 100+ countries with 50,000+ satisfied clients from New Delhi.",
  });
  return (
    <>
      <PageHero title="About Delhi Apostille" subtitle="Your trusted partner for MEA apostille, attestation and embassy legalisation." crumbs={["About"]} />
      <section className="container-wide py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-navy/10">
          <img src={IMG.signing} alt="Document signing" className="w-full h-[440px] object-cover" />
        </div>
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">Simplifying Global Document Legalisation</h2>
          <div className="gold-rule mt-4 mb-6" />
          <p className="text-slate-600 leading-relaxed">
            Delhi Apostille is a professionally managed, MEA-authorised agency specialising in apostille, certificate attestation and embassy legalisation. For over 15 years we have helped students, professionals, families and businesses get their documents recognised across 100+ countries.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Headquartered in Connaught Place, New Delhi, we manage the entire legalisation chain — from notary and state verification (SDM, HRD, Home Department) to MEA apostille and embassy attestation — with free doorstep pickup and secure, tracked delivery across Delhi NCR.
          </p>
          <ul className="mt-6 space-y-3">
            {["MEA-authorised outsourcing agency", "ISO-certified quality processes", "50,000+ documents successfully attested", "Transparent pricing with no hidden charges"].map((x) => (
              <li key={x} className="flex items-center gap-3 text-navy font-medium"><Icon name="CheckCircle2" className="h-5 w-5 text-emerald-600" /> {x}</li>
            ))}
          </ul>
        </div>
      </section>
      <Stats />
      <section className="container-wide py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Our Values</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">What Drives Us</h2>
          <div className="gold-rule mx-auto mt-4" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white border border-slate-100 p-6 text-center card-lift">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold"><Icon name={v.icon} className="h-7 w-7" /></span>
              <h3 className="font-serif text-xl font-bold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <WhyChoose />
      <Departments />
      <CTASection />
    </>
  );
}
