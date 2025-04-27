import AppSidebar from "@/components/sidebar";
import ForceUsernameModal from "@/components/users/username-modal";
import { auth } from "@/lib/auth";
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

	return (
		<div className="container flex h-screen">
			<ForceUsernameModal initialUsername={user?.username || ""} />
			<div className="w-fit">
				<AppSidebar user={user} />
			</div>
			<div className="overflow-y-auto w-full border-r-1 border-r-current/20">
				{children}
			</div>
		</div>
	);
}
