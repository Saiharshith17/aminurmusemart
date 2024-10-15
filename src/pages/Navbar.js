import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar({ bgColor = "#29A841" }){
    return(
        <nav className={`flex justify-between w-full h-[90px] sm:px-2 md:px-7`} style={{ backgroundColor: bgColor }}>
            <div className="w-[13rem] sm:w-[9rem] lg:w-[11rem] mt-3">
            <img className="" src="./megamart_logo1.svg"/>
            </div>
            <div className="relative flex items-center mt-5 w-[30%] h-[50px]">
                <SearchIcon className="absolute left-3 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search for Products, Brands and More"
                    className="flex-auto pl-12 p-2 w-full h-full outline-none rounded-[12px]"
                />
            </div>
            <div className="grid grid-cols-2 gap-1">
            <button className=" mt-5 sm:w-[90px] md:w-[110px] lg:w-[120px] h-[50%] bg-white rounded-full">Login<PersonIcon className="text-gray-500 sm:ml-1 md:ml-3"/></button>
            <button><ShoppingCartIcon fontSize="large" className="text-[#969292]"/></button>
            </div>
            
        </nav>
    )
}