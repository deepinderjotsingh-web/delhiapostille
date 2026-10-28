import { Link } from "react-router-dom";
import Icon from "@/lib/icons";

export default function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <section className="relative bg-navy text-white overflow-hidden" data-testid="page-hero">
      <div className="absolute inset-0 hero-noise opacity-70" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-wide relative py-16 md:py-20">
        <nav className="flex items-center gap-2 text-sm text-slate-300 mb-4" data-testid="breadcrumbs">
          <Link to="/" className="hover:text-gold">Home</Link>
          {crumbs.map((c) => (
            <span key={c} className="flex items-center gap-2">
              <Icon name="ChevronRight" className="h-3.5 w-3.5 text-gold" />
              <span className="text-white/90">{c}</span>
            </span>
          ))}
        </nav>
        <div className="gold-rule mb-5" />
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-slate-300 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
