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

        if (isDark) {
            document.documentElement.classList.add('dark');
        }

    }, [])

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <div>
            <Button
            onClick={toggleTheme}
            icon={isDark ? <Sun /> : <Moon />}
            size="sm"
            />
        </div>
    )
}