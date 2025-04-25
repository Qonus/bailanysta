import AppSidebar from "@/components/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();

	if (!session) {
		redirect('/sign-in');
	}

	return (
		<div className="container flex h-screen">
			<div className="w-fit">
				<AppSidebar />
			</div>
			<div className="w-full">
				{children}
			</div>
		</div>
	);
}
