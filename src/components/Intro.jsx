import Container from "./Container";
import React from "react";

function Intro() {
  return (
    <>
      <section
        id="intro"
        className="text-3xl p-6 lg:p-0 lg:text-5xl font-semibold bg-primary text-whiteText"
      >
        <Container>
          <div className="flex flex-col lg:flex-row h-56 lg:h-sectionHeight">
            <div className="lg:w-1/2 h-full flex items-center justify-center">
              <h2 className="whitespace-pre-line">
                Hi, I am Manfredi Marrone.{"\n"}A Full Stack Web Developer.
              </h2>
            </div>
            <div className="h-introImageHeigth hidden lg:block lg:w-1/2 lg:h-auto">
              <iframe
                src="https://my.spline.design/miniroomremakecopyprogrammerroom-fea314f5236cde93e4d628f1da41a760/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="pointer-events-none"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
      <svg
        className="svg-curve"
        viewBox="0 0 1440 79"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z" fill="#008080"></path>
      </svg>
    </>
  );
}

export default Intro;
