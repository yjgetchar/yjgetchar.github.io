import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      /** Used by the filter on /projects */
      category: z.enum(['AI', 'Game', 'Automation', 'Web', 'Tool']),
      tags: z.array(z.string()).default([]),
      /** Cover image (relative path) — varied aspect ratios make the masonry feel like Pinterest */
      cover: image(),
      /** Pastel tint used behind the cover / highlight tiles */
      tint: z.enum(['blue', 'mint', 'peach', 'lavender', 'butter', 'rose']).default('blue'),
      /** "owner/name" — enables live star count + GitHub link (public repos only) */
      repo: z.string().optional(),
      demo: z.url().optional(),
      status: z.enum(['Live', 'Released', 'In Progress', 'Archived', 'Private']).default('In Progress'),
      featured: z.boolean().default(false),
      /** Lower comes first */
      order: z.number().default(100),
      date: z.coerce.date(),
      highlights: z.array(z.string()).default([]),
    }),
});

export const collections = { projects };
