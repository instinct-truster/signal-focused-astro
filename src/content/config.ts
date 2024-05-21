import { z, defineCollection } from "astro:content";
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean(),
    description: z.string(),
    image: z.string(),
    imageBig: z.string(),
    categories: z.array(z.string()),
    authors: z.array(z.string()),
    avatar: z.string(),
  }),
});
export const collections = {
  posts: postsCollection,
};
