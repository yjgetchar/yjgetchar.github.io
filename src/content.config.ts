import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Used by the filter on /projects */
    category: z.enum(['AI', 'Game', 'Automation', 'Web', 'Tool']),
    tags: z.array(z.string()).default([]),
    /** Short emoji/icon shown next to the title */
    icon: z.string().default('✨'),
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
