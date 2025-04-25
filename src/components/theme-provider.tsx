"use client"

import { ThemeProvider as NextThemesProvider, ThemeProviderProps, useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return (
            <>
                {children}
            </>
        );
    }

    return <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>
}