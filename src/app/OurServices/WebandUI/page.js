import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WebDesignImg from '../../../../public/webdesign.jpg';
import WebDesignBG from '../../../../public/webdesignbg.jpg';
import Link from 'next/link';
import Image from 'next/image';
function WebDesign() {
  return (
    <>
 
      <div className='WebDesign-Section w-screen h-screen overflow-y-auto overflow-x-hidden'>
        <Navbar />

        {/* Header Section */}
        <section className='w-screen h-96 flex items-center justify-center flex-col bg-black px-4 text-center'>
          <p className='text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold'>UI/UX Design and Web Design</p>
          <p className='text-white font-poppins font-medium my-5 text-sm md:text-base lg:text-lg'>
          Crafting visually stunning, user-friendly, and responsive UI/UX and web designs that captivate and engage your audience.
          </p>
        </section>

        {/* Service Description Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Service Description</h2>

            <p className='text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed'>
            UI/UX and Web design combine the art and science of crafting visually appealing, functional, and responsive digital experiences. We focus on intuitive user flows, user-centered navigation, and stunning aesthetics to ensure seamless interactions across all devices. From selecting the perfect design elements to creating layouts that reflect your brand identity, we tailor our solutions to captivate your audience and elevate your digital presence. Whether it’s a website, app, or platform, we deliver designs that inspire, engage, and drive results
            </p>

            {/* Image and Process List Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              {/* Image */}
              <div className='w-full md:w-1/2 flex justify-center'>
                <Image 
                  src={WebDesignImg} 
                  alt='Web Design' 
                  className='w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg'
                />
              </div>

              {/* Process List */}
              <div className='w-full md:w-1/2'>
                <ul className='space-y-5'>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Research & Planning</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Wireframing</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Visual Design</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Prototyping</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Responsive Implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      {/* Benefits Section */}
{/* Benefits Section */}
<section className='w-screen bg-black py-16 px-4 md:px-16'>
  <div className='max-w-6xl mx-auto text-center'>
    <h2 className='text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Benefits</h2>
    <ul className='text-white font-poppins text-sm md:text-base lg:text-lg space-y-5 text-left md:text-left'>
      <li><strong>Brand Identity:</strong> Build a cohesive and unique identity with tailored UI/UX and web designs.</li>
      <li><strong>User Engagement:</strong> Enhance interaction with intuitive, user-centered interfaces.</li>
      <li><strong>Responsive Design:</strong> Deliver seamless experiences across all devices and screen sizes.</li>
      <li><strong>Optimized Performance:</strong> Combine aesthetics with functionality for faster and effective user journeys.</li>
      <li><strong>Professional Appeal:</strong> Create visually striking, modern designs that leave a lasting impression.</li>
    </ul>
  </div>
</section>



        {/* Final Call-to-Action Section */}
        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <Image
            src={WebDesignBG}
            alt="background-image"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          <h1 className="font-poppins font-extrabold text-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Design <span className="font-extrabold text-black">that inspires</span>
          </h1>
          <p className="font-poppins text-gray-800 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
            Let us transform your vision into captivating designs that resonate with your audience.
          </p>
          <Link href='/Quotation'>  <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
                  Get in Touch <span className="ml-2">•</span>
                </button></Link>
        </section>
        <Footer />
      </div>
    </>
  );
}


export default WebDesign