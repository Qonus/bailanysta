import { IUser } from "@/types/tables";
import Link from "next/link";
import { Icons } from "./icons/icons";
import PostButton from "./post-button";
import { Button } from "./ui/button";

export default function BottomBar({ user }: { user?: IUser }) {
    const data = {
        nav: [
            {
                icon: Icons.home,
                url: "/home",
            },
            {
                icon: Icons.notifications,
                url: "/notifications",
            },
            {
                icon: Icons.user,
                url: `/users/${user?.username}`,
            },
            {
                icon: Icons.settings,
                url: "/settings",
            },
        ],
    }
    return (
        <div className="z-5 block-border-t size-full flex items-center px-3 justify-around backdrop-blur-lg">
            {data.nav.slice(0, 2).map((item) => (
                <Button key={item.url} variant="ghost" className="nav-button" asChild>
                    <Link href={item.url}>
                        <item.icon className="size-7" />
                    </Link>
                </Button>
            ))}

            <PostButton />

            {data.nav.slice(2).map((item) => (
                <Button key={item.url} variant="ghost" className="nav-button" asChild>
                    <Link href={item.url}>
                        <item.icon className="size-7" />
                    </Link>
                </Button>
            ))}
        </div>
    );
}