import { signIn } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { Icons } from "../icons/icons";
import { Button } from "../ui/button";


export default async function SignInForm() {
    const t = await getTranslations('Authorization');
    return (
        <form
            action={async () => {
                "use server";

                await signIn("google");
            }}
        >
            <Button type="submit" className="nav-button w-fit">
                <div className="text-lg flex gap-2">
                    {t("continue-with")}
                    <Icons.google className="size-5 m-auto" />
                </div>
            </Button>
        </form>
    );
}