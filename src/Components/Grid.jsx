import React from "react";
import module1 from './pattern-graphic-design.svg'
import module2 from './pattern-ui-ux.svg'
import module3 from './pattern-apps.svg'
import module4 from './pattern-illustrations.svg'
import module5 from './pattern-photography.svg'
import module6 from './pattern-motion-graphics.svg'
function Grid(){
    return(
        <div className="flex space-x-7">
            <div className="bg-[#755CDE] p-2 rounded-lg w-[354px] h-[364px] relative">
                <img className="absolute right-5 top-5" src={module1} alt="" />
                <p className="absolute bottom-5 left-5 font-bold text-white">Graphic Design</p>
            </div>
            <div className="flex flex-col space-y-6">
                <div className="flex flex-row space-x-7">
                    <div className="bg-[#F6A560] relative rounded-lg w-[164px] h-[182px]">
                        <img className="absolute top-5 right-5" src={module2} alt="" />
                        <p className="absolute bottom-5 left-5 font-bold text-white">UI/UX</p>
                    </div>
                    <div className="bg-[#F39E9E] relative rounded-lg w-[164px] h-[182px]">
                        <img className="absolute top-5 right-5" src={module3} alt="" />
                        <p className="absolute bottom-5 left-5 font-bold text-white">Apps</p>
                    </div>
                </div>
                <div className="bg-[#EB7565] relative w-[354px] h-[158px] rounded-lg">
                    <img className="absolute top-5 right-5" src={module4} alt="" />
                    <p className="absolute bottom-5 left-5 font-bold text-white">Illustrations</p>
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                <div className="bg-[#61C4B7] relative w-[354px] h-[182px] rounded-lg">
                    <img className="absolute top-5 right-5" src={module5} alt="" />
                    <p className="absolute bottom-5 left-5 font-bold text-white">Photography</p>
                </div>
                <div className="bg-[#552049] relative w-[354px] h-[158px] rounded-lg">
                    <img className="absolute top-5 right-5" src={module6} alt="" />
                    <p className="absolute bottom-5 left-5 font-bold text-white">Motion Graphics</p>
                </div>
            </div>
        </div>
    );
}

export default Grid;