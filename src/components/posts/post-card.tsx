"use client";

import { cn } from "@/lib/utils";
import { IPostUser } from "@/types/tables";
import Link from "next/link";
import { Icons } from "../icons/icons";
import Username from "../users/username";

export default function PostCard(
    { className, post }: { className?: string, post: IPostUser }
) {
    return (
        <Link href={`/posts/${post.id}`} className={cn("w-full h-fit", className)}>
            <div className="hover-block block-border-t p-4 flex">
                <div>
                    <Icons.profile user={post.user || undefined} size={40} />
                </div>
                <div className="px-2 flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-md">
                        <p className="">{post.user?.name}</p>
                        <Username username={post.user?.username || undefined} />
                    </div>
                    <h2 className="text-lg">{post.content}</h2>
                </div>
            </div>
        </Link>
    );
}