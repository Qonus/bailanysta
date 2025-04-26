"use client";

import { useTheme } from "next-themes";
import { Icons } from "./icons/icons";
import { Button } from "./ui/button";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const ToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button variant='ghost' className="nav-button"
            onClick={ToggleTheme}
        >
            <Icons.logo className="size-7" />
        </Button>
    );
}