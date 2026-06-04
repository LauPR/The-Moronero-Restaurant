import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

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

                <div className="flex items-center space-x-9">
                    <Button
                        text="Featured Dishes"
                        size="sm"
                        variant="empty"
                        className="border-none"
                    />
                    <Button
                        text="Full Menu"
                        size="sm"
                        variant="empty"
                        className="border-none"
                    />
                    <Button
                        text="Gallery"
                        size="sm"
                        variant="empty"
                        className="border-none"
                    />
                    <Button
                        text="Contact"
                        size="sm"
                        variant="empty"
                        className="border-none"
                    />
                    <Button
                        text="About Us"
                        size="sm"
                        variant="empty"
                        className="border-none"
                    />
                    <ThemeToggle />
                </div>

            </div>

        </header>
    )
}