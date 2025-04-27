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
        <Button variant="link" className="p-0 text-current/50">
            <Link href={`/users/${username}`}>
                @{username}
            </Link>
        </Button>
    );
}