import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import Process from "@/components/sections/Process";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/sections/CTASection";
import Icon from "@/lib/icons";
import { IMG } from "@/data/site";

const EMBASSIES = ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "China", "Egypt", "Vietnam", "Thailand", "Malaysia", "Indonesia"];

const FAQ_ITEMS = [
  { q: "When is embassy attestation required?", a: "Embassy legalisation is required for countries that are NOT members of the Hague Apostille Convention, such as the UAE, Saudi Arabia, Qatar and Kuwait." },
  { q: "What is the embassy attestation process?", a: "After state and MEA attestation, the document is submitted to the destination country's embassy in New Delhi for a legalisation stamp; MOFA attestation may follow in the destination country." },
  { q: "How long does embassy attestation take?", a: "Typically 5–12 working days depending on the embassy and document type." },
];

export default function Embassy() {
  useSeo({
    title: "Embassy Attestation & Legalization Services in Delhi | Delhi Apostille",
    description: "Embassy legalisation for UAE, Saudi Arabia, Qatar, Kuwait, Oman & more from New Delhi. Complete MEA + embassy attestation with free doorstep pickup.",
  });
  return (
    <>
      <PageHero title="Embassy Legalization Services" subtitle="MEA + embassy attestation for non-Hague countries like UAE, Saudi Arabia, Qatar and Kuwait." crumbs={["Embassy Legalization"]} />
      <section className="container-wide py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-navy/10">
          <img src={IMG.passport} alt="Embassy legalisation" className="w-full h-[500px] object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">Embassy Legalisation</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">For Non-Hague Convention Countries</h2>
          <div className="gold-rule mt-4 mb-6" />
          <p className="text-slate-600 leading-relaxed">
            Countries that have not signed the Hague Apostille Convention require embassy legalisation instead of an apostille. After your document is attested by the State Department and the MEA, it must be legalised at the respective country's embassy or consulate in New Delhi. We manage the complete process, including MOFA guidance for the destination country.
          </p>
          <h3 className="mt-8 font-semibold text-navy">Embassies We Handle</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {EMBASSIES.map((e) => (
              <span key={e} className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 border border-navy/10 px-3.5 py-1.5 text-sm font-medium text-navy">
                <Icon name="Globe2" className="h-4 w-4 text-gold-dark" /> {e}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Process />
      <FAQ items={FAQ_ITEMS} heading="Embassy Attestation FAQs" />
      <CTASection />
    </>
  );
}
