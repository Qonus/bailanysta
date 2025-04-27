"use client";

import { cn } from "@/lib/utils";
import { IPostUser } from "@/types/tables";
import Link from "next/link";
import { Icons } from "../icons/icons";

export default function PostCard(
    { className, post }: { className?: string, post: IPostUser }
) {
    return (
        <Link href={`/posts/${post.id}`} className={cn("w-full h-fit", className)}>
            <div className="hover-block block-border-t p-4 flex">
                <div>
                    <Icons.profile className="w-fit" image={post.user?.image || undefined} size={40} />
                </div>
                <div className="px-2 flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-md">
                        <p className="">{post.user?.name}</p>
                        <p className="text-current/50">@{post.user?.username}</p>
                    </div>
                    <h2 className="text-lg">{post.content}</h2>
                </div>
            </div>
        </Link>
    );
}