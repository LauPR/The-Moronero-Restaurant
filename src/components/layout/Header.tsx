import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
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

                <div className="flex items-center">
                    <ThemeToggle/>
                </div>

            </div>

        </header>
    )
}