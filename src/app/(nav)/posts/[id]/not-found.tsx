import TopBar from "@/components/top-bar";
import { getTranslations } from "next-intl/server";

export default async function PostNotFound() {
    const t = await getTranslations();
    return (
        <>
            <TopBar title={t("Sidebar.post")} />
            <div className="flex flex-col gap-4 h-screen items-center justify-center">
                <h1 className="text-2xl">404 - Post Not Found</h1>
                <p>The page you're looking for does not exist.</p>
            </div>
        </>
    );
}
