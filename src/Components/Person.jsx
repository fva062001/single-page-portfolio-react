import React from "react";
import image from "../assets/img//image-amy.webp";

function Person(){
    return (
      <div className="relative flex lg:flex-row md:flex-row flex-col lg:mt-32 md:mt-64 mt-12 text-center md:text-left lg:text-left">
        <img className="lg:w-96 lg:h-96 md:w-96 md:h-96" src={image} alt="" />
        <div className="mt-10 lg:mt-0 md:mt-0 lg:absolute md:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-6/12 md:w-[45%] right-0">
          <h1 className="font-bold lg:text-[40px] text-[30px] md:text-base break-word">
            I’m Amy, and I’d love to work on your next project
          </h1>
          <p className="text-sm mt-7 font-medium text-[#7A746E]">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <button className="bg-[#EB7565] h-12 my-auto text-[#FFF7F0] font-bold rounded-6xl ml-auto rounded-full px-9 hover:bg-[#F6A560] mt-7">
            Free Consultation
          </button>
        </div>
      </div>
    );
}

export default Person;