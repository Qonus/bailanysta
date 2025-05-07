import { auth } from "@/lib/auth";
import { count, desc, eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { db } from "../../../../db";
import { likes, posts, users } from "../../../../db/schema";

export async function GET(
    request: NextRequest
) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const userId = searchParams.get('userid');

        const data = await db
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
            .where(
                userId ? eq(posts.userId, userId) : undefined
            )
            .groupBy(posts.id, users.id)
            .orderBy(desc(posts.created_at));

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
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

export async function POST(request: Request) {
    const body = await request.json();

    try {
        const session = await auth();
        if (!session?.user?.id) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }

        const [newPost] = await db.insert(posts).values({
            userId: session.user.id,
            content: body.content
        }).returning()

        return new Response(JSON.stringify(newPost), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
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