import { checkRole } from "@/features/payload/lib/access/checkRole";
import { AppRole } from "@/features/payload/lib/constants";
import type { Access } from "payload";

export const editorOrContributor: Access = ({ req: { user } }) => checkRole([AppRole.Editor, AppRole.Contributor], user);
