"use client";

import { cn } from "@/lib/utils";
import { IPost } from "@/types/tables";
import { useRouter } from "next/navigation";
import { Icons } from "../icons/icons";
import Username from "../users/username";
import PostLike from "./post-like";

export default function PostCard(
    { className, post, initialIsLiked }: { className?: string, post: IPost, initialIsLiked: boolean }
) {
    const router = useRouter();

    return (
        <div className={cn("w-full h-fit hover-block", className)}>
            <div onClick={() => { router.push(`/posts/${post.id}`) }} className="cursor-pointer block-border-t p-4 flex">
                <Icons.profile user={post.user || undefined} size={40} />
                <div className="px-2 flex flex-col gap-2">
                    <div className="flex items-center gap-1 text-md">
                        <p className="">{post.user?.name}</p>
                        <Username username={post.user?.username || undefined} />
                    </div>
                    <h2 className="text-lg">{post.content}</h2>
                </div>
            </div>
            <div className="flex gap-3 px-5 py-2">
                <PostLike initialIsLiked={initialIsLiked} post={post} />
            </div>
        </div>
    );
}