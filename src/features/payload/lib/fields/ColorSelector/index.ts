import { TextField } from "payload";

export const colorField: TextField = {
  name: "color",
  type: "text",
  required: true,
  admin: {
    components: {
      Field: "@/features/payload/lib/fields/ColorSelector/component/Field",
      Cell: "@/features/payload/lib/fields/ColorSelector/component/Cell",
    },
  },
  validate: (value, args) => {
    const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

    console.log({ args });

    return regex.test(value ?? "") || `${value} is not a valid hex color`;
  },
};
