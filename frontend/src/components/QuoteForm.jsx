import { useState } from "react";
import Icon from "@/lib/icons";
import { DOC_TYPES, COUNTRIES } from "@/data/site";

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState({ name: "", phone: "", docType: "Educational", country: "United Arab Emirates" });
  const [sent, setSent] = useState(false);
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl border border-slate-100" data-testid="quote-success">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <Icon name="CheckCircle2" className="h-9 w-9 text-emerald-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy">Request Received!</h3>
        <p className="mt-2 text-slate-600">Thank you, {form.name}. Our apostille expert will call you on {form.phone} shortly with a free quote.</p>
        <button onClick={() => { setSent(false); setForm({ name: "", phone: "", docType: "Educational", country: "United Arab Emirates" }); }} className="btn-outline-navy mt-6" data-testid="quote-reset">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100" data-testid="quote-form">
      <div className="mb-5">
        <span className="eyebrow">Instant Estimate</span>
        <h3 className="font-serif text-2xl font-bold text-navy mt-1">Get a Free Quote</h3>
        {!compact && <p className="text-sm text-slate-500 mt-1">No obligation. Our expert will call you back within an hour.</p>}
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Document Type</label>
            <select value={form.docType} onChange={upd("docType")} data-testid="quote-doctype" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-white">
              {DOC_TYPES.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Destination Country</label>
            <select value={form.country} onChange={upd("country")} data-testid="quote-country" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-white">
              {COUNTRIES.map((c) => <option key={c.name}>{c.name}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name</label>
          <input value={form.name} onChange={upd("name")} required placeholder="Your name" data-testid="quote-name" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none" />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone / WhatsApp</label>
          <input value={form.phone} onChange={upd("phone")} required placeholder="+91 98xxxxxxxx" data-testid="quote-phone" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none" />
        </div>
        <button type="submit" className="btn-gold w-full !py-3.5" data-testid="quote-submit">
          Request Free Quote <Icon name="ArrowRight" className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-slate-400">🔒 Your details are 100% confidential.</p>
      </div>
    </form>
  );
}
