import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function PostForm({ className }: React.ComponentProps<"form">) {
    const t = useTranslations('Post')
    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Textarea placeholder={t("placeholder")} className="resize-none" />
            </div>
            <Button
                type="submit"
                className="w-fit"
                onClick={(e) => {
                    e.preventDefault();
                    toast.success(
                        "Posted Successfully!", {
                        description: "Your Post",
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo")
                        }
                    },);
                }}>
                Post
            </Button>
        </form>
    )
}