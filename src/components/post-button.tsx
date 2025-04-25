'use client'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { Icons } from "./icons/icons"
import PostForm from "./post-form"
import { Button } from "./ui/button"

export default function PostButton() {
    const [open, setOpen] = useState(false)
    const t = useTranslations();
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="nav-button md:w-full" >
                    <Icons.post className="size-7" />
                    <span className="hidden md:block font-bold pr-5">
                        {t("Sidebar.post")}
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t("Post.title")}</DialogTitle>
                </DialogHeader>
                <PostForm />
            </DialogContent>
        </Dialog>
    )
}