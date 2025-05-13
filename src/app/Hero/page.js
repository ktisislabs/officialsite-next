'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { ServiceHeroData } from '../Data/ServicesHero';
import Image from 'next/image';
// import { TestimonialsData } from '../Data/Testimonials';
import Herocta from '../../../public/herocta.jpg';
import Footer from '../components/Footer';
import Link from 'next/link';

function Page() {
  useEffect(() => {
    document.title = 'Home | Ktisis Labs';

    const descriptionMetaTag = document.querySelector('meta[name="description"]');
    if (descriptionMetaTag) {
      descriptionMetaTag.setAttribute(
        'content',
        'Welcome to Ktisis Labs — Empowering businesses through innovative technology and digital solutions.'
      );
    }
  }, []);

  return (
    <>
      <div className="Hero-Section w-screen h-screen overflow-x-hidden overflow-y-auto relative">
        {/* Navbar */}
        <Navbar />

        {/* Glassmorphism Message Box */}
        <div className="fixed bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-md px-6 py-4 rounded-xl shadow-lg max-w-sm z-50">
          <p className="font-semibold">We’re working on our portfolio</p>
          <p className="text-md text-white/80 mt-1">
           Stay tuned for exciting updates coming soon!
    Till then, keep building, innovating, and stay curious.
          </p>
        </div>

        {/* Hero Landing Section */}
        <div className="Hero-Landing w-screen h-screen relative">
          <video
            src="/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            aria-label="Background Video"
          ></video>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 z-10 text-white">
            <h1 className="text-lg md:text-2xl font-light font-sans text-center">Empowering Ideas</h1>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-center">
              Engineering Success
            </h1>
          </div>
        </div>

        {/* Services Section */}
        <section className="w-screen py-20 px-4 bg-black flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-10">
            <p className="text-black bg-white p-2 rounded-xl font-medium font-sans">Our Services</p>
            <h2 className="text-3xl text-white sm:text-4xl font-bold my-2">How can we help you?</h2>
            <p className="my-5 text-xl text-center font-regular text-white">
              Transparency, reliability, and outstanding customer experiences are at the core of our
              values.
              <br />
              We take pride in fostering strong relationships with our clients, communicating openly
              at every stage of the development process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {ServiceHeroData.map((service, index) => (
              <div
                key={index}
                className="bg-white border shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-4">
                  {service.Icon && <service.Icon size={35} className="text-black text-center" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{service.Service_name}</h3>
                <p className="text-gray-700">{service.Service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-screen h-auto relative py-12 md:py-16 flex flex-col md:flex-row items-center justify-around px-6 md:px-16">
          <video
            src="/section.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            aria-label="Background Video"
          ></video>

          <div className="relative z-10 text-center md:text-left text-3xl sm:text-4xl lg:text-4xl font-medium text-white mb-6 md:mb-0 bg-opacity-50 px-4 py-3 rounded-lg">
            Start working with us and bring your ideas to life
          </div>

          <a href="tel:+919289183829">
            <button className="relative z-10 px-8 py-4 rounded-lg bg-white text-black text-lg font-semibold hover:bg-gray-200">
              Call Now - (+91) 9289183829
            </button>
          </a>
        </section>

        {/* Final CTA Section */}
        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <Image
            src={Herocta}
            alt="background-image"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />

          <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Let’s <br />
            <span className="font-bold text-white">innovate together</span>
          </h1>

          <p className="font-poppins text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
            Take the first step towards a brighter future and supercharge your business with
            cutting-edge technologies, expert guidance, and unparalleled support.
          </p>

          <Link href="/Quotation">
            <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
              Get in Touch <span className="ml-2">•</span>
            </button>
          </Link>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Page;
