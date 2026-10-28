import Icon from "@/lib/icons";
import { WHY, IMG } from "@/data/site";

export default function WhyChoose() {
  return (
    <section className="container-wide py-16 md:py-24" data-testid="why-section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-navy/10">
            <img src={IMG.handshake} alt="Professional consultation" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl bg-gold px-6 py-5 shadow-xl text-navy">
            <div className="font-serif text-3xl font-bold">15+</div>
            <div className="text-xs font-semibold uppercase tracking-wider">Years of Trust</div>
          </div>
        </div>
        <div>
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">The Delhi Apostille Advantage</h2>
          <div className="gold-rule mt-4 mb-8" />
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY.map((w) => (
              <div key={w.title} className="flex gap-4" data-testid={`why-${w.title}`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-gold-dark">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{w.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-snug">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
