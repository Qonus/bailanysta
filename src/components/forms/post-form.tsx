import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import TextareaAutoSize from "react-textarea-autosize";
import { z } from "zod";

export default function PostForm() {
    const t = useTranslations("PostForm");
    const router = useRouter();

    const formSchema = z.object({
        content: z.string()
            .min(1, t("min"))
            .max(1024, t("max"))
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
        const res = await axios.post("/api/posts", data);
        const newPost = res.data;
        router.push(`/posts/${newPost?.id}`);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-end gap-5">
            <div className="w-full">
                <TextareaAutoSize
                    {...register("content")}
                    placeholder={t("placeholder")}
                    maxRows={10}
                    className="input" />
                {errors.content &&
                    <p className="text-destructive">
                        {errors.content.message}
                    </p>
                }
            </div>
            <button
                type="submit"
                className="button default py-2 px-4"
            >
                <p className="text-lg">
                    {t("post")}
                </p>
            </button>
        </form>
    )
}