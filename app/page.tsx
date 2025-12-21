import Image from "next/image";
import Hero from "./(sections)/hero/Hero";
import Services from "./(sections)/services/Services";
import About from "./(sections)/about/About";
import Testimonials from "./(sections)/testimonials/Testimonials";
import Footer from "./(sections)/footer/Footer";
import Navbar from "./(sections)/navbar/Navbar";

export default function Home() {
  return (
    <main className="text-white bg-black">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
