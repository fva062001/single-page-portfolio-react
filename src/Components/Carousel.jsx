import React, { useState } from "react";
import Carouselx from "react-simply-carousel";
import image1 from './image-slide-1.jpg';
import image2 from './image-slide-2.jpg';
import image3 from './image-slide-3.jpg';
import image4 from './image-slide-4.jpg';
import image5 from './image-slide-5.jpg';

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const photos = [image1,image2,image3,image4,image5];
  return (
    <div>
        <h3 className="mt-20 mb-10 text-center text-base font-bold">My work</h3>
      <Carouselx
        containerProps={{
          style: {
            width: "120%",
            position:"absolute",
            left:-140
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: "🡺",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            bottom:0,
            right:840,
            borderRadius:100,
            position:"absolute",
            background: "black",
            color:"white"
          }
        }}
        backwardBtnProps={{
          children: "🡸",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            bottom:0,
            left:840,
            borderRadius:100,
            background:"black",
            color:"white",
            alignSelf: "center",
            position:"absolute",
          }
        }}
        dotsNav={{
          show: false,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={3}
        speed={400}
      >
        {Array.from({ length: 5 }).map((item, index) => (
          <div key={index} className=" w-[35vw] h-[65vh] border-x-8  border-transparent">
            <img className="rounded-xl w-[540px] h-[360px]" src={photos[index]} alt="" />
          </div>
        ))}
      </Carouselx>
    </div>
  );
}

export default Carousel;