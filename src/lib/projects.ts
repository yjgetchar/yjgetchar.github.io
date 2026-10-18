import type { CollectionEntry } from 'astro:content';

/**
 * Private projects are shown as cards only: no link, no detail page.
 * (Their repos and screens are not public.)
 */
export const isLocked = (p: CollectionEntry<'projects'>) => p.data.status === 'Private';
