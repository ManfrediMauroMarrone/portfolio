import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Intro from "../components/Intro";

function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <Intro/>
      </Container>
    </div>
  );
}

export default Home;
