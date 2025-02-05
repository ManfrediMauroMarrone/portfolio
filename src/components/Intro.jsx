import Container from "./Container";
import React, { createRef, useEffect, useRef } from "react";

function Intro() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Wrap every letter in a span

    titleRef.current.innerHTML = titleRef.current.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 600,
        delay: (el, i) => 100 * (i + 1),
      })
      .add({
        targets: ".ml3",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 2000,
      });
  }, []);

  return (
    <>
      <section
        id="intro"
        className="text-3xl p-6 lg:p-0 lg:text-5xl font-semibold bg-primary text-whiteText scroll-my-20"
      >
        <Container>
          <div className="flex flex-col lg:flex-row h-56 lg:h-sectionHeight">
            <div className="lg:w-1/2 h-full flex items-center justify-center">
              <h2 className="ml3 whitespace-pre-line" ref={titleRef}>
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
        <path
          d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"
          fill="#131417"
        ></path>
      </svg>
    </>
  );
}

export default Intro;
