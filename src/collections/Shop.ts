import type { CollectionConfig } from "payload";

export const Shop: CollectionConfig = {
  slug: "shop",
  admin: {
    useAsTitle: "shopName",
  },
  fields: [
    {
      name: "shopName",
      label: "Shop Name",
      type: "text",
      required: true,
    },
    {
      name: "owner",
      label: "Owner",
      type: "relationship",
      relationTo: "users",
      required: true,
      filterOptions: {
        role: {
          equals: "seller",
        },
      },
    },
    {
      name: "shopEmail",
      label: "Shop Email",
      type: "email",
      required: true,
    },
    {
      name: "shopPhone",
      label: "Shop Phone",
      type: "text",
      validate: (val: any) => {
        if (val && !/^\d+$/.test(val)) {
          return "Phone numbers can only contain numbers.";
        }
        if (val && (val.length < 10 || val.length > 15)) {
          return "The length of the phone number must be between 10 and 15 digits.";
        }
        return true;
      },
      required: true,
    },
    {
      name: "address",
      label: "Address",
      type: "textarea",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      required: true,
    },
    {
      name: "shopLogo",
      label: "Shop Logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "isActive",
      label: "Shop Status",
      type: "checkbox",
      defaultValue: true,
    },
  ],
  timestamps: true,
};
