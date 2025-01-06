import React from 'react'
import Image from 'next/image';
import LogoWhite from '../../../public/Logo-white.png' ; 


function Navbar() {
 return (
    <>
               <nav className='Navbar w-screen border flex items-center justify-between'>
               <div className='Logo-div  px-2'>
                <Image src={LogoWhite} alt='KtisisLabs-Logo' width={150} height={100}></Image>
               </div>
               <ul className='Navigation-List flex items-center gap-5 px-5'>
               <li className='font-sans text-lg font-medium'>Home.</li>
               <li className='font-sans text-lg font-medium'>About.</li>
               <li className='font-sans text-lg font-medium'>Services.</li>
               <li className='font-sans text-lg font-medium'>Works.</li>
               <li className='font-sans text-lg font-medium'>Get a quote.</li>
               

               </ul> 

               </nav>





    </>
  )
}

export default Navbar;