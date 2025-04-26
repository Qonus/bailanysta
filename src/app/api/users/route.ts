import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest
) {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userid');

    const data = await db.query.users.findMany({
        where: userId ? eq(posts.userId, userId as string) : undefined,
    });
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}