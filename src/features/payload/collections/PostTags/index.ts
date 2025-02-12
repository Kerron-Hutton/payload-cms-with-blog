import { colorField } from "@/features/payload/lib/fields/ColorSelector";
import { CollectionConfig } from "payload";

export const PostTags: CollectionConfig = {
  slug: "postTags",
  admin: {
    useAsTitle: "tag",
  },
  fields: [
    {
      type: "text",
      name: "tag",
    },
    colorField,
  ],
};
