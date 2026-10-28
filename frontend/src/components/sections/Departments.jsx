import Icon from "@/lib/icons";
import { DEPARTMENTS } from "@/data/site";

export default function Departments() {
  return (
    <section className="container-wide py-16 md:py-24" data-testid="departments-section">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Working Process</span>
        <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">Departments We Work With</h2>
        <div className="gold-rule mx-auto mt-4" />
        <p className="mt-4 text-slate-600">We coordinate with every government authority involved in the legalisation chain.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {DEPARTMENTS.map((d) => (
          <div key={d.name} className="group rounded-2xl bg-white border border-slate-100 p-5 text-center card-lift" data-testid={`dept-${d.short}`}>
            <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
              <Icon name={d.icon} className="h-7 w-7" />
            </span>
            <h3 className="font-semibold text-navy text-sm">{d.short}</h3>
            <p className="mt-1.5 text-xs text-slate-500 leading-snug">{d.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
