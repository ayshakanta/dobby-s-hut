import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import slide5 from "../../assets/images/slide5.jpg";
import slide6 from "../../assets/images/slide6.jpg";

const Home = () => {
  const resorts = useLoaderData();
  console.log(resorts);
  return (
    <div className="mx-10 md:mx-24 lg:mx-28">
      <div>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide1})` }}
            >
              <h1 className="">slide1</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide2})` }}
            >
              <h1 className="">slide1</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide3})` }}
            >
              <h1 className="">slide1</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide4})` }}
            >
              <h1 className="">slide1</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide5})` }}
            >
              <h1 className="">slide1</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide6})` }}
            >
              <h1 className="">slide1</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
