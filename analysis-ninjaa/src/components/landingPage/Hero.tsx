import React from 'react';
import bgImg from '../../../public/hero-bg.png'; 
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

  return (
    <header className="bg-gray-800 bg-cover bg-center h-screen flex flex-col items-center justify-center text-white relative" 
    style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      
      {/* Overlay */}  
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      {/* Navbar */}
      <nav className="container mx-auto p-4 flex justify-between absolute top-0 left-0 right-0 z-10 py-6">
        <div className='flex'>
          <div className='pt-0'>
            <Image 
              src='/Vector.svg'
              alt='logo image'
              width={40}
              height={40}
              />

          </div>
          <div className="text-2xl font-bold text-primary">
            AnalysisNinja
          </div>

        </div>
        
        <div className="flex space-x-6 text-lg">
          <div className='py-3 space-x-6 font-extralight '>
            <a href="#" className='hover:text-purple-600'>Home</a>  
            <a href="#" className='hover:text-purple-600'>About Us</a>
            <a href="#" className='hover:text-purple-600'>Contact Us</a>

          </div>
          
        <Link href="/signup">
        <button className="bg-white text-primary rounded-md px-4 py-1 hover:font-semibold">
          Sign Up 
        </button>
        </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="z-20 text-center p-4">
        <h1 className="text-5xl font-bold mb-4">
          Of course, bad code can be cleaned up.
        </h1> 
        <p className="text-xl mb-8 font-extralight px-20">
          Our advanced analysis and data structure bring compassion and innovation to your skills. 
          For the leading competitive programming skills, and best contest analysis turn to Analysis 
          Ninja.
        </p>
        <div className="relative w-2/4 flex mx-auto">
          <input
            type="text"
            placeholder="Your Codeforces username"
            className="w-full h-16 rounded-full px-6 py-2 outline-none focus:ring-2 focus:ring-purple-700 text-lg text-gray-700"
          />
          <div className="absolute right-0 p-1">
            <button className="bg-purple-700 hover:bg-purple-900 transition duration-500 text-white font-semibold hover:font-bold rounded-full w-32 h-14">
              Get Started
            </button>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Hero