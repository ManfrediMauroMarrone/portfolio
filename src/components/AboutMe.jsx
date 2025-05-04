import React, { useEffect } from "react";
import Title from "./Title";
import th from "../../public/images/Foto-removebg-preview.png"
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {

   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  const titleContent = <span><span className="underline decoration-secondary">About</span> Me</span>
  return (
    <section id="about" className="lg:h-sectionHeight scroll-my-14" data-aos="fade-up">
      <div className="py-6 text-center lg:text-left">
        <Title text={titleContent} />
      </div>
      <div className="flex flex-col lg:flex-row  p-10 items-center h-3/4">
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
        <div className="w-1/2 h-full pb-6 lg:pb-0 flex justify-center items-center">
            <div className="rounded-lg hidden lg:w-3/5 lg:block overflow-hidden">
              <img
                className="object-contain w-4/5"
                src={th}
                alt="web developer"
              />
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
