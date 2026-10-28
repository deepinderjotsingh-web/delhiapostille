import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/lib/icons";
import { CONTACT } from "@/data/site";

const CARDS = [
  { icon: "MapPin", title: "Visit Our Office", lines: [CONTACT.address] },
  { icon: "Phone", title: "Call Us", lines: [CONTACT.phone, CONTACT.altPhone] },
  { icon: "Mail", title: "Email Us", lines: [CONTACT.email] },
  { icon: "Clock", title: "Working Hours", lines: [CONTACT.hours, "Sunday: Closed"] },
];

export default function Contact() {
  useSeo({
    title: "Contact Us | Delhi Apostille & Attestation Services",
    description: "Contact Delhi Apostille for a free quote on apostille, attestation & embassy legalisation. Call, WhatsApp or visit our Connaught Place office in New Delhi.",
  });
  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch for a free consultation and quote — we're here to help six days a week." crumbs={["Contact"]} />
      <section className="container-wide py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {CARDS.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white border border-slate-100 p-6 text-center card-lift" data-testid={`contact-card-${c.title}`}>
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold"><Icon name={c.icon} className="h-7 w-7" /></span>
              <h3 className="font-serif text-lg font-bold text-navy">{c.title}</h3>
              {c.lines.map((l) => <p key={l} className="mt-1 text-sm text-slate-600">{l}</p>)}
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="eyebrow">Send Us a Message</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy">Request Your Free Quote</h2>
            <div className="gold-rule mt-4 mb-6" />
            <p className="text-slate-600 mb-6">Fill in the form and our apostille expert will call you back within the hour with a transparent, no-obligation quote.</p>
            <QuoteForm />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-navy/10 h-full min-h-[500px]">
            <iframe title="Delhi Apostille location" src={CONTACT.mapEmbed} className="w-full h-full min-h-[500px]" loading="lazy" style={{ border: 0 }} data-testid="contact-map" />
          </div>
        </div>
      </section>
    </>
  );
}
