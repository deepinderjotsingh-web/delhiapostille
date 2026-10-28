import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/site";

function Counter({ value, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const dur = 1600, t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          setN(Math.floor(p * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  const fmt = (x) => (x >= 1000 ? x.toLocaleString("en-IN") : x);
  return <span ref={ref}>{fmt(n)}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="bg-gold" data-testid="stats-section">
      <div className="container-wide py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-navy">
        {STATS.map((s) => (
          <div key={s.label} data-testid={`stat-${s.label}`}>
            <div className="font-serif text-4xl lg:text-5xl font-bold"><Counter value={s.value} suffix={s.suffix} /></div>
            <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-navy/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
