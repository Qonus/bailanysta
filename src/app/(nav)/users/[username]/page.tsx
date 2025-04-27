import EditProfileButton from "@/components/edit-profile";
import { Icons } from "@/components/icons/icons";
import TopBar from "@/components/top-bar";
import UserActivity from "@/components/users/user-activity";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserPosts } from "../../posts/actions";
import { getUserByID, getUserByUsername } from "../actions";

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

    const posts = await getUserPosts(user?.id || "");

    // const t = await getTranslations('Profile');
    return (
        <>
            <TopBar title="Profile" />
            <div className="pt-10 m-auto">
                <div className="block-border-b p-6 flex flex-col gap-5">
                    <Icons.profile image={user?.image || undefined} size={100} />
                    <div className="flex flex-col gap-5 justify-between md:flex-row">
                        <div>
                            <p className="text-xl font-bold">
                                {user?.name || "Username"}
                            </p>
                            <p className="text-foreground/50">
                                @{user?.username || "username"}
                            </p>
                        </div>
                        {isCurrentUser ?
                            <EditProfileButton /> :
                            <></>
                        }
                    </div>
                </div>

                <UserActivity posts={posts} />

            </div>
        </>
    );
}
