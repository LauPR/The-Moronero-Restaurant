import { cn } from "@/lib/utils";

type ButtonProps = {
    text?: string;
    icon?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'empty';
    size?: 'sm' | 'md' | 'lg';
    className?: React.ReactNode;
    onClick?: () => void;
}

export default function Button(
    { text, icon, variant = 'primary', size = 'md', className, onClick }: ButtonProps
) {

    const variants = {
        primary: "bg-accent hover:bg-hover-accent",
        secondary: "bg-wood hover:bg-hover-wood",
        empty: "transition hover:text-off-white hover:shadow-none duration-300 ease-in-out"
    }

    const sizes = {
        sm: "text-md",
        md: "text-lg",
        lg: "text-2xl"
    }

    return (
        <div>
            <button
                className={cn(
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
                )}
                onClick={onClick}
            >
                {text}{icon}
            </button>
        </div>
    )
}