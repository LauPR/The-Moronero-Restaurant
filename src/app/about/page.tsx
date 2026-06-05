import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";

export default function About() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <Hero>
                <div className="text-3xl text-justify space-y-5 leading-relaxed">
                    <h2 className="text-6xl text-center ">
                        About The Moronero
                    </h2>
                    <p>
                        The Moronero was born from a simple idea: good food brings people together.
                        We are a casual elegant restaurant where families, friends, and couples
                        can enjoy a relaxed meal without compromising on quality or flavor.
                    </p>
                    <p>
                        Our menu features carefully selected starters, hearty main courses,
                        delicious desserts, and refreshing beverages; all prepared with fresh
                        ingredients and a passion for hospitality. Whether you're celebrating
                        a special occasion or just craving a great dinner, we invite you to
                        pull up a chair and stay awhile.
                    </p>
                </div>
            </Hero>
            <Footer />
        </main>
    )
}