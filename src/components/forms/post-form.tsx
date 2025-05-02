import { createPost } from "@/app/(nav)/posts/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export default function PostForm() {
    const t = useTranslations("PostForm");
    const router = useRouter();

    const formSchema = z.object({
        content: z.string()
            .min(1, t("min"))
            .max(255, t("max"))
    });

    type FormData = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data: FormData) => {
        const newPost = await createPost(data.content);
        router.push(`/posts/${newPost?.id}`);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-end gap-5">
            <div className="w-full">
                <Textarea
                    {...register("content")}
                    placeholder={t("placeholder")}
                    rows={3}
                    className="resize-none" />
                {errors.content &&
                    <p className="text-destructive">
                        {errors.content.message}
                    </p>
                }
            </div>
            <Button
                type="submit"
                className="nav-button"
            >
                <p className="text-lg">
                    {t("post")}
                </p>
            </Button>
        </form>
    )
}