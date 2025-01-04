'use client'
import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import Image from "next/image";
import Logo from '../../../public/Logo2.png'


export default function Home() {
  return (
    <> 
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
         <Image src={Logo} alt="Ktisis-Labs-Logo" width={400} height={200}/>
        </p>
      </div>
    </BackgroundGradientAnimation>
    </div>
       
    </>
  );
}
