import { defineType, defineField } from "sanity";
import { HomeIcon } from '@sanity/icons';

export const addressType = defineType({
  name: "address",
  title: "Address",
  type: "document", 
  icon: HomeIcon,
  fields: [
    defineField({ 
        name: "name", 
        title: "User Full Name", 
        type: "string",
        description: "A friendly name for this address (e.g Fitzgerald Challar)",
        validation: (Rule) => Rule.required().max(50),
    }),
    defineField({ 
        name: "phone", 
        title: "Phone Number", 
        type: "string",
    }),
    defineField({ 
        name: "email", 
        title: "User Email", 
        type: "email",
    }),
    defineField({ 
        name: "street", 
        title: "Street Address", 
        type: "string",
        description: "The street address including apartment/unit number",
        validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({ 
        name: "city", 
        title: "City", 
        type: "string",
    }),
    defineField({ 
        name: "country", 
        title: "Country", 
        type: "string", 
    }),
    defineField({
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
        title: "name",
        subtitle: "address",
        city: "city",
        state: "state",
        isDefault: "default",
    },
    prepare({title, subtitle, city, state, isDefault}) {
        return {
            title: `${title} ${isDefault ? "(Default)" : ""}`,
            subtitle: `${subtitle}, ${city}, ${state}`,
        };
    },
  },
});
