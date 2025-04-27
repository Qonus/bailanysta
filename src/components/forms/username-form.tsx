import { updateUsername } from "@/app/(nav)/users/actions";
import { IUser } from "@/types/tables";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function UsernameForm({
    user
}: {
    user?: IUser
}) {
    const t = useTranslations("UsernameForm");

    const formSchema = z.object({
        username: z.string()
            .min(1, t("min"))
            .max(25, t("max"))
            .regex(/^[a-zA-Z0-9_]+$/, t("regex"))
    });

    type FormData = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: user?.username || ""
        }
    });

    const onSubmit = async (data: FormData) => {
        try {
            await updateUsername(data.username);
        } catch {
            setError("username", { type: "manual", message: t("manual") });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
            <div>
                <Input
                    {...register("username")}
                    className="border-none"
                    placeholder={t("placeholder")}
                />
                {errors.username &&
                    <p className="text-destructive">
                        {errors.username.message}
                    </p>
                }
            </div>
            <Button type="submit" className="rounded-full">
                {t("save")}
            </Button>
        </form>
    );
}