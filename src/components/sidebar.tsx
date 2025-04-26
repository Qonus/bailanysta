import { Session } from "next-auth";
import { getTranslations } from "next-intl/server";
import { Icons } from "./icons/icons";
import LogoutButton from "./logout-button";
import PostButton from "./post-button";
import ThemeSwitcher from "./theme-switcher";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";


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
			icon: Icons.user,
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

export default async function AppSidebar({ session }: { session: Session }) {
	const t = await getTranslations("Sidebar");
	return (
		<div className="size-full flex flex-col justify-between border-r-1 border-r-current/10 px-4 md:px-5 py-5">
			<div className="items-center md:items-start flex flex-col gap-3">
				<ThemeSwitcher />
				<TooltipProvider>
					{data.nav.map((item) => (
						<Tooltip key={item.title} delayDuration={0}>
							<TooltipTrigger asChild>
								<Button variant='ghost' className="nav-button pl-2" asChild>
									<a href={item.url} className="flex">
										{item.icon && <item.icon className="size-7" />}
										<span className="hidden md:block">{t(item.title)}</span>
									</a>
								</Button>
							</TooltipTrigger>
							<TooltipContent
								side="right"
								align="center"
								sideOffset={10}
								className="md:hidden"
							>
								<p className="block">{t(item.title)}</p>
							</TooltipContent>
						</Tooltip>
					))}
					<PostButton />
				</TooltipProvider>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className="rounded-full h-15 p-2">
						<Icons.profile />
						<div className="hidden md:flex flex-col text-left">
							<p>{session?.user?.name || "Username"}</p>
							<p className="text-sm">{session?.user?.email || "email@example.com"}</p>
						</div>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent side="right">
					<DropdownMenuItem asChild>
						<LogoutButton />
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Button variant='ghost' className="nav-button pl-2" asChild>
							<a href="/profile" className="flex">
								<Icons.user className="size-7" />
								<span className="hidden md:block">{t('profile')}</span>
							</a>
						</Button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
