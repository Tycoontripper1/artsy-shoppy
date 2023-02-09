import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

export const Header = () => {
  const { cart } = useGlobalContext();
  const mobileNav = useRef();

  const switchActive = (id) => {
    
    // sets active navigation menu
    document.querySelectorAll(".nav-items li").forEach((item) => {
      // remove active from all navigations
      item.classList.remove("active");
    });
    // Set active to the clicked item
    document.getElementById(id).classList.add("active");
    
  };

  // Showing or hide navigation for mobile
  const toggleNav = () => {
    mobileNav.current.classList.toggle("w-0");
  };
  return (
    <section>
      <div
        ref={mobileNav}
        className="h-screen w-full bg-white z-[9999] fixed top-0 left-0 pt-8 transition-all w-0 overflow-hidden"
      >
        <ImCancelCircle
          onClick={toggleNav}
          className="absolute top-8 right-6 w-[26px] h-[26px]"
        />
        <Link to="/">
          <h1 className="px-[30px] text-grey-dark text-[1.5rem] mb-[50px] font-bold font-stix">
            ARTSY.
          </h1>
        </Link>
        <ul className="px-[30px]">
          <li onClick={toggleNav} data-id="home" className="mobile-nav">
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleNav} data-id="marketplace" className="mobile-nav">
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li onClick={toggleNav} data-id="auctions" className="mobile-nav">
            <Link to="/auctions">Aunctions</Link>
          </li>
          <li onClick={toggleNav} data-id="drop" className="mobile-nav">
            <Link to="/drop">Drop</Link>
          </li>
        </ul>
        <div className="w-16 h-16 bg-blue rounded-full absolute right-8 bottom-16 shadow-7xl flex items-center justify-center">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 29V2.9C0 2.1025 0.2842 1.41955 0.8526 0.85115C1.42003 0.283716 2.1025 0 2.9 0H26.1C26.8975 0 27.5805 0.283716 28.1489 0.85115C28.7163 1.41955 29 2.1025 29 2.9V20.3C29 21.0975 28.7163 21.7805 28.1489 22.3489C27.5805 22.9163 26.8975 23.2 26.1 23.2H5.8L0 29Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="container overflow-hidden w-full  flex justify-between md:p-12 p-6 mx-auto items-baseline  ">
        {/* hambugger button */}
        <div className="flex md:hidden text-3xl" onClick={toggleNav}>
          <AiOutlineMenu />
        </div>
        <div>
          {/* main header */}
          <Link>
            <h1 className="text-bold text-3xl font-semibold clash-d2 uppercase leading-[150%]">
              Artsy.
            </h1>
          </Link>
        </div>

        {/* NAV */}
        <ul className="md:flex gap-8 hidden nav-items">
          <li onClick={() => switchActive("home")} className="active" id="home">
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => switchActive("marketplace")} id="marketplace">
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li onClick={() => switchActive("auctions")} id="auctions">
            <Link to="/auctions">Auctions</Link>
          </li>
          <li onClick={() => switchActive("drop")} id="drop">
            <Link to="/drop">Drop</Link>
          </li>
        </ul>

        {/* NAV ICONS */}
        <div className="flex gap-2 align-baseline text-xl">
          <BiSearch />
          <div className="relative flex items-center justify-center">
            <Link to="/carts">
              <BsCart3 className=" cursor-pointer" />
            </Link>

            {cart && cart.length > 0 && (<div className="absolute -right-3 -top-3  w-4 h-4 rounded-full flex items-center justify-center bg-red-600">
              <p className="text-xs text-white font-semibold">{cart.length}</p>
            </div>)}
          </div>
          <Link to='/drop'>
            <MdNotificationsNone className="hidden md:block" />
          </Link>
        </div>
      </div>
    </section>
  );
};
