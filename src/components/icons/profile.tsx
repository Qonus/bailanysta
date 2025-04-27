import { cn } from "@/lib/utils";
import { IUser } from "@/types/tables";
import Image from "next/image";

export default function ProfileIcon({
    user,
    className,
    size = 40,
}: {
    user?: IUser
    className?: string,
    size?: number,
}) {

    return (
        <div>
            <div
                // href={`/users/${user?.username}`}
                className={cn("rounded-full overflow-hidden border-2 border-violet-500/20", className)}
                style={{ width: size, height: size }}
            // {...props}
            >
                <Image
                    src={user?.image || "/default-profile-picture.png"}
                    width={400}
                    height={400}
                    alt="Profile picture"
                />
            </div>
        </div>
    );
}