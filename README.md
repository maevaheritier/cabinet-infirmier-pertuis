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

- **Téléphone** : `06 12 34 56 78` est un placeholder, présent dans ~10 endroits
  (header, hero, footer, JSON-LD). Rechercher/remplacer `+33612345678` et `06 12 34 56 78`.
- **Adresse** : « 12 rue Exemple, 84120 Pertuis » — placeholder dans le footer et le JSON-LD
  (`src/layouts/BaseLayout.astro`).
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
