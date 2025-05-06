"use client";

import { useTheme } from "next-themes";
import { Icons } from "./icons/icons";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const ToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button className="button ghost"
            onClick={ToggleTheme}
        >
            <Icons.logo className="size-7" />
        </button>
    );
}