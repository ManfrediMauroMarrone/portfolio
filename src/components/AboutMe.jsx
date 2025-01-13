import React from "react";
import Title from "./Title";
import th from "../assets/images/th.jpg"

function AboutMe() {
  return (
    <section id="aboutMe" className="lg:h-sectionHeight">
      <div className="flex justify-center py-6">
        <Title text={"About Me"} />
      </div>
      <div className="flex flex-col lg:flex-row  p-10 items-center h-3/4">
        <div className="w-1/2 pb-6 lg:pb-0">
            <div className="rounded-lg lg:w-3/4 overflow-hidden">
              <img
                className="object-contain"
                src={th}
                alt="web developer"
              />
            </div>
        </div>
        <div className="lg:w-1/2 h-full flex items-center justify-center text-xl lg:text-3xl">
          <p className="whitespace-pre-line">
            Since I was a child, video games have always held a special place in
            my life. This passion, combined with an innate curiosity for
            technology, led me to explore the world of web development. Today,
            as a full-stack developer, I turn ideas into digital experiences,
            blending creativity and technical skills to bring projects to life
            to tell stories and solve problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
