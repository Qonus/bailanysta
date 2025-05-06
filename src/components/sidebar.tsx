import { IUser } from "@/types/tables";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Icons } from "./icons/icons";
import LogoutButton from "./logout-button";
import PostButton from "./post-button";
import ThemeSwitcher from "./theme-switcher";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";


export default async function AppSidebar({ user }: { user?: IUser }) {
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
				url: `/users/${user?.username}`,
			},
			{
				icon: Icons.settings,
				title: "settings",
				url: "/settings",
			},
		],
	}

	const t = await getTranslations("Sidebar");
	return (
		<div className="size-full flex flex-col justify-between border-r-1 border-r-current/10 px-4 md:px-5 py-5">
			<div className="items-center md:items-start flex flex-col gap-3">
				<ThemeSwitcher />
				<TooltipProvider>
					{data.nav.map((item) => (
						<Tooltip key={item.title} delayDuration={0}>
							<TooltipTrigger asChild>
								<button className="button ghost">
									<Link href={item.url} className="flex gap-2">
										{item.icon && <item.icon className="size-7" />}
										<span className="hidden md:block">{t(item.title)}</span>
									</Link>
								</button>
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
					<button className="button ghost py-2 w-full">
						<Icons.profile user={user || undefined} />
						<div className="hidden md:flex flex-col text-left">
							<p>{user?.name || "Name"}</p>
							<p className="text-sm">{`@${user?.username}` || "@username"}</p>
						</div>
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="flex items-center gap-5" side="right">
					<DropdownMenuItem asChild>
						<button className="button pl-2">
							<a href={`/users/${user?.username}`} className="flex">
								<Icons.user className="size-7" />
								<span className="hidden md:block">{t('profile')}</span>
							</a>
						</button>
					</DropdownMenuItem>
					<DropdownMenuItem className="rounded-full" asChild>
						<LogoutButton />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
