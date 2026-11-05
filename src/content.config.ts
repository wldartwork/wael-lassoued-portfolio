import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Collection « work » : un fichier .md par projet dans src/content/work/.

  ---
  title: "Nom du projet"
  client: "Nom du client"
  service: "Branding"          # Branding, Web design, Development...
  date: 2025-05-16             # AAAA-MM-JJ, sert au tri (plus récent en premier)
  cover: "./vibe-art/cover.jpg"      # image de couverture (fichier local ou URL)
  images:                      # images de la page projet, dans l'ordre
    - "./vibe-art/01.jpg"
    - "./vibe-art/02.jpg"
  draft: false                 # true = projet masqué du site
  order: 1                     # optionnel : force la position dans la grille
  ---
  Texte du résumé en Markdown.
*/
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      service: z.string(),
      date: z.coerce.date(),
      cover: z.union([image(), z.string().url()]),
      images: z.array(z.union([image(), z.string().url()])).default([]),
      draft: z.boolean().default(false),
      order: z.number().optional(),
    }),
});

export const collections = { work };
