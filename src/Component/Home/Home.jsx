import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import GoalsSection from "../GoalsSection/GoalsSection";
import CompanyVideo from "../CompanyVideo/CompanyVideo";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CompanyVideo/>
      <About />
      <Services />
      <GoalsSection/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
