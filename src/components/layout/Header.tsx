import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
    return (
        <header
            className="bg-bg-secondary">

            <div>

                <div>
                    <h2>The Moronero Restaurant</h2>
                </div>

                <div>
                    <ThemeToggle/>
                </div>
                
            </div>

        </header>
    )
}