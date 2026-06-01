"use client";

import { useEffect, useState } from "react";
import {
  Navigation,
  BatteryFull,
  Lock,
  Thermometer,
  Signal,
  Bell,
} from "lucide-react";
import Reveal from "./Reveal";

export default function DataBox() {
  const [speed, setSpeed] = useState(84);
  const [battery, setBattery] = useState(96);

  useEffect(() => {
    const id = setInterval(() => {
      setSpeed(() => 76 + Math.floor(Math.random() * 18));
      setBattery((b) => (b <= 88 ? 96 : b - 1));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="databox" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Vos données, en clair</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Toute votre flotte sur un seul écran.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg text-muted lg:pb-2">
              Position, état du verrou, autonomie, alertes : la data brute du
              boîtier devient une information utile, lisible en un coup d'œil sur
              l'application web et mobile.
            </p>
          </Reveal>
        </div>

        {/* Dashboard mockup */}
        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-800/70 shadow-glow backdrop-blur">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand-bright ring-1 ring-brand/40">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-bright" />
                  En ligne
                </span>
                <span className="font-display text-sm font-semibold tracking-wide">
                  Remorque FR-2847
                </span>
              </div>
              <div className="hidden items-center gap-4 text-xs text-muted-dim sm:flex">
                <span className="flex items-center gap-1.5">
                  <Signal className="h-3.5 w-3.5 text-brand-bright" /> 4G
                </span>
                <span>Maj. il y a 3 s</span>
              </div>
            </div>

            <div className="grid gap-px bg-white/[0.04] lg:grid-cols-3">
              {/* map */}
              <div className="relative col-span-2 min-h-[300px] bg-ink-900 p-5">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 600 320"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    id="route"
                    d="M40 280 C 160 240, 120 140, 260 150 S 460 90, 560 40"
                    stroke="#1f6bff"
                    strokeWidth="3"
                    strokeOpacity="0.55"
                    strokeLinecap="round"
                  />
                  <path
                    d="M40 280 C 160 240, 120 140, 260 150 S 460 90, 560 40"
                    stroke="#4d90ff"
                    strokeWidth="3"
                    strokeDasharray="2 12"
                    strokeLinecap="round"
                  />
                  <circle r="6" fill="#4d90ff">
                    <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#route" />
                    </animateMotion>
                  </circle>
                  <circle r="12" fill="#4d90ff" fillOpacity="0.25">
                    <animateMotion dur="9s" repeatCount="indefinite">
                      <mpath href="#route" />
                    </animateMotion>
                  </circle>
                </svg>
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-900/80 px-3 py-2 text-sm backdrop-blur">
                  <Navigation className="h-4 w-4 text-brand-bright" />
                  <span>A6 · Beaune → Lyon</span>
                </div>
                <div className="absolute right-5 top-5 rounded-lg border border-white/10 bg-ink-900/80 px-3 py-2 text-right backdrop-blur">
                  <p className="font-display text-2xl font-extrabold leading-none text-brand-bright">
                    {speed}
                    <span className="ml-1 text-xs font-medium text-muted">km/h</span>
                  </p>
                </div>
              </div>

              {/* metrics */}
              <div className="col-span-1 flex flex-col gap-px bg-white/[0.04]">
                <Metric
                  icon={Lock}
                  label="Verrou antivol"
                  value="Activé"
                  accent
                />
                <Metric
                  icon={BatteryFull}
                  label="Batterie boîtier"
                  value={`${battery} %`}
                />
                <Metric
                  icon={Thermometer}
                  label="Température cargo"
                  value="4,2 °C"
                />
                <div className="flex-1 bg-ink-800/80 p-5">
                  <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-dim">
                    <Bell className="h-3.5 w-3.5" /> Alertes
                  </p>
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-center gap-2 text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Zone autorisée respectée
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
                      Conduite nominale
                    </li>
                    <li className="flex items-center gap-2 text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      Pause conducteur conseillée
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between bg-ink-800/80 p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-brand-bright" />
        <span className="text-sm text-muted">{label}</span>
      </div>
      <span
        className={`font-display text-sm font-bold ${
          accent ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
