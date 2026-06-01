"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Vos questions, nos réponses.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tout ce qu'il faut savoir avant d'équiper votre flotte. Une autre
              question ?{" "}
              <a href="#contact" className="text-brand-bright underline-offset-4 hover:underline">
                Contactez-nous
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-800/50">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <li key={faq.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base font-semibold sm:text-lg">
                        {faq.q}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-brand-bright transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
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
                        <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
