import { CONTACT } from "@/data/site";
import Icon from "@/lib/icons";

export default function WhatsAppFloat() {
  return (
    <>
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20Delhi%20Apostille,%20I%20need%20help%20with%20document%20apostille.`}
        target="_blank" rel="noreferrer"
        data-testid="whatsapp-float-btn"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-bold text-white shadow-2xl transition-transform hover:scale-105"
      >
        <Icon name="MessageCircle" className="h-6 w-6" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Mobile sticky call/quote bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 bg-navy text-white md:hidden" data-testid="mobile-action-bar">
        <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center justify-center gap-2 py-3 border-r border-white/10 text-sm font-semibold">
          <Icon name="Phone" className="h-4 w-4 text-gold" /> Call Now
        </a>
        <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 text-sm font-semibold">
          <Icon name="MessageCircle" className="h-4 w-4 text-[#25D366]" /> WhatsApp
        </a>
      </div>
    </>
  );
}
