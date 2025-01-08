import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer>
      <svg
        className="svg-curve"
        viewBox="0 0 1440 79"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"
          fill="#008080"
        ></path>
      </svg>
      <div className="bg-primary">
        <Container>
          <div className="text-white flex justify-between p-10 mt-negativeTop">
            <a href="https://www.linkedin.com/in/manfredi-mauro-marrone-364153196/" target="_blank" rel="noopener noreferrer">
              My LinkedIn Profile
            </a>
            <p>© 2025 Manfredi Marrone. Tutti i diritti riservati.</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
