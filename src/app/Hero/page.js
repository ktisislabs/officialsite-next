import React from 'react';
import Navbar from '../components/Navbar';
import { ServiceHeroData } from '../Data/ServicesHero';
import Image from 'next/image';

function Page() {
  return (
    <>
      <div className="Hero-Section w-screen h-screen overflow-x-hidden overflow-y-auto relative">
        {/* Navbar */}
        <Navbar />

        {/* Hero Landing Section */}
        <div className="Hero-Landing w-screen h-screen relative">
          {/* Background Video */}
          <video
            src="/background.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
            aria-label="Background Video"
          ></video>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 z-10 text-white">
            {/* Small Subtitle */}
            <h1 className="text-lg md:text-2xl font-light font-sans text-center">
              Empowering Ideas
            </h1>

            {/* Large Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-center">
              Engineering Success
            </h1>
          </div>
        </div>

        {/*Hero-Services*/}
        <section className="w-screen py-20 px-4 bg-black flex flex-col items-center">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-10">
            <p className="text-black bg-white p-2 rounded-xl font-medium font-sans">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold my-2">How can we help you?</h2>
            <p className='my-5 text-2xl text-center font-medium'>Transparency, reliability, and outstanding customer experiences are at the core of our values.<br></br> We take pride in fostering strong relationships with our clients, communicating openly at every stage of the development process.</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {ServiceHeroData.map((service, index) => (
              <div
                key={index}
                className="bg-white border shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-4">
                  {service.Icon && <service.Icon size={35} className='text-black'/>}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{service.Service_name}</h3>
                <p className="text-gray-700">{service.Service}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-screen h-auto py-12 md:py-16 flex flex-col md:flex-row items-center justify-around px-6 md:px-16 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600">
  {/* Text */}
  <div className="text-center md:text-left text-3xl sm:text-4xl lg:text-4xl font-medium text-white mb-6 md:mb-0">
    Start working with us and bring your ideas to life 
  </div>

  {/* Button */}
  <button className="px-8 py-4 rounded-lg bg-black text-white text-lg font-semibold hover:bg-gray-700">
    Call Now - +91 9289183829
  </button>
</section>



        <section className='w-screen h-screen flex items-center justify-center'>
          hello
        </section>


      </div>
    </>
  );
}

export default Page;
