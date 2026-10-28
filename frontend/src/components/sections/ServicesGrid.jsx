import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "@/lib/icons";
import { SERVICES } from "@/data/site";

export default function ServicesGrid({ heading = true, limit }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="container-wide py-16 md:py-24" data-testid="services-section">
      {heading && (
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Unlocking Global Legalisation</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">Our Apostille & Attestation Services</h2>
          <div className="gold-rule mx-auto mt-4" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s, i) => (
          <motion.div key={s.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl bg-white border border-slate-100 overflow-hidden card-lift" data-testid={`service-card-${s.slug}`}>
            <div className="relative h-44 overflow-hidden">
              <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <span className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-navy shadow-lg">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.short}</p>
              <Link to={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:gap-3 transition-all" data-testid={`service-link-${s.slug}`}>
                Read More <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
