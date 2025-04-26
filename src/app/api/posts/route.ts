import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userid');

    const data = await db.query.posts.findMany({
        orderBy: [desc(posts.created_at)],
        where: userId ? eq(posts.userId, userId as string) : undefined,
    });
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newPost = (await db.insert(posts).values(body).returning())[0]

        return new Response(JSON.stringify(newPost), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    catch {
        return new Response();
    }
}