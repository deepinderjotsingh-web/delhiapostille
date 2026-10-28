import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import Process from "@/components/sections/Process";
import Countries from "@/components/sections/Countries";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/sections/CTASection";
import Icon from "@/lib/icons";
import { IMG } from "@/data/site";

const HIGHLIGHTS = [
  { icon: "Stamp", title: "Official MEA Sticker", desc: "Computer-generated apostille sticker issued directly by the Ministry of External Affairs." },
  { icon: "Clock", title: "3–6 Working Days", desc: "Fast-track apostille for personal & educational documents from Delhi." },
  { icon: "Globe", title: "125+ Countries", desc: "Valid across all Hague Convention member nations without embassy attestation." },
  { icon: "Truck", title: "Free NCR Pickup", desc: "Complimentary doorstep pickup & delivery across Delhi, Noida & Gurugram." },
];

const FAQ_ITEMS = [
  { q: "Where is apostille done in Delhi?", a: "The MEA has decentralised apostille through authorised agencies. We collect, verify at state departments and get the MEA apostille sticker affixed — you don't need to visit any office." },
  { q: "What documents can be apostilled from Delhi?", a: "Educational (degrees, marksheets), personal (birth, marriage, PCC) and commercial (invoices, PoA) documents can all be apostilled." },
  { q: "How do I start the apostille process?", a: "Request a free quote or WhatsApp us. We arrange free pickup, complete the full chain, and deliver your apostilled originals back to you." },
];

export default function ApostilleDelhi() {
  useSeo({
    title: "Apostille from Delhi & MEA Apostille Services | Delhi Apostille",
    description: "MEA apostille services from Delhi for educational, personal & commercial documents. Official apostille sticker, 3–6 day processing & free doorstep pickup in Delhi NCR.",
  });
  return (
    <>
      <PageHero title="Apostille from Delhi / MEA" subtitle="Official MEA apostille for your Indian documents — fast, genuine and delivered to your door." crumbs={["Apostille from Delhi / MEA"]} />
      <section className="container-wide py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-navy/10">
            <img src={IMG.stamp} alt="MEA apostille stamp" className="w-full h-[460px] object-cover" />
          </div>
          <div>
            <span className="eyebrow">MEA Apostille</span>
            <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">Apostille Your Documents from Delhi</h2>
            <div className="gold-rule mt-4 mb-6" />
            <p className="text-slate-600 leading-relaxed">
              An apostille is a single-step legalisation issued by the Ministry of External Affairs (MEA) under the Hague Convention of 1961. As an MEA-authorised agency based in New Delhi, we handle the entire process — from state verification (SDM / HRD / Home Department) to affixing the official MEA apostille sticker — so your documents are accepted in 125+ countries.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="rounded-xl bg-white border border-slate-100 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold mb-3"><Icon name={h.icon} className="h-6 w-6" /></span>
                  <h3 className="font-semibold text-navy">{h.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Process />
      <Countries />
      <FAQ items={FAQ_ITEMS} heading="MEA Apostille FAQs" />
      <CTASection />
    </>
  );
}
