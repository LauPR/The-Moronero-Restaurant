import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";

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
        ">

        <Header />
        <Hero />
        <Footer />

      </main>

    </div>
  );
}
