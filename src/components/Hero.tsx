import { ArrowRight, MapPin, ShieldCheck, Bluetooth, Bell } from "lucide-react";
import Counter from "./Counter";
import Reveal from "./Reveal";

const capabilities = [
  { icon: MapPin, label: "Géolocalisation", sub: "Temps réel" },
  { icon: ShieldCheck, label: "Antivol intégré", sub: "Protection active" },
  { icon: Bluetooth, label: "Contrôle d'accès", sub: "Bluetooth" },
  { icon: Bell, label: "Alertes", sub: "Intelligentes" },
];

// Europe : 8,2 Md€ de fret volés/an (données 2023) ≈ 259 € / seconde.
const STOLEN_PER_SECOND = 259;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden"
    >
      {/* ---------- Background photo (camion + boîtier reliés par LEDs) ---------- */}
      <div
        className="pointer-events-none absolute inset-0 bg-ink-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/bgHero.png')",
          backgroundPosition: "center calc(50% - -50px)",
        }}
      />
      {/* Légibilité : assombrissement gauche + bas */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-ink-900/95" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-900/80 to-transparent" />

      {/* ---------- Contenu haut ---------- */}
      <div className="relative w-full flex-1 px-6 pt-32 sm:px-10 sm:pt-36 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — message */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
                Boîtier connecté · Nouvelle génération
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-3xl font-light uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                La nouvelle génération{" "} <br />
                <span className="text-brand-bright">de sécurité connectée</span>{" "} <br />
                pour les flottes de camions
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Surveillez, sécurisez et pilotez vos véhicules grâce à un boîtier
                intelligent conçu pour le transport professionnel.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-primary">
                  Demander une démonstration
                </a>
                <a href="#points-cles" className="btn-ghost group">
                  Découvrir la solution
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — capacités du boîtier (superposées à la photo) */}
          <div className="lg:col-span-5">
            <Reveal delay={320}>
              <div className="ml-auto max-w-xs space-y-5 lg:mt-[20.5rem] lg:translate-x-28">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brand-bright">
                  Boîtier connecté
                </p>
                {capabilities.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand/40">
                      <c.icon className="h-4 w-4 text-brand-bright" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-semibold uppercase tracking-wide">
                        {c.label}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-muted-dim">
                        {c.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ---------- Bandeau bas : compteur + mission ---------- */}
      <div className="relative w-full px-6 pb-10 pt-8 sm:px-10 lg:px-16">
        <Reveal delay={120}>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm md:grid-cols-2">
            {/* Compteur de vols en temps réel */}
            <div className="p-7">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-dim">
                Coût des vols de fret en Europe — en direct
              </p>
              <div className="mt-3 overflow-hidden">
                <Counter
                  live
                  rate={STOLEN_PER_SECOND}
                  suffix=" €"
                  className="block whitespace-nowrap font-display text-4xl font-light italic tabular-nums tracking-tight text-white sm:text-5xl"
                />
              </div>
              <p className="mt-2 text-sm text-white/70">
                8,2 Md€ de marchandises volées en Europe (données 2023), soit
                environ 259 € par seconde.
              </p>
            </div>

            {/* Mission */}
            <div className="p-7 md:border-l md:border-white/[0.08]">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
                Notre mission
              </p>
              <p className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
                Zéro vol.<br />Zéro compromis.
              </p>
              <p className="mt-2 text-sm text-muted">
                Protéger vos biens. Sécuriser votre activité.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
