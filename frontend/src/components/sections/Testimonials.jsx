import { useState } from "react";
import Icon from "@/lib/icons";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d) => setI((i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  return (
    <section className="bg-ivory py-16 md:py-24" data-testid="testimonials-section">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">What Our Clients Say</h2>
          <div className="gold-rule mx-auto mt-4" />
        </div>
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-100 p-8 sm:p-12 shadow-xl relative">
          <Icon name="Quote" className="h-12 w-12 text-gold/30 absolute top-6 right-8" />
          <div className="flex gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, k) => <Icon key={k} name="Star" className="h-5 w-5 fill-gold text-gold" />)}
          </div>
          <p className="text-lg text-slate-700 leading-relaxed font-serif italic" data-testid="testimonial-text">“{t.text}”</p>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="font-semibold text-navy">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => go(-1)} className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" data-testid="testimonial-prev" aria-label="Previous">
                <Icon name="ChevronRight" className="h-5 w-5 rotate-180" />
              </button>
              <button onClick={() => go(1)} className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" data-testid="testimonial-next" aria-label="Next">
                <Icon name="ChevronRight" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
