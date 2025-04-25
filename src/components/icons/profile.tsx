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
            className={cn("rounded-full overflow-hidden relative border-2 border-violet-500/20", className)}
            style={{ width: size, height: size }}
        // {...props}
        >
            <Image
                src={session?.user?.image || "/default-profile-picture.png"}
                width={400}
                height={400}
                alt="Profile picture"
            />
        </div>
    );
}