import { defineCollection, z, type SchemaContext } from "astro:content";
import { glob, file } from "astro/loaders";

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/project" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      slug: z.string(),
      created: z.string(),
      createdDate: z.string(),
      tags: z.array(z.string()),
      techs: z.array(z.string()).optional(),
    }),
});

export const collections = {
  project: projectCollection,
};
