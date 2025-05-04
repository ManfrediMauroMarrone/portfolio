import React, { useEffect } from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

//images

import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css.png";
import git from "../assets/images/git.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import node from "../assets/images/node.png";
import react from "../assets/images/react.png";
import sass from "../assets/images/sass.png";
import tailwind from "../assets/images/tailwind.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const titleContent = (
    <span>
      <span className="underline decoration-secondary">Technical</span> Skills
    </span>
  );
  return (
    <section id="skills" className="lg:h-sectionHeight scroll-my-14" data-aos="fade-up">
      <div className="py-6 text-center lg:text-left">
        <Title text={titleContent} />
      </div>
      <div className="py-10">
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"4"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={html} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={css} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={js} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={react} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={node} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bootstrap} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tailwind} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={git} />
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 lg:h-80 flex items-center">
              <img src={sass} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;
