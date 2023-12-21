"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import supabase from '@/app/data/supabase';
import Link from 'next/link';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!email || !password || !username) {
      console.log('Please fill in all fields');
      return;
    }

    const {data, error} = await supabase.auth.signInWithOtp({
        email: email,
        options: {
        emailRedirectTo: 'http://localhost:3000/account'
        }
      })

      //set the username of the user and the password
      // const {user, error} = await supabase.auth.signUp({
      //   email: email,
      //   password: password
      // })


      console.log('Signup successful');
      // Perform any additional actions or redirect the user after successful signup

  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-1/3 bg-gray-300 border border-gray-400 rounded-lg overflow-hidden'>
        <div className='px-6 py-5 bg-purple-800 text-white text-2xl font-extralight'>
          <Link href='/login'>
          <button className='w-fit border-b-2 border-gray-200 pl-3 hover:pl-0 transition-all duration-500'>
            Login
          </button>
          </Link>
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
          <form className='w-full' onSubmit={handleSignup}>
            <div className='mb-6'>
              <label className='block text-gray-600 text-sm font-semibold mb-2' htmlFor='email'>
                Codeforces Username
              </label>
              <input
                className='w-full py-2 px-4 border-b-2 border-purple-800 outline-none focus:border-purple-600'
                type='text'
                id='username'
                placeholder='ruthwossen75'
                value={username}
                onChange={handleChangeUsername}
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
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-600 text-sm font-semibold mb-2' htmlFor='username'>
                Email
              </label>
              <input
                className='w-full py-2 px-4 border-b-2 border-purple-800 outline-none focus:border-purple-600'
                type='text'
                id='email'
                placeholder='ruth@gmail.com'
                
                value={email}
                
                onChange={handleChangeEmail}
              />
            </div>
            <div className="bg-purple-600 text-white py-3 px-16  w-44 cursor-pointer rounded-full hover:bg-purple-700 hover:font-semibold transition duration-200 mx-auto">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;