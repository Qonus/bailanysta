import { signOut } from "@/lib/auth";
import { Icons } from "./icons/icons";
import { Button } from "./ui/button";

export default function LogoutButton() {
    return (
        <Button variant="destructive" className="rounded-full" onClick={async () => {
            "use server";
            await signOut();
        }
        }>
            <Icons.logout className="size-5" />
        </Button>
    );
}