import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Button from "@/components/ui/Button";
import { ArrowRightToLine } from "lucide-react";
import Link from "next/link";

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
          <div className="p-2 text-center">
            <h1 className="text-8xl">Great Food. Great Company.</h1>
            <h2 className="text-2xl text-off-white">
              Casual elegant dining for the whole family.
              Starters, mains, desserts, and drinks.
              Made with care and served with a smile.
            </h2>

            <div className="flex gap-72 mt-3 justify-center">
              <Button
                text="See full menu"
                size="lg"
                variant="empty"
                icon={<ArrowRightToLine />}
                className="border-2 border-off-white shadow-sm shadow-shadow rounded-full p-3"
              />

              <Link href="/about">
                <Button
                  text="About us"
                  size="lg"
                  variant="empty"
                  className="border-2 border-off-white shadow-sm shadow-shadow rounded-full p-3"
                />
              </Link>
            </div>
          </div>
        </Hero>
        <Footer />

      </main>

    </div>
  );
}
