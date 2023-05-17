import React from "react";
import module1 from "../assets/img/pattern-graphic-design.svg";
import module2 from "../assets/img/pattern-ui-ux.svg";
import module3 from "../assets/img/pattern-apps.svg";
import module4 from "../assets/img/pattern-illustrations.svg";
import module5 from "../assets/img/pattern-photography.svg";
import module6 from "../assets/img/pattern-motion-graphics.svg";

function Grid() {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row md:flex-wrap lg:flex-nowrap md:flex-row justify-between md:h-[30vh] lg:h-[40vh] h-[150vh] lg:space-y-0 md:space-y-0 space-y-6 lg:space-x-8">
        <div className="bg-[#755CDE] md:w-[48%] p-2 rounded-lg h-full lg:w-4/12 w-12/12 relative">
          <img className="absolute right-5 top-5" src={module1} alt="" />
          <p className="absolute bottom-5 left-5 font-bold text-white">
            Graphic Design
          </p>
        </div>

        <div className="flex flex-col md:w-[48%] space-y-8 w-full h-full lg:w-4/12 lg:h-12/12">
          <div className="flex flex-row justify-between space-x-6 lg:space-x-8 w-12/12 h-[50%] lg:h-[55%]">
            <div className="bg-[#F6A560] relative rounded-lg w-6/12 h-full">
              <img className="absolute top-5 right-5" src={module2} alt="" />
              <p className="absolute bottom-5 left-5 font-bold text-white">
                UI/UX
              </p>
            </div>
            <div className="bg-[#F39E9E] relative rounded-lg w-6/12 h-full">
              <img className="absolute top-5 right-5" src={module3} alt="" />
              <p className="absolute bottom-5 left-5 font-bold text-white">
                Apps
              </p>
            </div>
          </div>

          <div className="bg-[#EB7565] relative w-12/12 h-[50%] lg:h-[40%] rounded-lg">
            <img className="absolute top-5 right-5" src={module4} alt="" />
            <p className="absolute bottom-5 left-5 font-bold text-white">
              Illustrations
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col lg:flex-col md:space-x-4 md:w-full md:pt-10 lg:pt-0 md:space-y-0 lg:space-x-0 lg:space-y-8 space-y-8 lg:h-full w-full h-full md:h-[50%] lg:w-4/12">
          <div className="bg-[#61C4B7] relative w-12/12 lg:w-full  md:h-full md:w-[49%] h-[50%] lg:h-[55%] rounded-lg">
            <img className="absolute top-5 right-5" src={module5} alt="" />
            <p className="absolute bottom-5 left-5 font-bold text-white">
              Photography
            </p>
          </div>
          <div className="bg-[#552049] md:h-full lg:w-full relative w-12/12 md:w-[49%] h-[50%] lg:h-[40%] rounded-lg">
            <img className="absolute top-5 right-5" src={module6} alt="" />
            <p className="absolute bottom-5 left-5 font-bold text-white">
              Motion Graphics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
