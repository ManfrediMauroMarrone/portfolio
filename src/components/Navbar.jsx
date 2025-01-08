import React from "react";
import Container from "./Container";

function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-white">
      <Container>
        <nav className="p-5 flex justify-between text-xl font-semibold">
          <div className="nav-left font">
            <h1>
              <a href="#intro" className="text-primary text-2xl">Manfredi Marrone</a>
            </h1>
          </div>
          <div className="nav-right">
            <ul className="flex gap-5">
              <li>
                <a href="#aboutMe">About me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
