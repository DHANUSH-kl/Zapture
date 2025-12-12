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
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}