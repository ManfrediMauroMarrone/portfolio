import React from "react";
import Container from "./Container";

function Navbar() {
  return (
    <div className="border-b">
      <Container>
        <nav className="p-5 flex justify-between text-xl font-semibold">
          <div className="nav-left font">
            <h1>
              <a href="#home" className="text-primary text-2xl">Manfredi Marrone</a>
            </h1>
          </div>
          <div className="nav-right">
            <ul className="flex gap-5">
              <li>
                <a href="">About me</a>
              </li>
              <li>
                <a href="">Experience</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
