import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "@/lib/icons";
import QuoteForm from "@/components/QuoteForm";
import { TRUST, IMG } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory via-[#F1F5F9] to-white border-b border-slate-200 hero-noise" data-testid="hero">
      <div className="container-wide grid lg:grid-cols-2 gap-12 items-center py-14 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold text-navy border border-navy/10">
            <Icon name="Landmark" className="h-4 w-4 text-gold" /> Ministry of External Affairs Authorised
          </span>
          <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
            Apostille & Attestation <span className="text-gold-dark">Services in Delhi</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed">
            Get your educational, personal and commercial documents apostilled by the MEA and legalised at any embassy — with free doorstep pickup across Delhi NCR.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold" data-testid="hero-quote-btn">Get Free Quote <Icon name="ArrowRight" className="h-4 w-4" /></Link>
            <Link to="/services" className="btn-outline-navy" data-testid="hero-services-btn">Explore Services</Link>
          </div>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TRUST.map((t) => (
              <div key={t.text} className="flex items-center gap-3 rounded-xl bg-white/70 border border-slate-100 px-4 py-3 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5">
                  <Icon name={t.icon} className="h-5 w-5 text-gold-dark" />
                </span>
                <span className="text-sm font-medium text-navy">{t.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-navy/10 mb-6">
            <img src={IMG.hero} alt="Official apostille certificate with gold seal" className="w-full h-56 sm:h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-semibold">
              <Icon name="Stamp" className="h-5 w-5 text-gold" /> 100% Genuine MEA Apostille
            </div>
          </div>
          <QuoteForm compact />
        </motion.div>
      </div>
    </section>
  );
}
