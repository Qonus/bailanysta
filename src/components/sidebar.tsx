import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail
} from "@/components/ui/sidebar"
import { Icons } from "./icons/icons"

const data = {

	nav: [
		{
			icon: Icons.home,
			title: "Home",
			url: "/home",
		},
		{
			icon: Icons.home,
			title: "Notifications",
			url: "/notifications",
		},
		{
			icon: Icons.home,
			title: "Profile",
			url: "/profile",
		},
		{
			icon: Icons.home,
			title: "Settings",
			url: "/settings",
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				{/* <SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<Icons.logo />
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu> */}
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>

					<SidebarMenu>
						{data.nav.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton tooltip={item.title}>
									{item.icon && <item.icon />}
									<a href={item.url}>{item.title}</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar >
	)
}
