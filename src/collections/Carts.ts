import type { CollectionConfig } from "payload";

export const Carts: CollectionConfig = {
  slug: "carts",
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
          required: true,
        },
        {
          name: "quantity",
          type: "number",
          required: true,
          min: 1,
        },
      ],
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Active", value: "active" },
        { label: "Checked Out", value: "checked_out" },
      ],
      defaultValue: "active",
    },
  ],
  timestamps: true,
};
