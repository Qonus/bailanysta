import { Icons } from "@/components/icons/icons";
import LogoutButton from "@/components/logout-button";
import TopBar from "@/components/top-bar";
import EditProfileButton from "@/components/users/edit-profile";
import UserActivity from "@/components/users/user-activity";
import Username from "@/components/users/username";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { getUserPosts } from "../../posts/actions";
import { getUserByID, getUserByUsername, getUserLikes } from "../actions";

export default async function Profile(
    { params,
    }: {
        params: Promise<{ username: string }>
    }
) {
    const { username } = await params;

    const session = await auth();
    if (!session) redirect('sign-in');

    const currentUser = await getUserByID(session.user.id)
    const isCurrentUser = currentUser?.username == username;

    const user = await getUserByUsername(username);
    if (!user) notFound();
    const userLikes = await getUserLikes(session.user.id);

    const posts = await getUserPosts(user?.id || "");

    const t = await getTranslations();
    return (
        <>
            <TopBar title={t("Sidebar.profile")} />
            <div className="pt-10 m-auto">
                <div className="block-border-b p-6 flex flex-col gap-5">
                    <Icons.profile user={user || undefined} size={100} />
                    <div className="flex flex-col gap-5 justify-between md:flex-row">
                        <div className="flex md:flex-row md:gap-3 md:items-center items-start flex-col gap-0">
                            <p className="text-xl font-bold">
                                {user?.name || "Username"}
                            </p>
                            <span className="md:block hidden">•</span>
                            <Username username={user?.username || undefined} className="text-xl" />
                        </div>
                        {isCurrentUser ?
                            <div className="flex justify-between items-center gap-5">
                                <EditProfileButton user={user} />
                                <LogoutButton />
                            </div> :
                            <></>
                        }
                    </div>
                </div>

                <UserActivity userLikes={userLikes} posts={posts} />

            </div>
        </>
    );
}
