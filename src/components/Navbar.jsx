import React from "react";
import Container from "./Container";

function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <Container>
        <nav className="p-5 flex justify-between text-xl font-semibold">
          <div className="nav-left font">
            <h1>
              <a href="#intro" className="text-primary text-lg lg:text-3xl">Manfredi Marrone</a>
            </h1>
          </div>
          <div className="nav-right text-xl hidden lg:block">
            <ul className="flex gap-5 pt-1">
              <li className="hover-line-effect">
                <a href="#aboutMe">About me</a>
              </li>
              <li className="hover-line-effect">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover-line-effect">
                <a href="#experience">Experience</a>
              </li>
              <li className="hover-line-effect">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
