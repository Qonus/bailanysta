import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Username({
    username,
    className
}: {
    username?: string,
    className?: string
}) {
    return (
        <Button variant="link" className={cn("p-0 text-current/50", className)} asChild>
            <Link href={`/users/${username}`}>
                @{username}
            </Link>
        </Button>
    );
}