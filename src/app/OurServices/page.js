import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'


function page() {
  const CustomLinks=[
   "OurServices/CustomSoftwareDevelopment" ,
    "/OurServices/MobileApp",
    "/OurServices/WebApplicationDevelopment",
    "/OurServices/WebandUI",
    "/OurServices/QualityAssurance",
    "/OurServices/DeploymentandMaintenance"
  ]
  return (
    <>
     
      {/* Navbar */}
    
        <Navbar />
      
      {/* Services Section */}
      <section className="bg-black text-white py-16 h-screen overflow-x-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We believe in a collaborative approach, working closely with our clients to understand their goals and target audience.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12">

            <div className="flex-1">
              <ul className="space-y-8">
                {[
                  'Custom Software Development',
                  'Mobile Application Development',
                  'Web Application Development',
                  'Web and UI / UX Design',
                  'Quality Assurance and Software Testing',
                  'Deployment and Maintenance',
                ].map((service, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-gray-700 pb-4 group cursor-pointer"
                  >
                <Link href={CustomLinks[index]}>  <h3 className="text-2xl font-medium group-hover:text-gray-400 transition">
                      {service}
                    </h3></Link> 
                    <Link href={CustomLinks[index]}>  <span className="text-2xl text-gray-400 group-hover:text-white transition">
                      →
                    </span></Link> 
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default page