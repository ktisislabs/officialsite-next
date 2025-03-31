'use client'; 

import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import LogoWhite from '../../../public/Logo-white.png'; 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; // Missing import for the close icon
import Link from 'next/link'; // Add missing import for Link
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <Link href="/OurServices">Services</Link>
          </li>
          {/* <li className="font-sans text-lg font-medium p-5 md:p-0 hover:text-gray-500 cursor-pointer">
            <Link href="/Works">Works</Link>
          </li> */}
          <li className="font-sans text-lg font-medium p-5 md:p-0 hover:text-gray-500 cursor-pointer">
            <Link href="/Quotation">Get a Quote</Link>
          </li>
          <li className="font-sans text-lg font-medium p-5 md:p-0  cursor-pointer flex items-center gap-5">
            
            <a href="https://wa.me/919289183829" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="text-black hover:text-gray-400 cursor-pointer" size={20} />
            </a>
                    <a href="https://www.instagram.com/ktisislabs/" target='_blank'> <RiInstagramFill className='text-black hover:text-gray-400 cursor-pointer' size={20} /></a> 
                    <a href="https://www.linkedin.com/company/ktisis-labs" target='_blank'>   <FaLinkedinIn className='text-black hover:text-gray-400 cursor-pointer' size={20} /></a>
                    <a href="https://x.com/KtisisL24135" target='_blank'>  <FaTwitter className='text-black hover:text-gray-400 cursor-pointer' size={20} /></a>
          </li>
        <Link href="/Home"><li className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <Image
              src="/Logo2.png"
              alt="ktisi-logo"
              width={350}
              height={250}
              className="mr-24"
            />
          </li></Link>  
        </ul>
      );
    }
    return null;
  };

  return (
    <>
     <nav className={`Navbar w-screen absolute z-30 flex items-center justify-between transition-all duration-300 ${scrolling ? 'bg-gray-900 bg-opacity-80' : 'bg-transparent'}`}>

        <div className="Logo-div px-2">
       <Link href='/Home'>  <Image src={LogoWhite} alt="KtisisLabs-Logo" width={150} height={100} /></Link> 
        </div>

        <ul className="Navigation-List hidden bg-none  md:flex items-center gap-10 px-5">
       <Link href='/Home'>   <li className=" hover:text-gray-500 text-white cursor-pointer font-sans text-lg font-medium">Home</li></Link>
        <Link href='/About'>  <li className=" hover:text-gray-500 cursor-pointer font-sans text-lg text-white font-medium">About</li></Link>
        <Link href='/OurServices'>  <li className=" hover:text-gray-500 cursor-pointer font-sans text-white text-lg font-medium">Services</li></Link>
         {/* <Link href='/Work'> <li className=" hover:text-gray-500 cursor-pointer font-sans text-lg font-medium text-white">Works</li></Link> */}
        <Link href='/Quotation'>  <li className=" hover:text-gray-500 cursor-pointer font-sans text-lg text-white font-medium">Get a quote</li></Link>
        </ul>

        <div className="Hamburger md:hidden px-3 text-xl cursor-pointer" onClick={toggleMenu}>
          <GiHamburgerMenu className='text-white'/>
        </div>

        {renderMenu()}
      </nav>
    </>
  );
}

export default Navbar;
