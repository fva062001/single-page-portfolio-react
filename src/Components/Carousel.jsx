import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/online-web-design.jpg";
import image3 from "../assets/img/image2.jpg";
import image4 from "../assets/img/image3.jpg";
import image5 from "../assets/img/image4.jpg";

function Carousel() {
  const photos = [image1, image2, image3, image4, image5];
  return (
    <div className="w-full flex justify-center">
      {" "}
      {/* Add the "justify-center" class to center the swiper */}
      <div className="w-[100vw]">
        <h3 className="mt-20 mb-10 text-center text-base font-bold">My work</h3>
        <Swiper slidesPerView={3} centeredSlides={true}>
          {photos.map((item) => (
            <SwiperSlide key={item}>
              <div
                className="w-[40vw] h-[40vh] rounded-xl"
                style={{
                  background: `url(${item})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
