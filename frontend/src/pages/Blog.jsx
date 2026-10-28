import { useState } from "react";
import { Link } from "react-router-dom";
import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import Icon from "@/lib/icons";
import { BLOG } from "@/data/site";

const fmtDate = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
const CATS = ["All", ...Array.from(new Set(BLOG.map((b) => b.category)))];

export default function Blog() {
  const [cat, setCat] = useState("All");
  useSeo({
    title: "Blog & News | Apostille & Attestation Guides | Delhi Apostille",
    description: "Read the latest guides, news and tips on apostille, attestation, embassy legalisation and document requirements for countries worldwide.",
  });
  const items = cat === "All" ? BLOG : BLOG.filter((b) => b.category === cat);
  return (
    <>
      <PageHero title="Blog & News" subtitle="Expert guides on apostille, attestation and document legalisation." crumbs={["Blog"]} />
      <section className="container-wide py-16 md:py-24">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} data-testid={`blog-cat-${c}`}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${cat === c ? "bg-navy text-white" : "bg-white border border-slate-200 text-navy hover:border-gold"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((b) => (
            <Link key={b.slug} to={`/blog/${b.slug}`} className="group rounded-2xl bg-white border border-slate-100 overflow-hidden card-lift" data-testid={`blog-item-${b.slug}`}>
              <div className="relative h-48 overflow-hidden">
                <img src={b.image} alt={b.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">{b.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400"><Icon name="Calendar" className="h-3.5 w-3.5" /> {fmtDate(b.date)}</div>
                <h3 className="mt-2 font-serif text-lg font-bold text-navy group-hover:text-gold-dark transition-colors leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">Read Article <Icon name="ArrowRight" className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
