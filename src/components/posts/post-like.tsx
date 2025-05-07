"use client";
import { likePost, unlikePost } from "@/app/(nav)/posts/actions";
import { cn } from "@/lib/utils";
import { IPost } from "@/types/tables";
import { useState } from "react";
import { Icons } from "../icons/icons";
import { Button } from "../ui/button";

export default function PostLike({
    initialIsLiked = false,
    post,
    className
}: {
    initialIsLiked?: boolean,
    post?: IPost,
    className?: string
}) {
    const [isLiked, setIsLiked] = useState(initialIsLiked);
    if (!post) return (<h1>Error</h1>)

    const handleLike = async () => {
        setIsLiked(!isLiked);
        if (!isLiked) {
            await likePost(post.id);
        } else {
            await unlikePost(post.id);
        }
    };

    return (
        <Button
            onClick={handleLike}
            variant="empty" className={cn("hover:bg-primary/20 cursor-pointer rounded-full", className)}>
            <Icons.like className={cn(
                "stroke-primary size-5",
                isLiked && "fill-primary"
            )} />
            <p className="text-primary text-lg">
                {post.likes + (isLiked ? 1 : 0) - (initialIsLiked ? 1 : 0)}
            </p>
        </Button>
    );
}