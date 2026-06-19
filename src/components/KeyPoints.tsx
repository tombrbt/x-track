"use client";

import { useEffect, useRef, useState } from "react";
import { keyPoints } from "@/lib/content";
import Reveal from "./Reveal";

const BG_POSITION = " calc(50% - 90px)";
const BG_SIZE = "90%"; // < 100% = camion légèrement dézoomé

export default function KeyPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const lightsRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Apparition en fondu du fond à l'entrée dans le viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    // Luminosité des feux pilotée par le scroll, calée sur le centre de la
    // section (= position des phares dans l'image).
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const top = rect.top;
      // Feux éteints tant que le haut de section est en bas de l'écran (et
      // dès qu'il repasse sous le fold en remontant → 0 garanti), pleins
      // quand la section remonte et que les phares deviennent visibles.
      const p = (vh * 0.8 - top) / (vh * 0.6);
      const clamped = Math.min(Math.max(p, 0), 1);
      if (lightsRef.current) lightsRef.current.style.opacity = String(clamped);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="points-cles"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32
      "
    >
      {/* ---------- Fond : apparaît en fondu au scroll ---------- */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Base : feux éteints */}
        <div
          className="absolute inset-0 bg-ink-900 bg-no-repeat brightness-125"
          style={{
            backgroundImage: "url('/bgKeypoints2.png')",
            backgroundPosition: BG_POSITION,
            backgroundSize: BG_SIZE,
          }}
        />
        {/* Overlay : feux allumés (opacité pilotée par le scroll) */}
        <div
          ref={lightsRef}
          className="absolute inset-0 bg-no-repeat brightness-125"
          style={{
            backgroundImage: "url('/bgKeypoints.png')",
            backgroundPosition: BG_POSITION,
            backgroundSize: BG_SIZE,
            opacity: 0,
          }}
        />
      </div>
      {/* Assombrissement du côté droit pour la lisibilité du texte */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-ink-900/80 via-ink-900/35 to-transparent" />

      {/* Fondu vers les sections précédente (haut) et suivante (bas) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-ink-900 to-transparent" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Colonne gauche laissée libre (le camion reste visible) */}
          <div className="hidden lg:block" />

          {/* Colonne droite — texte + points clés en colonne */}
          <div className="lg:pl-[5.5rem] ">
            <Reveal>
              <span className="eyebrow">Notre boîtier</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                La technologie au service de vos remorques
                <span className="text-brand-bright">.</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted">
                Quatre piliers pour garder le contrôle total de votre flotte, à
                tout moment et où que vous soyez.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {keyPoints.map((point, i) => (
                <Reveal key={point.title} delay={i * 90}>
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/40">
                      <point.icon className="h-5 w-5 text-brand-bright" />
                    </span>
                    <div className="leading-tight">
                      <h3 className="font-display text-base font-bold uppercase tracking-wide">
                        {point.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
