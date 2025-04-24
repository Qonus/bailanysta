import { AppSidebar } from "@/components/sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<SidebarTrigger className="-ml-1" />
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
