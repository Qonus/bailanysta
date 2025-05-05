"use server";

import { auth } from "@/lib/auth";
import { and, count, desc, eq } from "drizzle-orm";
import { db } from "../../../../db";
import { likes, posts, users } from "../../../../db/schema";

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
    // const { data } = await axios.get(`${getBaseUrl()}/api/posts/`);

    const data = await db
        .select({
            post: posts,
            user: users,
            likesCount: count(likes.id)
        })
        .from(posts)
        .leftJoin(users, eq(posts.userId, users.id))
        .leftJoin(likes, eq(posts.id, likes.postId))
        .groupBy(posts.id, users.id)
        .orderBy(desc(posts.created_at));

    return data.map((item) => ({
        ...item.post,
        user: item.user,
        likes: Number(item.likesCount),
    }));
}

export async function getUserPosts(userId: string) {
    // const { data } = await axios.get(`${getBaseUrl()}/api/posts?userid=${userId}`);

    const data = await db
        .select({
            post: posts,
            user: users,
            likesCount: count(likes.id)
        })
        .from(posts)
        .leftJoin(users, eq(posts.userId, users.id))
        .leftJoin(likes, eq(posts.id, likes.postId))
        .where(eq(posts.userId, userId))
        .groupBy(posts.id, users.id)
        .orderBy(desc(posts.created_at));

    return data.map((item) => ({
        ...item.post,
        user: item.user,
        likes: Number(item.likesCount),
    }));
}

export async function getPost(id: string) {
    // const { data } = await axios.get(`${getBaseUrl()}/api/posts/${id}`);
    // const user_response = await fetch(`${getBaseUrl()}/api/users/${post.userId}`, { cache: "no-store" })

    // const post = await db.query.posts.findFirst({
    //     where: eq(posts.id, id)
    // });

    const data = await db
        .select({
            post: posts,
            user: users,
            likesCount: count(likes.id)
        })
        .from(posts)
        .leftJoin(users, eq(posts.userId, users.id))
        .leftJoin(likes, eq(posts.id, likes.postId))
        .where(eq(posts.id, id))
        .groupBy(posts.id, users.id);

    const post = data[0];

    return {
        ...post.post,
        user: post.user,
        likes: Number(post.likesCount),
    };
}

export async function createPost(content: string) {
    const session = await auth();
    if (!session) return;

    const post = {
        userId: session.user.id,
        content: content,
    };

    const newPost = (await db.insert(posts).values(post).returning())[0]
    return newPost;

    // const { data: newPost } = await axios.post(`${getBaseUrl()}/api/posts/`, post, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });

    // toast.success(
    //     "Posted Successfully! Your Post:",
    //     {
    //         description: (
    //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4" >
    //                 <code className="text-white"> {JSON.stringify(post, null, 2)} </code>
    //             </pre>
    //         ),
    //         action: {
    //             label: "Undo",
    //             onClick: () => console.log("Undo")
    //         }
    //     }
    // );
}
