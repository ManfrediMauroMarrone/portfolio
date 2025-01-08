import React from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";

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
  return (
    <section id="skills" className="h-sectionHeight">
      <div className="flex justify-center py-6">
        <Title text={"Skills"} />
      </div>
      <div className="py-20">
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
            slideShadows: true,
          }}
          pagination={false}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src\assets\images\html.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src\assets\images\css.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src\assets\images\js.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src\assets\images\react.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src\assets\images\node.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src\assets\images\bootstrap.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src\assets\images\tailwind.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="src\assets\images\git.png" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-80 flex items-center">
              <img src="src\assets\images\sass.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;
