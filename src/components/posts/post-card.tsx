"use client";

import { cn } from "@/lib/utils";
import { IPost } from "@/types/tables";
import Link from "next/link";

export default function PostCard(
    { className, post }: { className?: string, post: IPost }
) {
    return (
        <Link href={`/posts/${post.id}`} className={cn("w-full h-fit", className)}>
            <div className="hover-block block-border-t p-4">
                <p className="text-lg">
                    {post.content}
                </p>
            </div>
        </Link>
    );
}