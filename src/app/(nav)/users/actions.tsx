"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getUserByID(id: string) {
    // const { data } = await axios.get(`${getBaseUrl()}/api/users/${id}`);
    const user = await db.query.users.findFirst({
        where: eq(users.id, id)
    });
    return user;
}

export async function getUserByUsername(username: string) {
    // const { data } = await axios.get(`${getBaseUrl()}/api/users/${id}`);
    const user = await db.query.users.findFirst({
        where: eq(users.username, username)
    });
    return user;
}

export async function updateUsername(formData: FormData) {
    const session = await auth();
    if (!session) return;

    const newUsername = formData.get("username") as string;

    const data = await db.update(users)
        .set({ username: newUsername, })
        .where(eq(users.id, session.user.id));
    console.log(data);

    redirect("/home");
}