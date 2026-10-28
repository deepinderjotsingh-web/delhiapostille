import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/lib/icons";
import { NAV, CONTACT, IMG } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50" data-testid="site-header">
      {/* Top authority bar */}
      <div className="hidden md:block bg-navy text-white/90 text-sm">
        <div className="container-wide flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 hover:text-gold transition-colors" data-testid="topbar-phone">
              <Icon name="Phone" className="h-4 w-4 text-gold" /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-gold transition-colors" data-testid="topbar-email">
              <Icon name="Mail" className="h-4 w-4 text-gold" /> {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Icon name="BadgeCheck" className="h-4 w-4 text-gold" />
            <span>MEA Reg. No. {CONTACT.regNo}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container-wide flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3" data-testid="brand-logo">
            <img src={IMG.logo} alt="Delhi Apostille logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40" />
            <span className="leading-tight">
              <span className="block font-serif text-xl font-bold text-navy">Delhi Apostille</span>
              <span className="block text-[11px] font-medium tracking-wider uppercase text-gold-dark">Attestation & Legalisation</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {NAV.map((item) => (
              <div key={item.to} className="relative group">
                <Link
                  to={item.to}
                  data-testid={`nav-${item.to.replace(/\//g, "-") || "home"}`}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.to ? "text-gold-dark" : "text-navy hover:text-gold-dark"
                  }`}
                >
                  {item.label}
                  {item.children && <Icon name="ChevronDown" className="h-3.5 w-3.5" />}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-64">
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2">
                      {item.children.map((c) => (
                        <Link key={c.to} to={c.to} data-testid={`subnav-${c.to.replace(/\//g, "-")}`}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-ivory hover:text-navy transition-colors">
                          <Icon name="ChevronRight" className="h-3.5 w-3.5 text-gold" /> {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:inline-flex btn-gold !py-2.5 !px-5 text-sm" data-testid="header-cta">
              Get Free Quote
            </Link>
            <button className="lg:hidden p-2 text-navy" onClick={() => setMobileOpen(!mobileOpen)} data-testid="mobile-menu-toggle" aria-label="Toggle menu">
              <Icon name={mobileOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg max-h-[80vh] overflow-y-auto" data-testid="mobile-nav">
          <div className="container-wide py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.to}>
                <div className="flex items-center justify-between">
                  <Link to={item.to} onClick={() => setMobileOpen(false)} className="flex-1 py-3 font-medium text-navy" data-testid={`m-nav-${item.to.replace(/\//g, "-") || "home"}`}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button onClick={() => setOpenSub(openSub === item.to ? false : item.to)} className="p-2" aria-label="Expand">
                      <Icon name="ChevronDown" className={`h-4 w-4 transition-transform ${openSub === item.to ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && openSub === item.to && (
                  <div className="pl-4 pb-2 flex flex-col">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-slate-600">{c.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-gold mt-3 w-full">Get Free Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
