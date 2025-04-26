"use client";

import { IPost } from "@/types/tables";
import Link from "next/link";

export default function PostCard(
    { post }: { post: IPost }
) {
    return (
        <Link href={`/posts/${post.id}`} className="w-full h-fit">
            <div className="main-block">
                <p className="text-lg">
                    {post.content}
                </p>
            </div>
        </Link>
    );
}