import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
    return (
        <header
            className="
                bg-bg-secondary 
            ">

            <h2>The Moronero Restaurant</h2>
            <ThemeToggle/>

        </header>
    )
}