import { useState } from "react";
import Icon from "@/lib/icons";

export default function FAQ({ items, heading = "Frequently Asked Questions" }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="container-wide py-16 md:py-24" data-testid="faq-section">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">{heading}</h2>
        <div className="gold-rule mx-auto mt-4" />
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((f, i) => (
          <div key={i} className="rounded-2xl bg-white border border-slate-100 overflow-hidden" data-testid={`faq-item-${i}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left" data-testid={`faq-toggle-${i}`}>
              <span className="font-semibold text-navy">{f.q}</span>
              <Icon name="ChevronDown" className={`h-5 w-5 text-gold-dark shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed -mt-1">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
