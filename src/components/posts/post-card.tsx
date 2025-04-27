"use client";

import { cn, formatRelativeTime } from "@/lib/utils";
import { IPost } from "@/types/tables";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Icons } from "../icons/icons";
import Username from "../users/username";
import PostLike from "./post-like";

export default function PostCard(
    { className, post, initialIsLiked }: { className?: string, post: IPost, initialIsLiked: boolean }
) {
    const router = useRouter();
    const locale = useLocale()

    return (
        <div className={cn("w-full h-fit hover-block", className)}>
            <div onClick={() => { router.push(`/posts/${post.id}`) }} className="cursor-pointer block-border-t p-4 flex">
                <Icons.profile user={post.user || undefined} size={40} />
                <div className="px-2 flex flex-col gap-2">
                    <div className="">
                        <span className="font-bold inline-block pr-2">{post.user?.name}</span>
                        <Username username={post.user?.username || undefined} className="inline-block pr-2" />
                        <span className="inline-block">{formatRelativeTime(post.created_at, locale)}</span>
                    </div>
                    <h2 className="text-lg whitespace-pre-line">{post.content}</h2>
                </div>
            </div>
            <div className="flex gap-3 px-5 py-2">
                <PostLike initialIsLiked={initialIsLiked} post={post} />
            </div>
        </div>
    );
}