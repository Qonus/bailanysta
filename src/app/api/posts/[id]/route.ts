import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
    { params }: { params: Promise<{ id: string }> },
) {
    const id = (await params).id;
    const post = await db.query.posts.findFirst({
        where: eq(posts.id, id)
    });
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