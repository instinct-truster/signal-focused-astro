import { z } from "astro/zod";

export const postSchema = z.object({
  title: z.string(),
  date: z.date(),
  draft: z.boolean(),
  description: z.string(),
  image: z.string(),
  imageBig: z.string(),
  categories: z.array(z.string()),
  authors: z.array(z.string()),
  avatar: z.string(),
});

export type PostModel = z.infer<typeof postSchema>;
