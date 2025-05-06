import { Icons } from "@/components/icons/icons";
import PostLike from "@/components/posts/post-like";
import TopBar from "@/components/top-bar";
import Username from "@/components/users/username";
import { auth } from "@/lib/auth";
import { formatRelativeTime } from "@/lib/utils";
import { Trash } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { deletePost, getLike, getPost } from "../actions";

export default async function PostPage(
    { params,
    }: {
        params: Promise<{ id: string }>
    }
) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) notFound();

    const session = await auth();
    if (!session) redirect("/sign-in");

    const t = await getTranslations();
    const locale = await getLocale();

    const isLiked = (await getLike(session.user.id, post.id)) !== null;

    const del = async () => {
        "use server";
        await deletePost(id);
        redirect('/');
    }

    return (
        <>
            <TopBar title={t("Sidebar.post")} />
            <div className="page flex flex-col justify-center">
                <div className="flex pt-5">
                    <Icons.profile className="w-fit" user={post.user || undefined} size={60} />
                    <div className="px-4 flex flex-col gap-5 w-full">
                        <div className="flex justify-between w-full">
                            <div className="flex-wrap">
                                <span className="text-xl font-bold pr-3">{post.user?.name}</span>
                                <Username username={post.user?.username || undefined} className="text-xl pr-3" />
                                <span>{formatRelativeTime(post.created_at, locale)}</span>
                            </div>
                            <button className="button ghost p-2" onClick={del}>
                                <Trash className="stroke-destructive" />
                            </button>
                        </div>
                        <h2 className="text-xl whitespace-pre-line">{post.content}</h2>
                    </div>
                </div>
                <div className="flex gap-3 px-5 py-2">
                    <PostLike initialIsLiked={isLiked} post={post} />
                </div>
            </div>
        </>
    );
}