import type { CollectionConfig } from "payload";

export const Transactions: CollectionConfig = {
  slug: "transactions",
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
        {
          name: "priceAtPurchase",
          type: "number",
          required: true,
          min: 0,
        },
        {
          name: "shop",
          type: "relationship",
          relationTo: "shop",
          required: true,
        },
      ],
    },
    {
      name: "total",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "status",
      type: "select",
      options: ["pending", "paid", "shipped", "completed", "cancelled"],
      defaultValue: "pending",
    },
    {
      name: "paymentMethod",
      type: "select",
      options: [
        { label: "Bank Transfer", value: "bank_transfer" },
        { label: "E-Wallet", value: "e_wallet" },
        { label: "QRIS", value: "qris" },
        { label: "Cash on Delivery", value: "cod" },
      ],
    },
    {
      name: "shippingAddress",
      type: "textarea",
      required: true,
    },
    {
      name: "notes",
      type: "textarea",
    },
  ],
  timestamps: true,
};
