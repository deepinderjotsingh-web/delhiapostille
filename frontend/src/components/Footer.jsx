import { Link } from "react-router-dom";
import Icon from "@/lib/icons";
import { CONTACT, SERVICES, IMG } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300" data-testid="site-footer">
      <div className="container-wide py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={IMG.logo} alt="Delhi Apostille" className="h-12 w-12 rounded-full ring-2 ring-gold/40" />
            <span className="font-serif text-xl font-bold text-white">Delhi Apostille</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            MEA-authorised apostille, attestation and embassy legalisation services from New Delhi. Trusted by 50,000+ clients across 100+ countries.
          </p>
          <div className="flex gap-3 mt-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs"><Icon name="Award" className="h-3.5 w-3.5 text-gold" /> ISO Certified</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs"><Icon name="ShieldCheck" className="h-3.5 w-3.5 text-gold" /> Govt. Recognised</span>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-gold transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-3.5 w-3.5 text-gold" /> {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[["About Us", "/about"], ["Attestation", "/attestation"], ["Embassy Legalization", "/embassy-legalization"], ["Apostille from Delhi / MEA", "/apostille-delhi-mea"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([l, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" className="h-3.5 w-3.5 text-gold" /> {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><Icon name="MapPin" className="h-5 w-5 text-gold shrink-0 mt-0.5" /> <span>{CONTACT.address}</span></li>
            <li className="flex items-center gap-3"><Icon name="Phone" className="h-5 w-5 text-gold shrink-0" /> <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-gold">{CONTACT.phone}</a></li>
            <li className="flex items-center gap-3"><Icon name="Mail" className="h-5 w-5 text-gold shrink-0" /> <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a></li>
            <li className="flex items-center gap-3"><Icon name="Clock" className="h-5 w-5 text-gold shrink-0" /> {CONTACT.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Delhi Apostille ({CONTACT.domain}). All rights reserved.</p>
          <p>MEA Registration No. {CONTACT.regNo} · Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
