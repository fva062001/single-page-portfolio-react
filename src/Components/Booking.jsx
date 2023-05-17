import React from "react";

function Booking(){
    return (
      <div className="my-20 lg:p-20 md:p-20 p-8 rounded-xl flex flex-col lg:flex-row md:flex-col justify-between md:text-center lg:text-left text-center bg-black">
        <div className="lg:w-7/12 ">
          <h1 className="font-bold text-white lg:text-[40px] text-[30px] md:text-[40px] break-word">
            Book a call with me
          </h1>
          <p className="lg:text-sm md:text-sm text-[15px] mt-7  font-normal text-white">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <button className="bg-[#EB7565] md:mt-10 mt-10 mx-auto lg:mx-0 lg:w-4/12 md:w-6/12 h-12 my-auto font-bold text-[#FFF7F0] rounded-6xl rounded-full px-9 hover:bg-[#F6A560]">
          Free Consultation
        </button>
      </div>
    );
}

export default Booking;