import { Hero } from "@/widgets/Hero/Hero";
import { About } from "@/widgets/About/About";
import { Features } from "@/widgets/Features/Features";
import { Projects } from "@/widgets/Projects/Projects";
import { Faq } from "@/widgets/Faq/Faq";
import { Footer } from "@/widgets/Footer/Footer";
import { Header } from "@/widgets/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Faq />
      <Footer />
    </main>
  );
}