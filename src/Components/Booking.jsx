import React from "react";

function Booking(){
    return(
        <div className="mb-20 p-20 rounded-xl flex flex-row w-fit h-fit bg-black sm: flex flex-col p-8 mx-2 my-10">
            <div className=" my-auto w-7/12 right-0 sm: w-full text-center">
                <h1 className="font-bold text-white text-[40px] break-word sm: text-base">Book a call with me</h1>
                <p className="text-sm mt-7  font-medium text-white sm:font-light mb-10">I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
            </div>
            <button className="bg-[#EB7565] h-12 my-auto text-[#FFF7F0] font-bold rounded-6xl ml-auto rounded-full px-9 hover:bg-[#F6A560] mt-7 sm:px-6 mx-auto mt-2">Free Consultation</button>
        </div>
    );
}

export default Booking;