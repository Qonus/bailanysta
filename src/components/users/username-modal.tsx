'use client';

import { updateUsername } from '@/app/(nav)/users/actions';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function ForceUsernameModal({ initialUsername }: { initialUsername: string | null }) {
    const [open, setOpen] = useState(false);
    const [tempUsername, setTempUsername] = useState('');

    useEffect(() => {
        if (!initialUsername) {
            setOpen(true);
        }
    }, [initialUsername]);

    const t = useTranslations("UsernameDialog");

    return (
        <Dialog open={open} onOpenChange={() => { }}>
            <DialogContent
                className="sm:max-w-md"
                onInteractOutside={(e) => e.preventDefault()} // prevent closing by clicking outside
                onEscapeKeyDown={(e) => e.preventDefault()}   // prevent closing with Esc key
            >
                <DialogHeader>
                    <DialogTitle>{t("title")}</DialogTitle>
                </DialogHeader>

                <form action={updateUsername} className="flex flex-col gap-4">
                    <Input
                        placeholder={t("placeholder")}
                        value={tempUsername}
                        name="username"
                        onChange={(e) => setTempUsername(e.target.value)}
                    />
                    <Button type='submit' disabled={tempUsername.trim() === ''}>
                        {t("save")}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
