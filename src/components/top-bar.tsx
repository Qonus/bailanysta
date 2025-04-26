import BackButton from "./back-button";

export default function TopBar({ title }: { title: string }) {
    return (
        <div className="h-13 border-b-1 border-b-current/20 flex items-center px-6 justify-start gap-5 backdrop-blur-lg sticky top-0">
            <BackButton />
            <p className="text-lg font-bold">
                {title}
            </p>
        </div>
    )
}