import { Check } from "lucide-react";
import { plans } from "@/lib/content";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand/15 blur-[160px]" />
      <div className="container-x relative">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Tarifs</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Une offre simple, sans frais cachés.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Matériel inclus, sans engagement sur Essentiel et Pro. Tarif
              dégressif pour les flottes.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ${
                  plan.highlight
                    ? "border-brand/60 bg-gradient-to-b from-brand/[0.12] to-ink-800/80 shadow-glow"
                    : "border-white/[0.07] bg-ink-800/60 hover:border-brand/30"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-glow-sm">
                    Le plus choisi
                  </span>
                )}
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-muted-dim">{plan.period}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright"
                        strokeWidth={3}
                      />
                      <span className="text-muted">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 ${
                    plan.highlight ? "btn-primary" : "btn-ghost"
                  } w-full`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-dim">
          Tarifs indicatifs hors taxes — à personnaliser selon votre grille
          commerciale.
        </p>
      </div>
    </section>
  );
}
