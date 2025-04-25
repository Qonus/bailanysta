import AppSidebar from "@/components/sidebar";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="container flex h-screen">
			<div className="w-17 md:w-50">
				<AppSidebar />
			</div>
			<div className="flex-1">
				{children}
			</div>
		</div>
	);
}
