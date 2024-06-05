import { defineCollection } from "astro:content";
import { postSchema } from "../utils/postSchema";

const postsCollection = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  posts: postsCollection,
};
