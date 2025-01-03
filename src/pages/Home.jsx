import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";

function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <Intro/>
        <AboutMe/>
      </Container>
    </div>
  );
}

export default Home;
