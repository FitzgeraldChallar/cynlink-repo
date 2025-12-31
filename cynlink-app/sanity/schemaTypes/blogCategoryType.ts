import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const blogCategoryType = defineType({
  name: "blogCategory",
  title: "Blog Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "string",
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
        name: "description",
        type: "text",
    })
  ],
});
