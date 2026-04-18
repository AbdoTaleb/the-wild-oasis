"use server";
import { signIn, signOut } from "@/app/_lib/auth";

export async function signInAction() {
  // Implementation for signing in
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  // Implementation for signing out
  await signOut({ redirectTo: "/" });
}
