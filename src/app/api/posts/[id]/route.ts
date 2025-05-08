import { count, eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { db } from "../../../../../db";
import { likes, posts, users } from "../../../../../db/schema";

export async function GET(
    request: NextRequest,  // eslint-disable-line @typescript-eslint/no-unused-vars
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    try {
        const [post] = await db
            .select({
                id: posts.id,
                repostId: posts.repostId,
                content: posts.content,
                created_at: posts.created_at,
                updated_at: posts.updated_at,
                user: {
                    id: users.id,
                    name: users.name,
                    image: users.image,
                    username: users.username
                },
                likes: count(likes.id)
            })
            .from(posts)
            .leftJoin(users, eq(posts.userId, users.id))
            .leftJoin(likes, eq(posts.id, likes.postId))
            .where(eq(posts.id, id))
            .groupBy(posts.id, users.id);

        if (!post) return new Response(JSON.stringify({ error: "Not Found" }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });

        return new Response(JSON.stringify(post), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (e) {
        console.log(e);
        return new Response(JSON.stringify({
            error: "Internal server error",
            details: e instanceof Error ? e.message : String(e)
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }

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
}