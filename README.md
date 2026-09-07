# Cabinet infirmier Maeva & Sophie — site vitrine

Site statique Astro, one-page, pour un cabinet d'infirmières libérales à Pertuis (84120).
Construit à partir du handoff de design dans `~/Downloads/Site d'infirmière libérale.zip`.

## Lancer en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build   # génère dist/
npm run preview # sert dist/ localement
```

Site statique pur : déployable tel quel sur Netlify, Vercel ou OVH.

## À finaliser avec la cliente avant mise en ligne

- **Téléphone** : réel — 06 69 20 84 75 (Maeva) en numéro principal partout (header, hero,
  footer, JSON-LD, WhatsApp) ; 06 21 06 31 27 (Sophie) dans sa carte équipe (`#nous`).
- **Adresse** : réelle — 80 impasse Thomas Alva Edison, 84120 Pertuis (footer, JSON-LD,
  mentions légales, carte OpenStreetMap dans `#zone`).
- **Photos** : deux emplacements avec placeholder visuel (hero 4/5, "Qui sommes-nous" 1/1),
  marqués `<!-- TODO -->` dans `src/pages/index.astro`.
- **Mentions légales / RGPD** : contenu à compléter dans `src/pages/mentions-legales.astro`
  et `confidentialite.astro` (éditeur, hébergeur, etc.).
- **Domaine réel** : `astro.config.mjs` et les balises canonical/OG utilisent
  `https://www.cabinet-maeva-sophie.fr` à titre provisoire.

## Notes techniques

- Polices (Plus Jakarta Sans + Material Symbols Rounded) auto-hébergées dans `public/fonts/`.
- Les deux accordéons (soins, FAQ) et l'animation d'apparition au scroll sont gérés par
  `public/js/main.js`, en JS vanilla, sans dépendance.
- Le contenu reste visible sans JavaScript : le masquage lié à l'animation de scroll est
  scopé à `.js-reveal` (classe ajoutée par un petit script inline avant le rendu), donc un
  échec de chargement du script ne rend jamais la page invisible.
