import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand/40 bg-gradient-to-br from-brand/[0.18] via-ink-700 to-ink-900 px-7 py-14 text-center shadow-glow sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-[120px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Passez à la sécurité connectée dès aujourd'hui.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
                Réservez une démonstration gratuite et découvrez comment X-TRACK
                protège votre flotte en temps réel.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:contact@x-track.fr" className="btn-primary">
                  Demander une démonstration
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:+33100000000" className="btn-ghost">
                  Parler à un expert
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-dim">
                Sans engagement · Réponse sous 24 h · Matériel inclus
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
