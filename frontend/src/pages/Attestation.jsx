import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import Departments from "@/components/sections/Departments";
import Process from "@/components/sections/Process";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/sections/CTASection";
import Icon from "@/lib/icons";
import { IMG } from "@/data/site";

const TYPES = [
  { icon: "GraduationCap", title: "Educational Attestation", desc: "Degrees, diplomas, marksheets and transcripts attested via HRD, SDM and MEA." },
  { icon: "Users", title: "Personal Attestation", desc: "Birth, marriage, death, PCC and affidavits attested for family & residence visas." },
  { icon: "Building2", title: "Commercial Attestation", desc: "GST, incorporation, invoices and PoA attested via Chamber of Commerce & MEA." },
];

const FAQ_ITEMS = [
  { q: "What is certificate attestation?", a: "Attestation is the process of verifying the genuineness of a document by authorised departments (Notary, State, MEA and Embassy) so it is legally accepted abroad." },
  { q: "Which documents can be attested?", a: "Educational, personal and commercial documents can all be attested. The exact chain depends on the document type and destination country." },
  { q: "Is attestation the same as apostille?", a: "No. Apostille is for Hague Convention countries; attestation (embassy legalisation) is for non-member countries such as the UAE and Saudi Arabia." },
];

export default function Attestation() {
  useSeo({
    title: "Certificate Attestation Services in Delhi | Delhi Apostille",
    description: "Educational, personal & commercial certificate attestation in Delhi via Notary, SDM, HRD, Home Department, MEA and embassies. Free pickup & delivery.",
  });
  return (
    <>
      <PageHero title="Certificate Attestation Services" subtitle="End-to-end attestation of educational, personal and commercial documents in Delhi." crumbs={["Attestation"]} />
      <section className="container-wide py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">What Is Attestation?</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">Legalise Your Documents for Any Country</h2>
          <div className="gold-rule mt-4 mb-6" />
          <p className="text-slate-600 leading-relaxed">
            Certificate attestation authenticates your documents through a chain of authorities — Notary, State Department (SDM / HRD / Home), the Ministry of External Affairs, and finally the destination country's embassy. It confirms your documents are genuine and legally valid abroad for study, work, business, migration and family reunification.
          </p>
          <div className="mt-6 grid gap-4">
            {TYPES.map((t) => (
              <div key={t.title} className="flex gap-4 rounded-xl bg-white border border-slate-100 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold"><Icon name={t.icon} className="h-6 w-6" /></span>
                <div><h3 className="font-semibold text-navy">{t.title}</h3><p className="text-sm text-slate-600">{t.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-navy/10">
          <img src={IMG.degree} alt="Certificate attestation" className="w-full h-[520px] object-cover" />
        </div>
      </section>
      <Process />
      <Departments />
      <FAQ items={FAQ_ITEMS} heading="Attestation FAQs" />
      <CTASection />
    </>
  );
}
