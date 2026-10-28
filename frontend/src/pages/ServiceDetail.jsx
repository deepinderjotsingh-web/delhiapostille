import { useParams, Link, Navigate } from "react-router-dom";
import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/sections/CTASection";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/lib/icons";
import { SERVICES } from "@/data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = SERVICES.find((s) => s.slug === slug);
  useSeo({
    title: svc ? `${svc.title} | Delhi Apostille` : "Service | Delhi Apostille",
    description: svc?.short,
    image: svc?.image,
  });
  if (!svc) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero title={svc.title} subtitle={svc.short} crumbs={["Services", svc.title]} />
      <section className="container-wide py-16 md:py-24 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-navy/10 mb-8">
            <img src={svc.image} alt={svc.title} className="w-full h-72 object-cover" />
          </div>
          <span className="eyebrow">Overview</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy">About {svc.title}</h2>
          <div className="gold-rule mt-4 mb-6" />
          <p className="text-slate-600 leading-relaxed text-lg">{svc.intro}</p>

          <h3 className="mt-10 font-serif text-2xl font-bold text-navy">Documents We Handle</h3>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {svc.documents.map((d) => (
              <div key={d} className="flex items-center gap-3 rounded-xl bg-white border border-slate-100 px-4 py-3">
                <Icon name="FileCheck2" className="h-5 w-5 text-gold-dark shrink-0" /> <span className="text-navy font-medium text-sm">{d}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-serif text-2xl font-bold text-navy">Process Steps</h3>
          <div className="mt-5 space-y-4">
            {svc.steps.map((st, i) => (
              <div key={st} className="flex items-start gap-4 rounded-xl bg-ivory border border-slate-100 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-serif font-bold text-gold">{i + 1}</span>
                <p className="text-navy font-medium pt-1.5">{st}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <QuoteForm compact />
            <div className="rounded-2xl bg-navy text-white p-6">
              <h4 className="font-serif text-lg font-bold">Other Services</h4>
              <div className="gold-rule my-3" />
              <ul className="space-y-2.5 text-sm">
                {SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="flex items-center gap-2 text-slate-300 hover:text-gold transition-colors">
                      <Icon name="ChevronRight" className="h-4 w-4 text-gold" /> {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
      {svc.faq?.length > 0 && <FAQ items={svc.faq} heading={`${svc.title} — FAQs`} />}
      <CTASection />
    </>
  );
}
