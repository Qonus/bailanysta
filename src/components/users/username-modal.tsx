'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import UsernameForm from '../forms/username-form';

export default function ForceUsernameModal({ initialUsername }: { initialUsername: string | null }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!initialUsername) {
            setOpen(true);
        }
    }, [initialUsername]);

    const t = useTranslations();
    return (
        <Dialog
            open={open} onOpenChange={() => { }}
        >
            <DialogContent
                className="sm:max-w-md"
                onInteractOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
            >
                <DialogTitle>
                    {t("UsernameForm.title")}
                </DialogTitle>
                <UsernameForm />
            </DialogContent>
        </Dialog>
    );
}
