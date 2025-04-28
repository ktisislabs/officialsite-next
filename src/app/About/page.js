import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export const metadata = {
  title: "About Us | Ktisis Labs",
  description: "Learn more about Ktisis Labs and our mission to drive innovation and empowerment.",
};

function page() {
 
  return (
    
    <>
         <div className="About-Section w-screen h-screen overflow-x-hidden overflow-y-auto relative bg-black">
         <Navbar/>
         <div className="About-Section w-full h-full absolute flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 text-center space-y-8 bg-black bg-opacity-50">
 
         <h1 className="text-white font-poppins text-4xl md:text-5xl font-bold">
            Welcome to <span className="text-white">KtisisLabs</span>
          </h1>
          <p className="text-white font-poppins text-lg md:text-xl max-w-4xl">
            We blend technology and innovation to empower businesses and elevate their digital presence. At Ktisis Labs, we specialize in comprehensive IT solutions that drive success.
          </p>

          <p className="text-gray-300 font-poppins text-md md:text-lg max-w-3xl">
            From robust software development and cutting-edge technology consulting to seamless web and app design, our team is dedicated to crafting digital products that are efficient, user-centric, and future-ready. With a keen focus on UI/UX design, we ensure that every solution not only meets our clients’ functional needs but also creates intuitive and engaging experiences.
          </p>

          <p className="footer-text-about text-gray-400 font-poppins text-sm md:text-md max-w-2xl ">
          Connect : connect.ktisislabs@gmail.com
          </p>
         </div>
        </div>

        <Footer/>
    </>
  )
}




export default page ; 