import TopBar from "@/components/top-bar";
import { Skeleton } from "@/components/ui/skeleton";


export default function UserLoading() {
    return (
        <div>
            <TopBar title="Profile" />
            <div className="block-border-b p-6 flex flex-col gap-5">
                <Skeleton className="w-[100px] h-[100px] rounded-full" />
                <div className="flex flex-col gap-5 justify-between md:flex-row">
                    <div className="flex md:flex-row md:gap-3 md:items-center items-start flex-col gap-0">
                        <Skeleton className="w-[60px] h-[25px]" />
                        <span className="md:block hidden">•</span>
                        <Skeleton className="w-[50px] h-[25px]" />
                    </div>
                </div>
            </div>
            {Array.from({ length: 7 }, (_, index) => (
                <div key={index} className="w-full h-fit hover-block">
                    <div className="cursor-pointer block-border-t p-4 flex">
                        <Skeleton className="w-[40px] h-[40px] rounded-full" />
                        <div className="px-2 flex flex-col gap-2 w-full">
                            <div className="flex items-center gap-1 text-md">
                                <Skeleton className="w-[60px] h-[25px]" />
                                <Skeleton className="w-[50px] h-[25px]" />
                                <Skeleton className="w-[40px] h-[25px]" />
                            </div>
                            <Skeleton className="w-full h-[25px]" />
                            <Skeleton className="w-[40px] h-[25px]" />
                        </div>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <Skeleton className="w-[50px] h-[30px] rounded-full" />
                    </div>
                </div>
            ))}
        </div>
    );
}