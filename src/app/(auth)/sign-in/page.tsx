import SignInForm from "@/components/forms/sign-in-form";
import { Icons } from "@/components/icons/icons";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export default async function SignIn() {
    const session = await auth();
    if (session) {
        redirect("/home");
    }

    const t = await getTranslations('Authorization');

    return (
        <div className="container flex h-screen">
            <div className="m-auto flex flex-col align-middle gap-10 p-5 max-w-150">
                <div>
                    <div className="w-full py-10">
                        <Icons.logo className="m-auto size-30" />

                    </div>
                    <h1 className="text-3xl mb-3">
                        {t("welcome")}
                    </h1>
                    <h2>
                        {t("call-to-action")}
                    </h2>
                </div>
                <div className="m-auto">
                    <SignInForm />
                </div>
            </div>
        </div>
    );
}