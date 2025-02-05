import { admins } from "@/features/payload/lib/access/admins";
import { AppRole } from "@/features/payload/lib/constants";
import { capitalize } from "@/features/payload/lib/utils";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: admins,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      saveToJWT: true,
      options: [
        {
          label: capitalize(AppRole.Admin),
          value: AppRole.Admin,
        },
        {
          label: capitalize(AppRole.Editor),
          value: AppRole.Editor,
        },
        {
          label: capitalize(AppRole.Contributor),
          value: AppRole.Contributor,
        },
      ],
    },
  ],
};
