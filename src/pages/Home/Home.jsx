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
import ResortCard from "./ResortCard";

const Home = () => {
  const resorts = useLoaderData();
  console.log(resorts);
  return (
    <div className="mx-10 mt-10 md:mx-24 lg:mx-28">
      <div className="drop-shadow-lg">
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
              <div className="text-center items-center flex justify-center">
                <h1 className="text-white text-2xl w-1/2 text-center items-center bg-gray-500 bg-opacity-50 p-5 rounded-2xl drop-shadow-2xl">
                  Experience the serenity of the mountains in our cozy chalets
                  nestled amidst towering pines and breathtaking alpine vistas.
                  Perfect for nature lovers and outdoor enthusiasts.
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide2})` }}
            >
              <div className="text-center items-center flex justify-center">
                <h1 className="text-white text-2xl w-1/2 text-center items-center bg-gray-500 bg-opacity-50 p-5 rounded-2xl drop-shadow-2xl">
                  Escape to paradise with our luxurious beachfront villas,
                  offering stunning ocean views, private pools, and exclusive
                  access to pristine white sands.
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide3})` }}
            >
              <div className="text-center items-center flex justify-center">
                <h1 className="text-white text-2xl w-1/2 text-center items-center bg-gray-500 bg-opacity-50 p-5 rounded-2xl drop-shadow-2xl">
                  Discover the ultimate tropical retreat in our charming
                  bungalows, surrounded by lush gardens, swaying palm trees, and
                  crystal-clear waters. Your island oasis awaits.
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide4})` }}
            >
              <div className="text-center items-center flex justify-center">
                <h1 className="text-white text-2xl w-1/2 text-center items-center bg-gray-500 bg-opacity-50 p-5 rounded-2xl drop-shadow-2xl">
                  Embark on a wild adventure with our luxurious safari tents,
                  offering unparalleled views of the African savannah and
                  unforgettable safari experiences right at your doorstep.
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide5})` }}
            >
              <div className="text-center items-center flex justify-center">
                <h1 className="text-white text-2xl w-1/2 text-center items-center bg-gray-500 bg-opacity-50 p-5 rounded-2xl drop-shadow-2xl">
                  Indulge in the luxury of ski-in/ski-out chalets nestled in the
                  heart of the Alps, offering panoramic mountain views and
                  direct access to world-class skiing and snowboarding.
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-96 flex justify-center items-center w-full bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slide6})` }}
            >
              <div className="text-center items-center flex justify-center">
                <h1 className="text-white text-2xl w-1/2 text-center items-center bg-gray-500 bg-opacity-50 p-5 rounded-2xl drop-shadow-2xl">
                  Unwind in style at our exclusive island resort, where pristine
                  beaches, azure waters, and luxurious accommodations await.
                  Experience the height of luxury in your own private paradise.
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* resort card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {resorts.map((resort) => (
          <ResortCard key={resort.id} resort={resort}></ResortCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
