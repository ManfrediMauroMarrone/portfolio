import React from "react";
import Title from "./Title";

function AboutMe() {
  return (
    <section className="h-sectionHeight">
      <div className="flex justify-center">
        <Title text={"About Me"} />
      </div>
      <div className="text-4xl flex p-10 items-center h-3/4">
        <div className="w-1/2">
            <div className="rounded-lg w-3/4 overflow-hidden">
              <img
                className="object-contain"
                src="src\assets\images\th.jpg"
                alt="web developer"
              />
            </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
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
