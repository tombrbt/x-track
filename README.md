# X-TRACK — Site vitrine (Next.js)

Site vitrine one-page pour une solution de boîtier GPS antivol temps réel
destinée aux flottes de poids lourds.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS 3**
- **lucide-react** (icônes)
- Polices : **Saira** (titres) + **Manrope** (texte), chargées via Google Fonts

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur http://localhost:3000

Pour une version de production :

```bash
npm run build
npm start
```

## Sections (one-page)

1. **Hero** — slogan, CTA, vitrine du boîtier et compteur animé (€ perdus / remorques volées)
2. **Points clés** — sécurité, tracking, contrôle à distance, détection d'accident
3. **Fonctionnalités** — détail des capacités du boîtier
4. **DataBox** — aperçu animé du tableau de bord temps réel
5. **Pourquoi nous** — comparatif et différenciateurs
6. **Tarifs** — 3 offres (Essentiel / Pro / Flotte)
7. **FAQ** — accordéon
   - \+ bandeau d'appel à l'action et footer

## Personnalisation

- **Contenu** : tout le texte des sections Fonctionnalités, Tarifs, FAQ et
  comparatif est centralisé dans `src/lib/content.ts`.
- **Couleurs** : palette définie dans `tailwind.config.ts` (`brand`, `ink`) et
  les variables CSS de `src/app/globals.css`.
- **Chiffres du hero** : à ajuster dans `src/components/Hero.tsx`
  (compteurs `Counter`). Les valeurs actuelles sont illustratives.
- **Image de fond du hero** : le hero utilise un visuel CSS (halos + flux
  animés). Pour intégrer votre photo de camion, ajoutez-la dans `public/` et
  placez-la en arrière-plan de la section `#top` dans `Hero.tsx`.
- **Coordonnées** : email/téléphone à mettre à jour dans `src/components/CTA.tsx`.

> Les tarifs, statistiques et coordonnées sont des valeurs d'exemple à adapter à
> votre offre réelle.
