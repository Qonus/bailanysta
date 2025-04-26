import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(_request: NextRequest) {
    // const searchParams = _request.nextUrl.searchParams;
    // const query = searchParams.get('query');

    const data = await db.query.posts.findMany(
        {
            orderBy: [desc(posts.created_at)],
        }
    );
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