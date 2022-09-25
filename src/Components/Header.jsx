import React from "react";
import logo from './logo.svg';
function Header(props){
    return(
        <div className="flex">
            <img className="w-15 h-15 " src={logo} alt="" />
            <button className="bg-[#030303] h-12 my-auto font-bold text-[#FFF7F0] rounded-6xl ml-auto rounded-full px-9 hover:bg-[#755CDE]">Free Consultation</button>
        </div>
    );
}

export default Header;