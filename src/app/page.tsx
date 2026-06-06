import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Button from "@/components/ui/Button";
import { ArrowRightToLine } from "lucide-react";

const buttonItems = [
  { name: 'See full menu', href: '/menu', icon: <ArrowRightToLine /> },
  { name: 'About us', href: '/about' }
]

export default function Home() {

  return (
    <div>

      <main
        className="
          min-h-screen
          flex
          flex-col
          bg-bg-primary 
          text-text-primary
          cursor-default
        ">

        <Header />

        <Hero>
          <div className="p-2 text-center space-y-10">
            <h1 className="text-8xl">Great Food. Great Company.</h1>
            <h2 className="text-2xl text-off-white">
              Casual elegant dining for the whole family.
              Starters, mains, desserts, and drinks.
              Made with care and served with a smile.
            </h2>

            <div className="flex gap-72 mt-3 justify-center">
              {buttonItems.map((item) => {
                return (
                  <Button
                    key={item.href}
                    href={item.href}
                    text={item.name}
                    icon={item.icon}
                    variant="empty"
                    size="lg"
                    className="border-2 border-off-white shadow-sm shadow-shadow rounded-full p-3"
                  />
                )
              })}
            </div>
          </div>
        </Hero>

        <Footer />

      </main>

    </div>
  );
}
