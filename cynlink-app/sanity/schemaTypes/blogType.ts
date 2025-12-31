import { defineType, defineField, defineArrayMember } from "sanity";
import { EditIcon } from "@sanity/icons";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: EditIcon, 
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "blogCategory" }],
    }),

    defineField({
      name: "mainImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "blogcategories",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "blogCategory"}})
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    
    defineField({
        name: "isLatest",
        title: "Latest Blog",
        type: "boolean",
        description: "Toggle to Latest on or off",
        initialValue: true,
    }),

    defineField({
        name: "body",
        type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      isLatest: "isLatest",
    },
    prepare(selection) {
        const { author, isLatest } = selection;
        return {
            ...selection,
            subtitle: author && `${isLatest ? "isLatest | " : ""} By ${author}`,
        };
    },
  },
});
