import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProfileIcon({
    image,
    className,
    size = 40,
}: {
    image?: string
    className?: string,
    size?: number,
}) {

    return (
        <div
            className={cn("rounded-full overflow-hidden relative border-2 border-violet-500/20", className)}
            style={{ width: size, height: size }}
        // {...props}
        >
            <Image
                src={image || "/default-profile-picture.png"}
                width={400}
                height={400}
                alt="Profile picture"
            />
        </div>
    );
}