import { checkRole } from "@/features/payload/lib/access/checkRole";
import { AppRole } from "@/features/payload/lib/constants";
import { Post } from "@/payload-types";
import type { Access } from "payload";

export const editorPublishOnly: Access<Post> = ({ req: { user }, data }) => {
  if (!data) return false;

  if (data._status === "draft") {
    return checkRole([AppRole.Editor, AppRole.Contributor], user);
  }

  return checkRole([AppRole.Editor], user);
};