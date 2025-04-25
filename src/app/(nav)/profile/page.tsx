import EditProfileButton from "@/components/edit-profile";
import { Icons } from "@/components/icons/icons";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";

export default async function Profile() {
  const session = await auth();
  const t = await getTranslations('Profile');
  return (
    <div className="page h-screen">
      <div className="pt-20 pb-5 max-w-160 m-auto flex flex-col gap-5 border-b-1 border-b-current/10">
        <Icons.profile size={100} />
        <div className="flex flex-col gap-5 justify-between md:flex-row">

          <div>
            <p className="text-xl font-bold">
              {session?.user?.name || "Username"}
            </p>
            <p className="text-foreground/50">
              {session?.user?.email || "Email"}
            </p>
          </div>
          <EditProfileButton />
        </div>
      </div>
    </div>
  );
}
