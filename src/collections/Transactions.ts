import type { CollectionConfig } from "payload";

export const Transactions: CollectionConfig = {
  slug: "transactions",
  fields: [
    {
      name: "product",
      type: "relationship",
      required: true,
      relationTo: "products",
    },
    {
      name: "buyer",
      type: "relationship",
      required: true,
      relationTo: "users",
      filterOptions: {
        role: {
          equals: "customer",
        },
      },
    },
  ],
};
