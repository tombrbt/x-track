import { keyPoints } from "@/lib/content";
import Reveal from "./Reveal";

export default function KeyPoints() {
  return (
    <section id="points-cles" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Notre boîtier</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            La technologie au service de vos remorques<span className="text-brand-bright">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Quatre piliers pour garder le contrôle total de votre flotte, à tout
            moment et où que vous soyez.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {keyPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 90}>
              <div className="card card-hover h-full p-7">
                <div className="badge-ring">
                  <point.icon className="h-6 w-6 text-brand-bright" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide">
                  {point.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
