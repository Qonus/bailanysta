import SignInForm from "@/components/sign-in-form";
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
            <div className="m-auto flex flex-col align-middle gap-10">
                <div>

                    <h1 className="text-3xl">
                        {t("welcome")}
                    </h1>
                    <h2>
                        {t("call-to-action")}
                    </h2>
                </div>

                <SignInForm />
            </div>
        </div>
    );
}