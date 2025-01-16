import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { WorkData } from '../Data/WorkData';
import Image from 'next/image';

function Page() {
  return (
    <>
      <div className="work-page w-screen min-h-screen bg-black text-white overflow-y-auto overflow-x-hidden">
        <Navbar />
        <div className="work-area w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
          <p className="w-full text-center text-2xl md:text-2xl font-bold mb-6">Works</p>
          <div className="cards max-w-[50vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
            {WorkData.map((work, index) => (
              <div
                key={index}
                className="card bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  className="h-32 w-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{work.client_Name}</h3>
                <p className="text-sm text-gray-400 mt-2">{work.Description}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Page;
