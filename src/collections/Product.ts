import type { CollectionConfig } from "payload";

export const Product: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Product Name",
      type: "text",
      required: true,
    },
    {
      name: "priceIDR",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "stock",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "shop",
      label: "Shop",
      type: "relationship",
      relationTo: "shop",
      required: true,
    },
    {
      name: "isActive",
      label: "Product Status",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "productDetails",
      label: "Product Details",
      type: "group",
      fields: [
        {
          name: "weight",
          type: "number",
          admin: {
            description: "Weight in grams (optional)",
          },
        },
        {
          name: "dimensions",
          type: "text",
          admin: {
            description: "e.g., 10cm x 5cm x 2cm (optional)",
          },
        },
        {
          name: "material",
          type: "text",
          admin: {
            description: "Product material (optional)",
          },
        },
      ],
    },
  ],
  timestamps: true,
};
