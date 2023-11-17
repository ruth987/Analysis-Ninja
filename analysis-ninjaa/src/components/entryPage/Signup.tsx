import React from 'react';
import Image from 'next/image';

const Signup = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-1/3 bg-gray-300 border border-gray-400 rounded-lg overflow-hidden'>
        <div className='px-6 py-5 bg-purple-800 text-white text-2xl font-extralight'>
          <button className='w-fit border-b-2 border-gray-200 pl-3 hover:pl-0 transition-all duration-500'>
            Login
          </button>
        </div>
        <div className='flex flex-col items-center p-8'>
          <Image
            src='/Vector.svg'
            alt='logo'
            width={90}
            height={90}
          />
          <div className='font-normal text-2xl mt-4 pb-2'>
            Analysis Ninja
          </div>
          <form className='w-full'>
            <div className='mb-6'>
              <label className='block text-gray-600 text-sm font-semibold mb-2' htmlFor='email'>
                Codeforces Username
              </label>
              <input
                className='w-full py-2 px-4 border-b-2 border-purple-800 outline-none focus:border-purple-600'
                type='text'
                id='email'
                placeholder='ruth987'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-600 text-sm font-semibold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                className='w-full py-2 px-4 border-b-2 border-purple-800 outline-none focus:border-purple-600'
                type='password'
                id='password'
                placeholder='*********'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-600 text-sm font-semibold mb-2' htmlFor='rePassword'>
                Re-enter Password
              </label>
              <input
                className='w-full py-2 px-4 border-b-2 border-purple-800 outline-none focus:border-purple-600'
                type='password'
                id='rePassword'
                placeholder='*********'
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-gray-600 text-sm ml-2">
                  I agree to the <a href="#" className="text-purple-600 hover:underline">Terms of Use</a>
                </label>
              </div>
            </div>

            <div className="bg-purple-600 text-white py-3 px-16  w-44 cursor-pointer rounded-full hover:bg-purple-700 hover:font-semibold transition duration-200 mx-auto">
              Register
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
