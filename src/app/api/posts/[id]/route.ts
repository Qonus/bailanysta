import { count, eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { db } from "../../../../../db";
import { likes, posts, users } from "../../../../../db/schema";

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

export async function DELETE(
    request: NextRequest,  // eslint-disable-line @typescript-eslint/no-unused-vars
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    try {
        const [post] = await db.delete(posts).where(eq(posts.id, id)).returning();

        return new Response(JSON.stringify(post), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        })
    } catch (e) {
        console.log(e);
        return new Response(JSON.stringify({
            error: "Internal server error",
            details: e instanceof Error ? e.message : String(e)
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    return new Response(null, { status: 204 });
}