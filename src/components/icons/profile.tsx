import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Image from "next/image";

export default async function ProfileIcon({
    className,
    size = 40,
    // ...props
}: LucideProps) {
    const session = await auth();

    return (
        <div
            className={cn("rounded-full overflow-hidden relative", className)}
            style={{ width: size, height: size }}
        // {...props}
        >
            <Image
                src={session?.user?.image || "/default-profile-picture.png"}
                width={100}
                height={100}
                alt="Profile picture"
                objectFit="cover"
            />
        </div>
    );
}