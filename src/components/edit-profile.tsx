"use client"

import { Label } from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

export default function EditProfileButton() {

    const t = useTranslations('Profile');
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{t("edit")}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t("edit")}</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            Name
                        </Label>
                        <Input placeholder="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            Username
                        </Label>
                        <Input placeholder="peduarte" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={() => {
                            toast.success("Profile changes saved successfully!");
                        }}
                    >Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}