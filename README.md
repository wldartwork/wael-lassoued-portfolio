# Wael Lassoued · Portfolio

Site statique construit avec [Astro](https://astro.build), déployé automatiquement sur GitHub Pages à chaque modification de la branche `main`, servi sur **wael-lassoued.com**.

## Ajouter un projet

1. Créer un dossier `src/content/work/<slug>/` et y déposer les images (`cover.jpg`, `01.jpg`, `02.jpg`...).
2. Créer le fichier `src/content/work/<slug>.md` :

```md
---
title: "Nom du projet"
client: "Nom du client"
service: "Branding"          # Branding, Web design, Development...
date: 2025-05-16             # AAAA-MM-JJ, sert au tri (plus récent en premier)
cover: "./<slug>/cover.jpg"
images:
  - "./<slug>/01.jpg"
  - "./<slug>/02.jpg"
draft: false                 # true = projet masqué du site
# order: 1                   # optionnel : force la position dans la grille
---

Résumé du projet, en Markdown. Plusieurs paragraphes possibles.
```

3. Commit + push sur `main` : le site se reconstruit et se publie tout seul (2 à 3 minutes).

Les images locales sont automatiquement converties en WebP et servies en plusieurs tailles. Une URL d'image distante fonctionne aussi (`cover: "https://..."`), mais sans optimisation.

## Modifier les infos globales

`src/site.ts` : nom, mail, Instagram, ville, liens de navigation.
`src/pages/about.astro` : texte de la page About.

## Réglages du design

En tête de `src/styles/global.css` :

```css
--wl-cols: 2;          /* colonnes de la grille d'accueil */
--wl-ratio: 1 / 1;     /* format des vignettes d'accueil (1/1, 4/5, 3/2...) */
--wl-gap: 40px 32px;   /* espace entre les vignettes */
--wl-top: 110px;       /* hauteur à laquelle la colonne de texte se fixe */
--wl-split: 1fr 1fr;   /* largeur colonnes page projet : images / texte */
--wl-label: 12px;      /* taille des textes */
--wl-muted: #8a8a8a;   /* gris des infos secondaires */
```

## En local

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # génère le site dans dist/
```

## Domaine

Le fichier `public/CNAME` contient `wael-lassoued.com`. Chez OVH, la zone DNS doit pointer vers GitHub Pages :

| Type  | Sous-domaine | Cible                       |
| ----- | ------------ | --------------------------- |
| A     | (vide)       | 185.199.108.153             |
| A     | (vide)       | 185.199.109.153             |
| A     | (vide)       | 185.199.110.153             |
| A     | (vide)       | 185.199.111.153             |
| CNAME | www          | `<compte-github>.github.io.` |
