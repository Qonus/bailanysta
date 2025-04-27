import TopBar from "@/components/top-bar";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
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

    const t = await getTranslations();

    return (
        <>
            <TopBar title={t("Sidebar.post")} />
            <div className="page flex flex-col justify-center">
                <div className="h-1000 p-4">
                    <h2 className="text-xl">{post.content}</h2>

                </div>
            </div>
        </>
    );
}