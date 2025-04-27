import TopBar from "@/components/top-bar";
import { Skeleton } from "@/components/ui/skeleton";


export default function PostLoading() {
    return (
        <div>
            <TopBar title="Post" />
            <div className="page flex flex-col justify-center">
                <div className="flex pt-5">
                    <Skeleton className="w-[65px] h-[65px] rounded-full" />
                    <div className="px-4 flex flex-col gap-5 w-full">
                        <div className="flex items-center gap-3">
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
        </div>
    );
}