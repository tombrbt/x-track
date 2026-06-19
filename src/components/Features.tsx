"use client";

import { useState } from "react";
import { ImageIcon, Plus } from "lucide-react";
import { features } from "@/lib/content";
import Reveal from "./Reveal";

export default function Features() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="fonctionnalites" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[460px] w-[460px] rounded-full bg-brand-deep/20 blur-[150px]" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------- Colonne gauche : fonctionnalités (accordéon) ---------- */}
          <div>
            <Reveal>
              <span className="eyebrow">Fonctionnalités</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Un boîtier, tout ce dont votre flotte a besoin.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted">
                Conçu et durci pour le transport professionnel : chaque
                fonctionnalité répond à un vrai problème de terrain.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-white/10">
              {features.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.title} delay={i * 60}>
                    <div className="border-b border-white/10">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center gap-4 py-5 text-left"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/40">
                          <f.icon className="h-5 w-5 text-brand-bright" />
                        </span>
                        <h3 className="flex-1 font-display text-lg font-bold tracking-tight">
                          {f.title}
                        </h3>
                        <Plus
                          className={`h-5 w-5 shrink-0 text-muted-dim transition-transform duration-300 ${
                            isOpen ? "rotate-45 text-brand-bright" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="w-full pb-5 pl-[3.75rem] text-[15px] leading-relaxed text-muted">
                            {f.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ---------- Colonne droite : emplacement image (paysage) ---------- */}
          <div className="lg:pl-4">
            <Reveal delay={120}>
              <div className="space-y-6 lg:sticky lg:top-28">
                <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02]">
                  <div className="flex flex-col items-center gap-2 text-muted-dim">
                    <ImageIcon className="h-8 w-8" />
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.2em]">
                      Visuel à venir
                    </span>
                  </div>
                </div>
                <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02]">
                  <div className="flex flex-col items-center gap-2 text-muted-dim">
                    <ImageIcon className="h-8 w-8" />
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.2em]">
                      Visuel à venir
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
