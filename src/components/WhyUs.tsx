import { Check, X, Zap, Headphones, ShieldCheck, Wrench } from "lucide-react";
import { compareRows } from "@/lib/content";
import Reveal from "./Reveal";

const reasons = [
  {
    icon: Wrench,
    title: "Installé en quelques minutes",
    text: "Plug & play, sans immobiliser vos véhicules ni passer par l'atelier.",
  },
  {
    icon: Zap,
    title: "Temps réel, vraiment",
    text: "Position rafraîchie toutes les 10 secondes, là où d'autres se contentent de quelques minutes.",
  },
  {
    icon: Headphones,
    title: "Support français 7j/7",
    text: "Une équipe qui connaît le transport et qui répond, sans hotline interminable.",
  },
  {
    icon: ShieldCheck,
    title: "Sans engagement",
    text: "Vous restez libre. Pas de contrat piégé, pas de frais cachés.",
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi" className="relative py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Pourquoi nous</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Pourquoi X-TRACK plutôt qu'un autre ?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* reasons */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="card card-hover h-full p-6">
                  <r.icon className="h-7 w-7 text-brand-bright" />
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* comparison table */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="card h-full overflow-hidden p-0">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-white/[0.07] px-5 py-4 text-xs font-semibold uppercase tracking-wider">
                <span className="text-muted-dim">Critère</span>
                <span className="w-16 text-center text-brand-bright">X-TRACK</span>
                <span className="w-16 text-center text-muted-dim">Autres</span>
              </div>
              <ul>
                {compareRows.map((row) => (
                  <li
                    key={row.label}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-white/[0.05] px-5 py-3.5 last:border-0"
                  >
                    <span className="text-sm text-muted">{row.label}</span>
                    <span className="grid w-16 place-items-center">
                      <Check className="h-5 w-5 text-brand-bright" strokeWidth={3} />
                    </span>
                    <span className="grid w-16 place-items-center text-center">
                      {typeof row.them === "string" ? (
                        <span className="text-xs text-muted-dim">{row.them}</span>
                      ) : (
                        <X className="h-5 w-5 text-muted-dim/60" strokeWidth={2.5} />
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
