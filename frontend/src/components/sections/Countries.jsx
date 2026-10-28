import Icon from "@/lib/icons";
import { COUNTRIES, IMG } from "@/data/site";

export default function Countries() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#0F2544] text-white" data-testid="countries-section">
      <img src={IMG.globe} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="container-wide relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Global Reach</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold">Popular Countries We Serve</h2>
          <div className="gold-rule mx-auto mt-4" />
          <p className="mt-4 text-slate-300">Apostille & attestation for study, work, business and residency across the world.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {COUNTRIES.map((c) => (
            <div key={c.name} className="flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2.5 backdrop-blur-sm hover:bg-gold hover:text-navy transition-colors" data-testid={`country-${c.name}`}>
              <Icon name="Globe2" className="h-4 w-4 text-gold group-hover:text-navy" />
              <span className="text-sm font-medium">{c.name}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-70">{c.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
