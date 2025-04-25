import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { getTranslations } from "next-intl/server"
import { Icons } from "./icons/icons"
import PostButton from "./post-button"
import ThemeSwitcher from "./theme-switcher"
import { Button } from "./ui/button"


const data = {

	nav: [
		{
			icon: Icons.home,
			title: "home",
			url: "/home",
		},
		{
			icon: Icons.notifications,
			title: "notifications",
			url: "/notifications",
		},
		{
			icon: Icons.profile,
			title: "profile",
			url: "/profile",
		},
		{
			icon: Icons.settings,
			title: "settings",
			url: "/settings",
		},
	],
}

export default async function AppSidebar() {
	const t = await getTranslations("Sidebar");
	return (
		<div className="size-full flex flex-col justify-between border-r-1 border-r-current/10 md:pr-10 py-5">

			<div className="flex flex-col gap-3">
				<ThemeSwitcher />
				{data.nav.map((item) => (
					<Button variant='ghost' className="nav-button px-10" key={item.title} asChild>
						<a href={item.url} className="flex">
							{item.icon && <item.icon className="size-7" />}
							<span className="hidden md:block">{t(item.title)}</span>
						</a>
					</Button>
				))}
				<PostButton />
			</div>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild><Button variant="ghost" className="nav-button">
									<Icons.profile className="size-7" />
								</Button></TooltipTrigger>
								<TooltipContent>
									Profile
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>

					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>
							<Button variant="ghost">
								{t("logout")}
							</Button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
