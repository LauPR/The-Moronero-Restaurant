'use client'

import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Featured Dishes', href: '/featured' },
    { name: 'Full Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'About Us', href: '/about' }
]

export default function Header() {
    const pathname = usePathname();

    return (
        <header
            className="bg-bg-secondary">

            <div className="container flex mx-auto py-2 justify-between items-center">

                <div className="flex items-center gap-3">
                    <Image
                        src="/icon.png"
                        alt="Restaurant icon"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <h2 className="font-bold">The Moronero Restaurant</h2>
                </div>

                <nav className="flex items-center space-x-9">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Button
                                key={item.href}
                                href={item.href}
                                text={item.name}
                                variant={isActive ? 'active' : 'empty'}
                                size="sm"
                            />
                        )
                    })}

                    <ThemeToggle />
                </nav>

            </div>

        </header>
    )
}