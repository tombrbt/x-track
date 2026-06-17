"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** Target value for the count-up animation (non-live mode). */
  to?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /**
   * Live mode: the counter resets to 0 on every page load and increases
   * continuously at `rate` units per second (e.g. euros stolen per second).
   */
  live?: boolean;
  /** Units added per second when `live` is true. */
  rate?: number;
  /** Number of fraction digits to display (live mode). */
  fractionDigits?: number;
};

export default function Counter({
  to = 0,
  duration = 2200,
  prefix = "",
  suffix = "",
  className = "",
  live = false,
  rate = 0,
  fractionDigits = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  // --- Live mode: reset to 0 on mount, then accumulate at `rate`/sec. ---
  useEffect(() => {
    if (!live) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      setValue(elapsed * rate);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [live, rate]);

  // --- Count-up mode: animate to `to` when scrolled into view. ---
  useEffect(() => {
    if (live) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const t = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(t);
            else setValue(to);
          };
          requestAnimationFrame(t);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, live]);

  const display = live
    ? value.toLocaleString("fr-FR", {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
      })
    : value.toLocaleString("fr-FR");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
