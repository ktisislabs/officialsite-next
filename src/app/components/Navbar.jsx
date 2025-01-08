'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import LogoWhite from '../../../public/Logo-white.png'; 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; // Missing import for the close icon
import Link from 'next/link'; // Add missing import for Link
import BlackLogo from '../../../public/Logo2.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
          <li className="font-sans text-lg font-medium p-5 md:p-0  cursor-pointer flex items-center gap-5">
            
            <IoLogoWhatsapp className='hover:text-gray-500 cursor-pointer'/>
            <RiInstagramFill className='hover:text-gray-500 cursor-pointer'/>
            <FaLinkedinIn className='hover:text-gray-500 cursor-pointer'/>
            <FaTwitter className='hover:text-gray-500 cursor-pointer'/>
            
          </li>
          <li className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <Image
              src={BlackLogo}
              alt="ktisi-logo"
              width={350}
              height={250}
              className="mr-24"
            />
          </li>
        </ul>
      );
    }
    return null;
  };

  return (
    <>
      <nav className="Navbar w-screen absolute z-30 flex items-center bg-none justify-between bg-transparent ">
        <div className="Logo-div px-2">
       <Link href='/Home'>  <Image src={LogoWhite} alt="KtisisLabs-Logo" width={150} height={100} /></Link> 
        </div>

        <ul className="Navigation-List hidden bg-none  md:flex items-center gap-10 px-5">
          <li className=" hover:text-gray-500 cursor-pointer font-sans text-lg font-medium">Home</li>
          <li className=" hover:text-gray-500 cursor-pointer font-sans text-lg font-medium">About</li>
          <li className=" hover:text-gray-500 cursor-pointer font-sans text-lg font-medium">Services</li>
          <li className=" hover:text-gray-500 cursor-pointer font-sans text-lg font-medium">Works</li>
          <li className=" hover:text-gray-500 cursor-pointer font-sans text-lg font-medium">Get a quote</li>
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
