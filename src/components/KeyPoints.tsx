import { keyPoints } from "@/lib/content";
import Reveal from "./Reveal";

export default function KeyPoints() {
  return (
    <section
      id="points-cles"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* ---------- Background photo (camion) ---------- */}
      <div
        className="pointer-events-none absolute inset-0 bg-ink-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/bgKeypoints.png')",
          backgroundPosition: "center calc(50% - 60px)",
        }}
      />
      {/* Assombrissement du côté droit pour la lisibilité du texte */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-ink-900/95 via-ink-900/55 to-transparent" />

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
