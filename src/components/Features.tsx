import { features } from "@/lib/content";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="fonctionnalites" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[460px] w-[460px] rounded-full bg-brand-deep/20 blur-[150px]" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Fonctionnalités</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Un boîtier, tout ce dont votre flotte a besoin.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Conçu et durci pour le transport professionnel : chaque
              fonctionnalité répond à un vrai problème de terrain.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <div className="card card-hover group h-full p-7">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 ring-1 ring-brand/30 transition-colors group-hover:bg-brand/20">
                    <f.icon className="h-6 w-6 text-brand-bright" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-dim">
                    {f.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
