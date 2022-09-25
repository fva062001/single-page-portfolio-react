import React from "react";
import image from './image-amy.webp'

function Person(){
    return(
        <div className="relative flex flex-row mt-40 sm:mt-20 flex-col items-center">
            <img className="w-96 h-96 sm:w-80 h-80" src={image} alt="" />
            <div className="absolute my-auto w-7/12 right-0 sm:static w-10/12 mt-10 justify-content">
                <h1 className="font-bold text-[40px] break-word sm:font-extrabold text-[6vw] break-words text-center">I’m Amy, and I’d love to work on your next project</h1>
                <p className="text-sm mt-7 font-medium text-[#7A746E] sm:text-center text-4vw]">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                <button className="bg-[#EB7565] h-12 my-auto text-[#FFF7F0] font-bold rounded-6xl ml-auto rounded-full px-9 hover:bg-[#F6A560] mt-7 sm:ml-[16vw]">Free Consultation</button>
            </div>
        </div>
        
    );
}

export default Person;