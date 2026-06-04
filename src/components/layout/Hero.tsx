import Button from "../ui/Button";
import { ArrowRightToLine } from 'lucide-react';

export default function Hero() {
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

            <div className="z-10 max-w-5xl p-2 text-center text-white space-y-10">
                <h1 className="text-8xl">Great Food. Great Company.</h1>
                <h2 className="text-2xl text-off-white">
                    Casual elegant dining at The Moronero.
                    Starters, mains, desserts, and drinks for the whole family.
                    Come as you are, leave happy.
                </h2>

                <div className="flex gap-72 mt-3 justify-center">
                    <Button
                        text="See full menu"
                        size="lg"
                        variant="empty"
                        icon={<ArrowRightToLine />}
                        className="border-2 border-off-white shadow-sm shadow-shadow rounded-full p-3"
                    />
                    <Button
                        text="About us"
                        size="lg"
                        variant="empty"
                        className="border-2 border-off-white shadow-sm shadow-shadow rounded-full p-3"
                    />
                </div>
            </div>

        </div>
    )
}