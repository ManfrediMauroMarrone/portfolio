import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer id="contact" className="mt-10">
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
          <div className="text-whiteText flex justify-between items-center p-6 lg:p-10 mt-negativeTop text-sm lg:text-lg">
            <div className="flex flex-col w-1/2">
              <a
                href="https://www.linkedin.com/in/manfredi-mauro-marrone-364153196/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line-effect-footer"
              >
                My LinkedIn Profile
              </a>
              <a
                href="mailto:manfredi.marrone@gmail.com"
                className="hover-line-effect-footer"
              >
                Send me an email
              </a>
            </div>
            <div className="w-1/2">
              <p>© 2025 Manfredi Marrone. All right reserved.</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
