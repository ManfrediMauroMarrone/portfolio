import { Container } from "postcss";
import React from "react";

function Intro() {
  return (
    <section className="text-4xl font-semibold flex p-10 h-sectionHeight">
      <div className="w-1/2 h-full flex items-center justify-center">
        <h2 className="whitespace-pre-line">
            Hi, I am Manfredi Marrone.{"\n"}
            A Full Stack Web Developer.
        </h2>
      </div>
      <div className="w-1/2">
        <iframe src='https://my.spline.design/miniroomremakecopyprogrammerroom-fea314f5236cde93e4d628f1da41a760/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
    </section>
  );
}

export default Intro;
