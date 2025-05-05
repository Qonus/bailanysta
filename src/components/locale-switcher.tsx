'use client';

import { setUserLocale } from '@/services/locale';
import { useLocale } from 'next-intl';
import { useTranslations } from 'use-intl';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

export default function LocaleSwitcher() {
    function onChange(value: string) {
        const locale = value;
        setUserLocale(locale);
    }

    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    const items = [
        {
            value: 'en',
            label: t('en')
        },
        {
            value: 'ru',
            label: t('ru')
        },
        {
            value: 'kz',
            label: t('kz')
        }
    ];

    return (
        <div className="flex">
            <Select defaultValue={locale} onValueChange={onChange}>
                <SelectTrigger className="w-fit">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{t("label")}</SelectLabel>
                        {items.map((item) => (
                            <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}