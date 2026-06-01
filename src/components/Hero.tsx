import { ArrowRight, MapPin, ShieldCheck, Bluetooth, Bell } from "lucide-react";
import Counter from "./Counter";
import Reveal from "./Reveal";

const capabilities = [
  { icon: MapPin, label: "Géolocalisation", sub: "Temps réel" },
  { icon: ShieldCheck, label: "Antivol intégré", sub: "Protection active" },
  { icon: Bluetooth, label: "Contrôle d'accès", sub: "Bluetooth" },
  { icon: Bell, label: "Alertes", sub: "Intelligentes" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.5]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-brand-deep/30 blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-900" />

      {/* animated data-flow lines */}
      <svg
        className="pointer-events-none absolute right-0 top-1/4 hidden h-[420px] w-[55%] opacity-60 lg:block"
        viewBox="0 0 800 400"
        fill="none"
        preserveAspectRatio="none"
      >
        {[60, 130, 200, 270, 340].map((y, i) => (
          <path
            key={y}
            d={`M0 ${y} C 200 ${y - 40}, 400 ${y + 50}, 800 ${y - 10}`}
            stroke="url(#flow)"
            strokeWidth="1.5"
            strokeDasharray="6 14"
            className="animate-dash"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="800" y2="0">
            <stop offset="0%" stopColor="#1f6bff" stopOpacity="0" />
            <stop offset="50%" stopColor="#4d90ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1f6bff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — message */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
                Boîtier connecté · Nouvelle génération
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                La nouvelle génération de{" "}
                <span className="text-brand-bright">sécurité connectée</span> pour
                vos flottes de poids lourds.
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

          {/* Right — device showcase */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative mx-auto flex max-w-md items-center justify-center">
                {/* rings */}
                <div className="absolute h-64 w-64">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="absolute inset-0 rounded-full border border-brand/40 animate-pulse-ring"
                      style={{ animationDelay: `${i * 1}s` }}
                    />
                  ))}
                  <span className="absolute inset-8 rounded-full border border-brand/20" />
                  <span className="absolute inset-16 rounded-full border border-brand/10" />
                </div>

                {/* device */}
                <div className="relative z-10 animate-float-slow">
                  <div className="relative grid h-52 w-44 place-items-center rounded-[1.4rem] border border-brand/50 bg-gradient-to-br from-ink-600 to-ink-900 shadow-glow">
                    <div className="absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(77,144,255,0.18),transparent_60%)]" />
                    <ShieldCheck className="h-10 w-10 text-brand-bright" />
                    <span className="mt-3 font-display text-sm font-bold uppercase tracking-[0.25em] text-white/90">
                      X-Track
                    </span>
                    {/* ports */}
                    <div className="absolute -bottom-2 flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className="h-2 w-5 rounded-b bg-ink-500" />
                      ))}
                    </div>
                    {/* status dot */}
                    <span className="absolute right-4 top-4 flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-bright" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div
                    key={c.label}
                    className="card flex items-center gap-3 px-4 py-3"
                  >
                    <c.icon className="h-5 w-5 shrink-0 text-brand-bright" />
                    <div className="leading-tight">
                      <p className="text-sm font-semibold">{c.label}</p>
                      <p className="text-xs text-muted-dim">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stat band */}
        <Reveal delay={120}>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] md:grid-cols-3">
            <div className="bg-ink-800/60 p-7">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-dim">
                Perdu chaque année en France
              </p>
              <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand-bright sm:text-5xl">
                <Counter to={146115000} suffix=" €" />
              </p>
              <p className="mt-2 text-sm text-muted">
                À cause des vols de remorques.
              </p>
            </div>
            <div className="bg-ink-800/60 p-7">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-dim">
                Remorques volées / an
              </p>
              <p className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <Counter to={3247} />
              </p>
              <p className="mt-2 text-sm text-muted">
                Ne soyez pas le prochain.{" "}
                <span className="text-muted-dim">*Source : ONDRP — 2023.</span>
              </p>
            </div>
            <div className="bg-ink-800/60 p-7">
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
