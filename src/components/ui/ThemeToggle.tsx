'use client'

import { useEffect, useState } from "react";
import Button from "./Button";
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {

    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const isDarkMode = savedTheme === 'dark';

        setIsDark(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [])

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        document.documentElement.classList.toggle('dark', newIsDark);
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    }

    return (
        <div>
            <Button
            onClick={toggleTheme}
            icon={isDark ? <Sun /> : <Moon />}
            size="sm"
            className={"bg-transparent hover:bg-transparent border-none"}
            />
        </div>
    )
}