import EditProfileButton from "@/components/edit-profile";
import { Icons } from "@/components/icons/icons";
import TopBar from "@/components/top-bar";
import UserActivity from "@/components/users/user-activity";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserPosts } from "../posts/actions";

export default async function Profile() {
  const session = await auth();
  // const t = await getTranslations('Profile');
  if (!session) redirect('sign-in');

  const posts = await getUserPosts(session.user.id);

  return (
    <>
      <TopBar title="Profile" />
      <div className="pt-10 m-auto">

        <div className="block-border-b p-6 flex flex-col gap-5">
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

        <UserActivity posts={posts} />

      </div>
    </>
  );
}
