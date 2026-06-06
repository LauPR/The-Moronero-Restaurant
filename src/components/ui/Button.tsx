import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
    text?: string;
    icon?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'empty' | 'active';
    size?: 'sm' | 'md' | 'lg';
    className?: React.ReactNode;
    onClick?: () => void;
    href?: string;
}

export default function Button(
    { text, icon, variant = 'primary', size = 'md', className, onClick, href }: ButtonProps
) {

    const variants = {
        primary: "bg-accent hover:bg-hover-accent",
        secondary: "bg-wood hover:bg-hover-wood",
        empty: "transition hover:text-off-white hover:shadow-none duration-300 ease-in-out border-0",
        active: "text-accent cursor-default border-0 border-b-2 border-accent"
    }

    const sizes = {
        sm: "text-md",
        md: "text-lg",
        lg: "text-2xl"
    }

    const classes = cn(
        "cursor-pointer",
        "text-center",
        "p-1",
        "border",
        "border-border",
        "flex",
        "items-center",
        "justify-center",
        "gap-2",
        variants[variant],
        sizes[size],
        className
    )

    if (href) {
        return <Link href={href} className={classes}>{text}{icon}</Link>
    }
    else {
        return <button className={classes} onClick={onClick}>{text}{icon}</button>
    }
}