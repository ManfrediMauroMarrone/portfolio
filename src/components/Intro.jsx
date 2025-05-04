import Container from "./Container";
import React from "react";

function Intro() {
  return (
    <>
      <section
        id="intro"
        className="text-3xl p-6 mb-10 lg:p-0 lg:text-5xl font-semibold bg-primary text-whiteText scroll-my-20"
      >
        <Container>
          <div className="flex flex-col lg:flex-row h-56 lg:h-sectionHeight">
            <div className="lg:w-1/2 h-full flex items-center justify-center">
              <h2 className="whitespace-pre-line text-3xl md:text-5xl/[60px]">
                Hi, I'm Manfredi Marrone.{"\n"}
                <span className="font-secondFont text-2xl md:text-4xl text-secondary">
                  Full Stack Web Developer.
                </span>
                {"\n"} I build modern, functional, and accessible web
                experiences.
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
    </>
  );
}

export default Intro;
