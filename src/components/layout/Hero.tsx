import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRightToLine } from 'lucide-react';

type HeroProps = {
 children: React.ReactNode;
}

export default function Hero({children}: HeroProps) {
    return (
        <div
            className="relative flex-1 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/backgrounds/hero.png')" }}
        >

            {/* background overlay */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "var(--overlay-color)" }}
            />

            <div className="z-10 max-w-5xl text-white">
                {children}
            </div>

        </div>
    )
}