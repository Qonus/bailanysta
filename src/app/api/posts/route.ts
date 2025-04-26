import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";

// export async function GET(request: NextRequest) {
//     const searchParams = request.nextUrl.searchParams;
//     const query = searchParams.get('query');

//     await db.query.posts.findFirst({
//     })

//     return new Response(JSON.stringify(users), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' }
//     });
// }

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newPost = (await db.insert(posts).values(body).returning())[0]

        return new Response(JSON.stringify(newPost), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    catch (e) {
        return new Response();
    }
}