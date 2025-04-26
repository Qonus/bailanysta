'use client';

import { useRouter } from 'next/navigation';
import { Icons } from './icons/icons';
import { Button } from './ui/button';

export default function BackButton() {
    const router = useRouter();

    return (
        <Button variant="ghost" onClick={() => router.back()} className="rounded-full p-2">
            <Icons.back className='size-5' />
        </Button>
    );
}
