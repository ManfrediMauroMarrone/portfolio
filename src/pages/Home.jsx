import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Intro/>
      <Container>
        <AboutMe/>
        <Skills/>
        <Experience/>
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
