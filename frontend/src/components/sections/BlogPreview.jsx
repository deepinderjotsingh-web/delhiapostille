import { Link } from "react-router-dom";
import Icon from "@/lib/icons";
import { BLOG } from "@/data/site";

const fmtDate = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function BlogPreview({ limit = 3 }) {
  return (
    <section className="container-wide py-16 md:py-24" data-testid="blog-preview">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
        <div>
          <span className="eyebrow">Our Blog & News</span>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-bold text-navy">Latest Articles & Guides</h2>
          <div className="gold-rule mt-4" />
        </div>
        <Link to="/blog" className="btn-outline-navy !py-2.5" data-testid="blog-viewall">View All <Icon name="ArrowRight" className="h-4 w-4" /></Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {BLOG.slice(0, limit).map((b) => (
          <Link key={b.slug} to={`/blog/${b.slug}`} className="group rounded-2xl bg-white border border-slate-100 overflow-hidden card-lift" data-testid={`blog-card-${b.slug}`}>
            <div className="relative h-48 overflow-hidden">
              <img src={b.image} alt={b.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">{b.category}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-slate-400"><Icon name="Calendar" className="h-3.5 w-3.5" /> {fmtDate(b.date)}</div>
              <h3 className="mt-2 font-serif text-lg font-bold text-navy group-hover:text-gold-dark transition-colors leading-snug">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
