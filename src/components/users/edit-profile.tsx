"use client"

import { cn } from "@/lib/utils";
import { IUser } from "@/types/tables";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import UsernameForm from "../forms/username-form";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function EditProfileButton({ user, className }: { user?: IUser, className?: string }) {
    const t = useTranslations();

    return (
        <Dialog>
            <DialogTrigger className={cn("", className)} asChild>
                <Button variant="outline" className="rounded-full">{t("Profile.edit")}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogTitle>
                    {t("UsernameForm.title")}
                </DialogTitle>
                <UsernameForm user={user} />
            </DialogContent>
        </Dialog>
    );
}