import type { CollectionConfig } from "payload";

export const Chats: CollectionConfig = {
  slug: "chats",
  fields: [
    {
      name: "sender",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "receiver",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "read",
      type: "checkbox",
      defaultValue: false,
    },
  ],
  timestamps: true,
};
