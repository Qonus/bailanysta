"use server";

import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { db } from "../../../../db";
import { likes, users } from "../../../../db/schema";

export async function getUserLikes(userId: string) {
    const results = await db
        .select()
        .from(likes)
        .where(eq(likes.userId, userId))
        .execute();

    return results.map((like) => like.postId);
}

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

export async function updateUsername(username: string) {
    const session = await auth();
    if (!session) return;

    await db.update(users)
        .set({ username: username, })
        .where(eq(users.id, session.user.id));

    redirect(`/users/${username}`);
}