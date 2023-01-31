import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <section>
      <div className="container overflow-hidden w-full  flex justify-between md:p-12 p-6 mx-auto items-baseline">
        {/* hambugger button */}
        <div className="flex md:hidden text-3xl ">
            <AiOutlineMenu />
        </div>
        <div>
            {/* main header */}
          <h1 className="text-bold text-3xl font-semibold clash-d2 uppercase leading-[150%]">Artsy.</h1>
        </div>

       {/* NAV */}
          <ul className="md:flex gap-8 hidden">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/marketplace">Marketplace</Link>
            </li>
            <li>
            <Link to="/auctions">Auctions</Link>
            </li>
            <li>
            <Link to="/drop">Drop</Link>
            </li>
          </ul>
       
            {/* NAV ICONS */}
        <div className="flex gap-2 align-baseline text-xl">
          <BiSearch />
          <div className="relative flex items-center justify-center">
            <BsCart3 className=" cursor-pointer" />
                <div className="absolute -right-3 -top-3  w-4 h-4 rounded-full flex items-center justify-center bg-red-600">
                <p className="text-xs text-white font-semibold">1</p>
                </div>
          </div>
          <MdNotificationsNone className="hidden md:block" />
        </div>

      </div>
    </section>
  );
};
