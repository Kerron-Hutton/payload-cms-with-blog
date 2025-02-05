/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FeatureProviderServer,
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export function customLexicalEditor(features?: FeatureProviderServer<any, any, any>[]) {
  return lexicalEditor({
    features: ({ defaultFeatures }) => {
      return [
        ...defaultFeatures,
        HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
        FixedToolbarFeature(),
        ...(features ?? []),
      ];
    },
  });
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}