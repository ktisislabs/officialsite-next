import React from 'react';
import Navbar from '../components/Navbar';

function Page() {
  return (
    <>
      <div className="Hero-Section w-screen h-screen overflow-x-hidden relative">
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
      </div>
    </>
  );
}

export default Page;
