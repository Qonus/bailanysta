import BottomBar from "@/components/bottom-bar";
import AppSidebar from "@/components/sidebar";
import ForceUsernameModal from "@/components/users/username-modal";
import { auth } from "@/lib/auth";
import { getIsMobile } from "@/lib/server-utils";
import { redirect } from "next/navigation";
import { getUserByID } from "./users/actions";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	if (!session || !session.user) redirect('/sign-in');

	const user = await getUserByID(session.user.id);

	const isMobile = await getIsMobile();

	return (
		<div className="container flex h-screen">
			<ForceUsernameModal initialUsername={user?.username || ""} />

			{!isMobile ?
				<div className="w-fit">
					<AppSidebar user={user} />
				</div> :
				<div className="z-5 fixed bottom-0 w-full h-20 container">
					<BottomBar user={user} />
				</div>
			}
			<div className="overflow-y-auto w-full border-x-1 border-x-current/20">
				{children}
				<div className="h-30"></div>
			</div>
		</div>
	);
}
