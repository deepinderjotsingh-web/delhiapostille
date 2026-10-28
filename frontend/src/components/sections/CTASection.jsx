import { Link } from "react-router-dom";
import Icon from "@/lib/icons";
import { CONTACT, IMG } from "@/data/site";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy text-white" data-testid="cta-section">
      <img src={IMG.globe} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      <div className="container-wide relative py-16 md:py-20 text-center">
        <span className="eyebrow">Start Today</span>
        <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-bold max-w-2xl mx-auto">Ready to Get Your Documents Apostilled?</h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">Speak to our MEA-authorised experts for a free consultation and transparent quote — with free doorstep pickup in Delhi NCR.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-gold" data-testid="cta-quote">Get a Free Quote <Icon name="ArrowRight" className="h-4 w-4" /></Link>
          <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white hover:text-navy transition-colors" data-testid="cta-call">
            <Icon name="Phone" className="h-4 w-4" /> {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
