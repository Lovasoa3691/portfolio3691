import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/project";
import Service from "./components/service";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect } from "react";
import { body } from "framer-motion/client";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Service />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
