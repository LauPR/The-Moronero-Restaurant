import Button from "../ui/Button";

export default function Hero() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center">

            <div className="bg-bg-secondary">

                <div className="
                    max-w-5xl
                    p-2
            ">
                    <h1 className="text-8xl">Great Food. Great Company.</h1>
                    <h2 className="text-2xl">
                        Casual elegant dining at The Moronero.
                        Starters, mains, desserts, and drinks for the whole family.
                        Come as you are, leave happy.
                    </h2>
                </div>

                <div className="flex gap-32 mt-3 justify-center">
                    <Button text="See full menu"/>
                    <Button text="About us" variant="secondary" />
                </div>

            </div>

        </div>
    )
}