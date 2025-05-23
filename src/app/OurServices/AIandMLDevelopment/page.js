import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Footer from '../../components/Footer';
import AI from '../../../../public/AI.jpg';
import AIBG from '../../../../public/AIBG.jpg';
import Link from 'next/link';

function page() {
  return (
    <>
      <div className='AI-ML-Section w-screen h-screen overflow-y-auto overflow-x-hidden'>
        <Navbar />

        {/* Header Section */}
        <section className='w-screen h-96 flex items-center justify-center flex-col bg-black px-4 text-center'>
          <p className='text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold'>AI & ML Development</p>
          <p className='text-white font-poppins font-medium my-5 text-sm md:text-base lg:text-lg'>
            Empower your business with cutting-edge AI & ML solutions, enabling automation, data-driven insights, and unparalleled efficiency.
          </p>
        </section>

        {/* Service Description Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Service Description</h2>
            <p className='text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed'>
              AI and ML development focuses on building intelligent systems that learn and improve from data. Our solutions leverage machine learning models, deep learning techniques, and advanced data analytics to automate processes, enhance decision-making, and unlock new business opportunities. Whether it's predictive analytics, NLP, or computer vision, we tailor AI solutions to optimize efficiency and innovation.
            </p>

            {/* Image and Process List Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              {/* Image */}
              <div className='w-full md:w-1/2 flex justify-center'>
                <Image 
                  src={AI} 
                  alt='AI Development' 
                  className='w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg'
                />
              </div>

              {/* Process List */}
              <div className='w-full md:w-1/2'>
                <ul className='space-y-5'>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Data Collection & Preparation</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Model Development & Training</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Testing & Optimization</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Deployment & Integration</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Continuous Monitoring & Improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Benefits</h2>
            <ul className='text-white font-poppins text-sm md:text-base lg:text-lg space-y-5'>
              <li><strong>Smart Automation:</strong> Leverage AI-driven automation to enhance efficiency and reduce human effort.</li>
              <li><strong>Predictive Insights:</strong> Use advanced analytics and ML models to forecast trends and make data-driven decisions.</li>
              <li><strong>Scalability & Adaptability:</strong> Our AI solutions grow with your business, adapting to new challenges seamlessly.</li>
              <li><strong>Improved Customer Experience:</strong> Implement AI-powered chatbots, recommendation systems, and NLP for enhanced user interaction.</li>
              <li><strong>Cost Reduction:</strong> Minimize operational costs through intelligent automation and process optimization.</li>
              <li><strong>Security & Fraud Detection:</strong> Utilize AI-driven threat detection and fraud prevention mechanisms for robust cybersecurity.</li>
              <li><strong>Custom AI Models:</strong> Develop and deploy tailored AI models that align with your business objectives.</li>
              <li><strong>Seamless Integration:</strong> Our AI solutions integrate effortlessly with your existing systems and workflows.</li>
            </ul>
          </div>
        </section>

        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Image */}
          <Image
            src={AIBG}
            alt="background-image"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
  
          {/* Heading */}
          <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Innovate with <span className="font-extrabold text-white">AI & ML</span>
          </h1>
  
          {/* Subtext */}
          <p className="font-poppins text-gray-100 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
            Transform your business with AI-powered solutions, optimized decision-making, and intelligent automation tailored to your unique needs.
          </p>
  
          {/* Button */}
          <Link href='/Quotation'>  <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
              Get in Touch <span className="ml-2">•</span>
            </button></Link>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default page;