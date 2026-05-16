import { cn } from "@/lib/utils";

type ButtonProps = {
    text?: string;
    icon?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    classname?: React.ReactNode;
    onClick?: () => void;
}

export default function Button(
    { text, icon, variant = 'primary', size = 'md', classname, onClick }: ButtonProps
) {

    const variants = {
        primary: "bg-accent hover:bg-hover-accent",
        secondary: "bg-wood hover:bg-hover-wood"
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
                    "p-4",
                    classname,
                    variants[variant],
                    sizes[size]
                )}
                onClick={onClick}
            >
                {text}{icon}
            </button>
        </div>
    )
}