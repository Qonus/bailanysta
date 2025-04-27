import { Icons } from "@/components/icons/icons";
import TopBar from "@/components/top-bar";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { getPost } from "../actions";

export default async function PostPage(
    { params,
    }: {
        params: Promise<{ id: string }>
    }
) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    const session = await auth();
    if (!session) redirect("/sign-in");
    const t = await getTranslations();

    return (
        <>
            <TopBar title={t("Sidebar.post")} />
            <div className="page flex flex-col justify-center">
                <div className="flex pt-5">
                    <div>
                        <Icons.profile className="w-fit" image={post.user?.image || undefined} size={60} />
                    </div>
                    <div className="h-1000 px-4 flex flex-col gap-5">
                        <div className="flex items-center gap-3 text-xl">
                            <p className="">{post.user?.name}</p>
                            <p className="text-current/50">@{post.user?.username}</p>
                        </div>
                        <h2 className="text-xl">{post.content}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}