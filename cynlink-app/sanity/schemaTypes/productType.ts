import { defineType, defineField } from "sanity";
import { PackageIcon } from "@sanity/icons";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,

  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" }}],
    }),

    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
    }),

    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
        name: "status",
        title: "Product Status",
        type: "string",
        options: {
            list: [
                { title: "New", value: "new" },
                { title: "Hot", value: "hot" },
                { title: "Sale", value: "sale" },
            ]
        }
    }),

    defineField({
        name: "variant",
        title: "Product Type",
        type: "string",
        options: {
            list: [
                { title: "Cosmetics", value: "cosmetics" },
                { title: "Appliances", value: "appliances" },
                { title: "Mobile Phones", value: "mobile phones" },
                { title: "Refrigerators", value: "refrigerators" },
                { title: "Computers & Laptops", value: "commputers & laptops" },
                { title: "Others", value: "others" }, 
            ]
        }
    }),

    defineField({
        name: "isFeatured",
        title: "Featured Product",
        type: "boolean",
        description: "Toggle to Featured on or off",
        initialValue: false,
    }),
  ],

  preview: {
   select: {
    title: 'name',
    subtitle: 'price',
    media: 'images', // entire array
   },
   prepare({ title, subtitle, media }) {
    const firstImage = Array.isArray(media) && media.length > 0 ? media[0] : undefined
    return {
      title,
      subtitle: subtitle ? `$${subtitle}` : undefined,
      media: firstImage,
    }
  },
}

});
