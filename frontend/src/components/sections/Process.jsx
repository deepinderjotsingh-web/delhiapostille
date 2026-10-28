import { motion } from "framer-motion";
import Icon from "@/lib/icons";
import { PROCESS } from "@/data/site";

export default function Process() {
  return (
    <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden" data-testid="process-section">
      <div className="absolute inset-0 hero-noise" />
      <div className="container-wide relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-white">A Simple 4-Step Process</h2>
          <div className="gold-rule mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {PROCESS.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm" data-testid={`process-step-${p.step}`}>
              <span className="absolute -top-4 right-5 font-serif text-5xl font-bold text-gold/25">{p.step}</span>
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold text-navy mb-4">
                <Icon name={p.icon} className="h-7 w-7" />
              </span>
              <h3 className="font-serif text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
