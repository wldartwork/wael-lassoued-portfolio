import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'work'>;

/** Projets publiés, triés : `order` d'abord (croissant), puis date décroissante. */
export async function getWorks(): Promise<Work[]> {
  const all = await getCollection('work', ({ data }) => !data.draft);
  return all.sort((a, b) => {
    const ao = a.data.order ?? Number.POSITIVE_INFINITY;
    const bo = b.data.order ?? Number.POSITIVE_INFINITY;
    if (ao !== bo) return ao - bo;
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

export const year = (d: Date) => d.getUTCFullYear();

export const monthYear = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
