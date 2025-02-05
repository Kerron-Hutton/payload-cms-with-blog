import { checkRole } from "@/features/payload/lib/access/checkRole";
import { AppRole } from "@/features/payload/lib/constants";
import type { Access } from "payload";

export const admins: Access = ({ req: { user } }) => checkRole([AppRole.Admin], user);