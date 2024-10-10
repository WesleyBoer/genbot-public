import { UserRole } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isPro: boolean;
  isOAuth: boolean;
  email: string | null | undefined;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
