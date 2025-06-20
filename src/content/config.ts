import { defineCollection, z } from 'astro:content';
import type Journey from '../pages/journey.astro';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};

// export const collection = {
// 	journey: defineCollection({
// 		type: 'content',
// 		schema: z.object({
// 			title: z.string(),
// 			description: z.string(),
// 			publishDate: z.coerce.date(),
// 			tags: z.array(z.string()),
// 			img: z.string(),
// 			img_alt: z.string().optional(),
// 		}),
// 	}),
// };
