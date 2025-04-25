import { signOut } from "@/lib/auth";
import { Icons } from "./icons/icons";
import { Button } from "./ui/button";

export default function LogoutButton() {
    return (
        <Button variant="ghost" className="nav-button" onClick={async () => {
            "use server";
            await signOut();
        }
        }>
            <Icons.logout className="size-7" />
            <span >
                Logout
            </span>
        </Button>
    );
}