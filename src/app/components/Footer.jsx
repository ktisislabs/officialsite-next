import React from 'react';
import Image from 'next/image';
import WhiteLogo from '../../../public/Logo-white.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className='w-screen bg-black text-white  flex-wrap items-center justify-evenly hidden sm:flex'>
        {/* Logo Section */}
        <div className='mb-6 sm:mb-0'>
          <Image src={WhiteLogo} alt='Ktisis-Logo' width={100} height={100} />
        </div>

        {/* Newsletter Section */}
        <div className='text-center text-sm bg-black text-white ml-32'>
          © 2024 Ktisis Labs. All rights reserved.
        </div>

        {/* Social Media Section */}
        <div className='flex items-center gap-4'>
          <p className='text-sm font-bold'>Follow Us </p>
          <a href="https://wa.me/919289183829" target="_blank" rel="noopener noreferrer">
  <IoLogoWhatsapp className="text-white hover:text-gray-400 cursor-pointer" size={20} />
</a>
        <a href="https://www.instagram.com/ktisislabs/" target='_blank'> <RiInstagramFill className='text-white hover:text-gray-400 cursor-pointer' size={20} /></a> 
        <a href="https://www.linkedin.com/company/ktisis-labs" target='_blank'>   <FaLinkedinIn className='text-white hover:text-gray-400 cursor-pointer' size={20} /></a>
        <a href="https://x.com/KtisisL24135" target='_blank'>  <FaTwitter className='text-white hover:text-gray-400 cursor-pointer' size={20} /></a>
        </div>
      </section>
    </>
  );
}

export default Footer;
