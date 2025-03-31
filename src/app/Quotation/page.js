"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useForm } from "@formspree/react";
import toast,{Toaster} from "react-hot-toast";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export default function Contact() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [state, handleSubmit] = useForm("xovvjgvy");
  const [newsLetter,handleSubmitNews] = useState("xwplnybj")
  // Toggle active FAQ
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  
    
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you for reaching out to us!", {
        duration: 4000,
        position: "top-center",
      });
    }
  }, [state.succeeded]);
 

  return (
    <>
        <Toaster/>
      <div className="relative w-full min-h-screen bg-black overflow-x-hidden overflow-y-auto">
        {/* Navbar component */}
        <Navbar />
    
        {/* Contact Section */}
        <div className="Contact-Section flex flex-col justify-center items-center text-center w-full mt-12 h-auto px-4 py-8 sm:py-16">
          <p className="text-white font-poppins text-2xl sm:text-4xl font-medium mb-8 sm:mb-16">
            Tell Us About Your Project
          </p>

          {/* Form Section */}
          <div className="Form-Section flex flex-wrap items-center justify-center w-full max-w-6xl">
            {/* Left Text Section */}
            <div className="Form-Text flex flex-col items-center sm:items-center justify-center w-full lg:w-1/2 px-4 sm:px-6 mb-6 lg:mb-0">
              <p className="text-white font-poppins text-xl sm:text-2xl lg:text-3xl font-medium mb-4">
                Share Your Vision
              </p>
              <p className="text-sm sm:text-lg text-gray-400 text-center sm:text-left">
                We’d love to hear from you! Whether you have a question, need
                assistance, or want to explore how we can collaborate, feel free
                to reach out.
              </p>
            </div>

            {/* Right Form Section */}
            <form
              className="w-full lg:w-1/2 bg-white border border-black rounded-xl p-4 sm:p-6 shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-900 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobilenumber"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobilenumber"
                  name="mobilenumber"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="project"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Project Details"
                />
              </div>

              <button className="w-full py-3 text-sm sm:text-base rounded-full bg-black text-white font-medium hover:bg-white hover:text-black hover:border hover:border-black">
                Submit
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="FAQ-Section mt-8 sm:mt-16 w-full max-w-6xl px-4 sm:px-6">
            <p className="text-white font-poppins text-xl sm:text-2xl font-medium mb-6 sm:mb-8 text-center">
              Frequently Asked Questions
            </p>
          <div className="text-white ">
          <Accordion type="single" collapsible className="w-full text-2xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>How long does it take to receive a quote?</AccordionTrigger>
        <AccordionContent>
        We typically respond to all inquiries within 24-48 hours with a detailed quote based on your project details.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What types of projects do you handle?</AccordionTrigger>
        <AccordionContent>
        We handle a wide variety of design and development projects, ranging from small-scale to enterprise-level needs
          
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How can I track the progress of my project?</AccordionTrigger>
        <AccordionContent>
        We provide regular updates via email and project management tools. You can also schedule calls with our team for progress reviews.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger> Can I make changes to my project after submitting the form?</AccordionTrigger>
        <AccordionContent>
        Absolutely! Feel free to reach out to us at any time, and we’ll accommodate your changes as best as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What is your pricing structure?</AccordionTrigger>
        <AccordionContent>
        Our pricing is tailored to your project’s scope and business needs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
          </div>
          </div>

          <section className="relative w-full h-auto my-8 sm:my-12 overflow-hidden">
  {/* Video Background */}
  <video
    src="/contact.mp4"
    className="w-full h-auto object-cover"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 space-y-4 sm:space-y-2">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">
    The Future is Being Built. Are You In?
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-white drop-shadow-md max-w-xl">
    Ideas shape the world. Yours could be next. Let’s create something legendary together.
    </p>
  </div>
</section>

        </div>
      </div>
      <Footer/>
    </>
  );
}
