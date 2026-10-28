import { useParams, Link, Navigate } from "react-router-dom";
import useSeo from "@/hooks/useSeo";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/sections/CTASection";
import Icon from "@/lib/icons";
import { BLOG, CONTACT } from "@/data/site";

const fmtDate = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG.find((b) => b.slug === slug);
  useSeo({
    title: post ? `${post.title} | Delhi Apostille Blog` : "Blog | Delhi Apostille",
    description: post?.excerpt,
    image: post?.image,
    schema: post && {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      image: post.image,
      author: { "@type": "Organization", name: "Delhi Apostille" },
    },
  });
  if (!post) return <Navigate to="/blog" replace />;
  const related = BLOG.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero title={post.title} subtitle={`${post.category} · ${fmtDate(post.date)}`} crumbs={["Blog", post.category]} />
      <section className="container-wide py-16 md:py-24 grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-navy/10 mb-8">
            <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
            <span className="flex items-center gap-1.5"><Icon name="Calendar" className="h-4 w-4 text-gold-dark" /> {fmtDate(post.date)}</span>
            <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark">{post.category}</span>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed font-serif">{post.excerpt}</p>
          <div className="gold-rule my-6" />
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">{post.content}</p>
          <div className="mt-10 rounded-2xl bg-navy text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-xl font-bold">Need help with this process?</h4>
              <p className="text-slate-300 text-sm mt-1">Talk to our experts for a free quote today.</p>
            </div>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold shrink-0">Chat on WhatsApp <Icon name="MessageCircle" className="h-4 w-4" /></a>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl bg-white border border-slate-100 p-6">
            <h4 className="font-serif text-lg font-bold text-navy">Related Articles</h4>
            <div className="gold-rule my-3" />
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="flex gap-3 group" data-testid={`related-${r.slug}`}>
                  <img src={r.image} alt={r.title} className="h-16 w-16 rounded-lg object-cover shrink-0" />
                  <span className="text-sm font-medium text-navy group-hover:text-gold-dark transition-colors leading-snug">{r.title}</span>
                </Link>
              ))}
            </div>
            <Link to="/blog" className="btn-outline-navy w-full mt-6 !py-2.5">All Articles</Link>
          </div>
        </aside>
      </section>
      <CTASection />
    </>
  );
}
