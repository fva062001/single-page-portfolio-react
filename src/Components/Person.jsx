import React from "react";
import image from './image-amy.webp'

function Person(){
    return(
        <div className="relative flex flex-row mt-40">
            <img className="w-96 h-96" src={image} alt="" />
            <div className="absolute my-auto w-7/12 right-0">
                <h1 className="font-bold text-[40px] break-word">I’m Amy, and I’d love to work on your next project</h1>
                <p className="text-sm mt-7 font-medium text-[#7A746E]">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                <button className="bg-[#EB7565] h-12 my-auto text-[#FFF7F0] font-bold rounded-6xl ml-auto rounded-full px-9 hover:bg-[#F6A560] mt-7">Free Consultation</button>
            </div>
        </div>
        
    );
}

export default Person;