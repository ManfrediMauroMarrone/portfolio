import React from "react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer id="contacts" className="mt-10 border-t-2 ">
      <div>
        <Container>
          <div className="flex justify-between items-center p-6 lg:p-10 mt-negativeTop text-sm lg:text-lg">
            <div className="flex flex-col sm:w-1/2">
              <a
                href="https://www.linkedin.com/in/manfredi-mauro-marrone-364153196/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line-effect w-fit"
                aria-label="Link to my LinkedIn Profile"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" /> My LinkedIn Profile
              </a>
              <a
                href="mailto:manfredi.marrone@gmail.com"
                className="hover-line-effect w-fit"
                aria-label="Click here to send me an email"
              >
                <FontAwesomeIcon icon="fa-envelope" /> Send me an email
              </a>
            </div>
            <div className="sm:w-1/2 text-right">
              <p>© 2025 Manfredi Marrone. All right reserved.</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
