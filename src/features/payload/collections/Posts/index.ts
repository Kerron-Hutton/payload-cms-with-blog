import { editorOrContributor } from "@/features/payload/lib/access/editorOrContributor";
import { editorPublishOnly } from "@/features/payload/lib/access/editorPublishOnly";
import { customLexicalEditor } from "@/features/payload/lib/utils";
import { Code } from "@/features/payload/lib/blocks/Code/config";
import { editor } from "@/features/payload/lib/access/editor";
import { BlocksFeature } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";


export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    readVersions: editorOrContributor,
    create: editorOrContributor,
    update: editorPublishOnly,
    read: editorOrContributor,
    delete: editor,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [{
        label: "Content",
        fields: [
          {
            label: "Banner Image",
            relationTo: "media",
            name: "bannerImage",
            type: "upload",
          },
          {
            editor: customLexicalEditor(),
            type: "richText",
            name: "summary",
          }, {
            editor: customLexicalEditor([BlocksFeature({ blocks: [Code] })]),
            type: "richText",
            name: "content",
          }],
      }, {
        label: "SEO",
        fields: [],
      }],
    },
  ],
  versions: {
    maxPerDoc: 50,
    drafts: {
      autosave: {
        interval: 100,
      },
    },
  },
};
