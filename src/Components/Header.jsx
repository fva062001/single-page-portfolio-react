import React from "react";
import logo from "../assets/img/logo.svg";
function Header(props){
    return (
      <div className="flex">
        <img
          className="lg:w-16 lg:h-16 md:w-16 md:h-16 w-12 h-12"
          src={logo}
          alt=""
        />
        <button className="bg-[#030303] lg:h-16 md:h-16 h-12 my-auto font-bold text-[#FFF7F0] rounded-6xl ml-auto rounded-full lg:px-16 md:px-16 px-6 hover:bg-[#755CDE]">
          Free Consultation
        </button>
      </div>
    );
}

export default Header;