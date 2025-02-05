import { customLexicalEditor } from "@/features/payload/lib/utils";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {},
  fields: [
    {
      name: "alt",
      type: "text",
    },
    {
      editor: customLexicalEditor(),
      type: "richText",
      name: "caption",
    },
  ],
  upload: {
    adminThumbnail: "thumbnail",
    staticDir: "public/media",
    focalPoint: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
      },
      {
        name: "small",
        width: 600,
      },
      {
        name: "medium",
        width: 900,
      },
      {
        name: "large",
        width: 1400,
      },
      {
        name: "xlarge",
        width: 1920,
      },
      {
        name: "og",
        width: 1200,
        height: 630,
        crop: "center",
      },
    ],
  },
};
