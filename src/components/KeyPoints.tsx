"use client";

import { useEffect, useRef, useState } from "react";
import { keyPoints } from "@/lib/content";
import Reveal from "./Reveal";

const BG_POSITION = "center calc(50% - 60px)";

export default function KeyPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          // les feux s'allument une fois le fond apparu
          const t = setTimeout(() => setLit(true), 850);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="points-cles"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* ---------- Fond : apparaît en fondu au scroll ---------- */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Base : feux éteints */}
        <div
          className="absolute inset-0 bg-ink-900 bg-cover bg-no-repeat brightness-125"
          style={{
            backgroundImage: "url('/bgKeypoints2.png')",
            backgroundPosition: BG_POSITION,
          }}
        />
        {/* Overlay : feux allumés (scintille puis apparaît) */}
        <div
          className={`absolute inset-0 bg-cover bg-no-repeat brightness-125 ${
            lit ? "animate-lights-on" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/bgKeypoints.png')",
            backgroundPosition: BG_POSITION,
          }}
        />
      </div>
      {/* Assombrissement du côté droit pour la lisibilité du texte */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-ink-900/80 via-ink-900/35 to-transparent" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Colonne gauche laissée libre (le camion reste visible) */}
          <div className="hidden lg:block" />

          {/* Colonne droite — texte + points clés en colonne */}
          <div className="lg:pl-[5.5rem]">
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
