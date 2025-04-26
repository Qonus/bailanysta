import { createPost } from "@/app/(nav)/posts/actions";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function PostForm() {
    const t = useTranslations();
    return (
        <form action={createPost} className="flex flex-col items-end gap-5">
            <Textarea name="content" placeholder={t("Post.placeholder")} rows={3} className="resize-none" />
            <Button
                type="submit"
                variant="default"
                className="nav-button"
            >
                <p className="text-lg">
                    {t("Sidebar.post")}
                </p>
            </Button>
        </form>
    )
}