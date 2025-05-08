"use server";

import { auth } from "@/lib/auth";
import { getBaseUrl } from "@/lib/server-utils";
import axios from "axios";
import { and, eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { db } from "../../../../db";
import { likes } from "../../../../db/schema";

async function getHeaders() {
    return {
        headers: {
            Cookie: (await cookies()).toString()
        }
    };
}

export async function getLike(userId: string, postId: string) {
    const result = await db
        .select()
        .from(likes)
        .where(
            and(eq(likes.userId, userId), eq(likes.postId, postId))
        );

    return result.length > 0 ? result[0] : null;
}

export async function likePost(id: string) {
    const session = await auth();
    if (!session) return;

    const like = {
        userId: session.user.id,
        postId: id,
    };

    await db.insert(likes).values(like).returning();
}

export async function unlikePost(id: string) {
    const session = await auth();
    if (!session) return;

    const like = {
        userId: session.user.id,
        postId: id,
    };

    await db
        .delete(likes)
        .where(and(eq(likes.userId, like.userId), eq(likes.postId, like.postId)));
}

export async function getPosts() {
    const res = await axios.get(`${await getBaseUrl()}/api/posts/`, await getHeaders());
    return res.data;
}

export async function getUserPosts(userId: string) {
    const res = await axios.get(`${await getBaseUrl()}/api/posts?userid=${userId}`, await getHeaders());
    return res.data;
}

export async function getPost(id: string) {
    const post = await axios.get(`${await getBaseUrl()}/api/posts/${id}`, await getHeaders());
    return post.data;
}

export async function deletePost(id: string) {
    await axios.delete(`${await getBaseUrl()}/api/posts/${id}`, await getHeaders());
}