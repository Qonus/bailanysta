import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest   // eslint-disable-line @typescript-eslint/no-unused-vars
) {
    const data = [
        {
            id: '0eeb3d20-5dc0-4666-9249-eb88dbb712cd',
            userId: '7804cd82-0e7f-4c8c-96d3-0332f4695175',
            content: 'I just deleted my whole database, a I cooked?',
            created_at: '2025-04-27T03:14:11.487Z'
        }
    ];
    // const searchParams = request.nextUrl.searchParams;
    // const userId = searchParams.get('userid');

    // const data = await db.query.posts.findMany({
    //     orderBy: [desc(posts.created_at)],
    //     where: userId ? eq(posts.userId, userId as string) : undefined,
    // });
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