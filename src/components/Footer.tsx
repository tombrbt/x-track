import { ShieldCheck } from "lucide-react";

const cols = [
  {
    title: "Solution",
    links: ["Points clés", "Fonctionnalités", "Données", "Tarifs"],
  },
  {
    title: "Entreprise",
    links: ["À propos", "Nos engagements", "Carrières", "Presse"],
  },
  {
    title: "Ressources",
    links: ["FAQ", "Documentation", "Support", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink-900">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/15 ring-1 ring-brand/50">
                <ShieldCheck className="h-5 w-5 text-brand-bright" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-wide">
                X-<span className="text-brand-bright">TRACK</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Sécurité. Contrôle. Tranquillité. Le boîtier connecté qui protège
              les flottes de poids lourds en temps réel.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-dim">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-6 text-xs text-muted-dim sm:flex-row">
          <p>© {new Date().getFullYear()} X-TRACK. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">RGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
