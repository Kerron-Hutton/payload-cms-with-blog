"use client";

import { FieldLabel, useField } from "@payloadcms/ui";
import { TextFieldClientComponent } from "payload";
import { PostTag } from "@/components/ui/PostTag";
import { cn } from "@/lib/utils";

const defaultColors = ["#6941C6", "#3538CD", "#C11574", "#10B981", "#FACC15"];

const Field: TextFieldClientComponent = ({ field, path }) => {
  const { value, setValue } = useField<string>({ path });
  const { value: tag } = useField<string>({ path: "tag" });

  return (
    <div className={"pt-[5px]"}>
      <FieldLabel label={field.label ?? field.name} htmlFor={path} required={field.required} />

      <ul className={"flex list-none flex-wrap gap-2 pb-[5px] pl-0"}>
        {defaultColors.map((color) => (
          <li key={color}>
            <button
              className={cn("size-10 cursor-pointer rounded-full border-none ring-gray-800 dark:ring-white", {
                "ring-2 shadow-md": color === value,
              })}
              style={{ backgroundColor: color }}
              onClick={() => setValue(color)}
              aria-label={color}
              type="button"
              key={color}
            />
          </li>
        ))}
      </ul>

      {tag && value && (
        <>
          <FieldLabel label={"Preview"} htmlFor={"Tag Preview"} />
          <PostTag tag={tag} hexColor={value} />
        </>
      )}
    </div>
  );
};

export default Field;
