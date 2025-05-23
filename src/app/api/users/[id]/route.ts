import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { db } from "../../../../../db";
import { users } from "../../../../../db/schema";

export async function GET(
    request: NextRequest,  // eslint-disable-line @typescript-eslint/no-unused-vars
    { params }: { params: Promise<{ id: string }> },
) {
    const id = (await params).id;
    const user = await db.query.users.findFirst({
        where: eq(users.id, id)
    });
    return new Response(JSON.stringify(user), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
