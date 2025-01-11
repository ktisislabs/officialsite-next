import React from 'react';
import Navbar from '../components/Navbar';
import { ServiceHeroData } from '../Data/ServicesHero';
import Image from 'next/image';
import { TestimonialsData } from '../Data/Testimonials';
import Herocta from '../../../public/herocta.jpg'
import Footer from '../components/Footer';

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
            <p className='my-5 text-xl text-center font-regular'>Transparency, reliability, and outstanding customer experiences are at the core of our values.<br></br> We take pride in fostering strong relationships with our clients, communicating openly at every stage of the development process.</p>
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


        <section className="w-screen h-auto relative py-12 md:py-16 flex flex-col md:flex-row items-center justify-around px-6 md:px-16">
  {/* Background Video */}
  <video
    src="/section.mp4"
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover"
    aria-label="Background Video"
  ></video>

  {/* Text Container with background for visibility */}
  <div className="relative z-10 text-center md:text-left text-3xl sm:text-4xl lg:text-4xl font-medium text-white mb-6 md:mb-0  bg-opacity-50 px-4 py-3 rounded-lg">
    Start working with us and bring your ideas to life
  </div>

  {/* Button */}
  <button className="relative z-10 px-8 py-4 rounded-lg bg-white  text-black text-lg font-semibold hover:bg-gray-200">
    Call Now - (+91) 9289183829
  </button>
</section>



<section className="w-screen py-10 bg-black flex flex-col items-center">
<p className="text-black bg-white p-2 rounded-xl font-medium font-sans">
              Testimonials
            </p>
      <h2 className="text-3xl font-semibold my-2 text-white mb-6">What Our Clients Say ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl">
        {TestimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <Image
              src={testimonial.profileImage}
              alt={testimonial.Name}
              className="w-24 h-24 rounded-full mb-4"
            />
             <div className="flex items-center mb-4">
            {Array.from({ length: testimonial.rating || 5 }).map((_, idx) => (
                <span key={idx} className="text-yellow-500 text-2xl">
                  &#9733;
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{testimonial.Name}</h3>
            <p className="text-sm text-gray-600 italic mb-4">{testimonial.Designation}</p>
            
            <p className="text-gray-700">{testimonial.Remark}</p>
           
          </div>
        ))}
      </div>
    </section>

    <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image */}
        <Image
          src={Herocta}
          alt="background-image"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />

        {/* Heading */}
        <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
          Let’s  <br />
          <span className="font-bold text-white">innovate together</span>
        </h1>

        {/* Subtext */}
        <p className="font-poppins text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
          Take the first step towards a brighter future and supercharge your
          business with cutting-edge technologies, expert guidance, and unparalleled support.
        </p>

        {/* Button */}
      <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
          Get in Touch <span className="ml-2">•</span>
        </button> 
      </section>


      <Footer/>


      </div>
    </>
  );
}

export default Page;
