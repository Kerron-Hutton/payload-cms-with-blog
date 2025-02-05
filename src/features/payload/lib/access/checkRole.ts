import { User } from "@/payload-types";

export function checkRole(roles: User["roles"], user: User | null) {
  if(!user) return false;

  return !!roles?.some(role => user.roles?.includes(role));
}