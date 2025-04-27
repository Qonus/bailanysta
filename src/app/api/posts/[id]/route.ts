import { db } from "@/lib/db";
import { likes, posts, users } from "@/lib/db/schema";
import { count, eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest,  // eslint-disable-line @typescript-eslint/no-unused-vars
    { params }: { params: Promise<{ id: string }> },
) {
    const id = (await params).id;
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
        .groupBy(posts.id, users.id)
        .execute();

    const result = data[0];

    const post = {
        ...result.post,
        user: result.user,
        likes: Number(result.likesCount),
    };

    return new Response(JSON.stringify(post), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

// export async function DELETE(
//     request: NextRequest,
//     { params }: { params: Promise<{ id: string }> },
// ) {
//     const id = (await params).id;
//     // e.g. Delete user with ID `id` in DB
//     return new Response(null, { status: 204 });
// }