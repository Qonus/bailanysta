import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Base() {
  const session = await auth();
  redirect(session ? '/home' : '/sign-in');
}