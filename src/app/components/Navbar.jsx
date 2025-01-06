'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import LogoWhite from '../../../public/Logo-white.png'; 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; // Missing import for the close icon
import Link from 'next/link'; // Add missing import for Link

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu); // Toggle menu based on the current state
  };

  const renderMenu = () => {
    if (menu) {
      return (
        <ul
          className={`Navigation-List fixed top-0 right-0 h-screen w-3/4 bg-white text-black transform ${
            menu ? "translate-x-0" : "translate-x-full"
          } transition-transform md:static md:flex md:flex-row md:items-center md:gap-5 md:bg-transparent md:h-auto md:w-auto z-50`}
        >
          {/* Close Icon */}
          <div
            className="Close-Icon absolute top-5 right-5 text-2xl text-black cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <IoMdClose />
          </div>

          <li className="font-sans text-lg font-medium p-5 md:p-0 hover:text-gray-500 cursor-pointer">
            <Link href="/Home">Home</Link>
          </li>
          <li className="font-sans text-lg font-medium p-5 md:p-0 hover:text-gray-500 cursor-pointer">
            <Link href="/About">About</Link>
          </li>
          <li className="font-sans text-lg font-medium p-5 md:p-0 hover:text-gray-500 cursor-pointer">
            <Link href="/Services">Services</Link>
          </li>
          <li className="font-sans text-lg font-medium p-5 md:p-0 hover:text-gray-500 cursor-pointer">
            <Link href="/Works">Works</Link>
          </li>
          <li className="font-sans text-lg font-medium p-5 md:p-0 hover:text-gray-500 cursor-pointer">
            <Link href="/Quote">Get a Quote</Link>
          </li>
        </ul>
      );
    }
    return null;
  };

  return (
    <>
      <nav className="Navbar w-screen flex items-center justify-between">
        <div className="Logo-div px-2">
          <Image src={LogoWhite} alt="KtisisLabs-Logo" width={150} height={100} />
        </div>

        <ul className="Navigation-List hidden md:flex items-center gap-5 px-5">
          <li className="font-sans text-lg font-medium">Home</li>
          <li className="font-sans text-lg font-medium">About</li>
          <li className="font-sans text-lg font-medium">Services</li>
          <li className="font-sans text-lg font-medium">Works</li>
          <li className="font-sans text-lg font-medium">Get a quote</li>
        </ul>

        <div className="Hamburger md:hidden px-3 text-xl cursor-pointer" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>

        {renderMenu()}
      </nav>
    </>
  );
}

export default Navbar;
