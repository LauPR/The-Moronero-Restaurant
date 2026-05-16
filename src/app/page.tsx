import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";

export default function Home() {

  return (
    <div>

      <main
        className="
          bg-bg-primary 
          min-h-screen
          text-text-primary
        ">

        <Header />
        <Hero />

      </main>

    </div>
  );
}
