import React from 'react'
import Image from 'next/image'
import { MdHome } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import { VscEmptyWindow } from "react-icons/vsc";
import { MdStart } from "react-icons/md";
import { MdOutlineGroups2 } from "react-icons/md";

const LeftHeaders = () => {
  return (
    <div className='w-1/5 bg-gray-200 space-y-2 p-3 rounded-lg'>
            
            {/* logo */}
            <div className='flex flex-row justify-center'>
                <Image 
                    src='/Vector.svg'
                    width={40}
                    height={40}
                    alt='logo'
                />
                <h1 className='font-semibold pt-2 text-xl'>Analysis<span className='text-purple-900'>Ninja</span></h1>
                <hr  />
            </div>
            

            {/* headers */}
            <li className='py-4 px-10'>
                <div className='flex space-x-2 my-auto text-gray-600 hover:text-gray-900  hover:bg-gray-300 w-fit rounded-full p-2 transition-all duration-300 '>
                    <MdHome size = {20} />
                    <a href='#'>Home</a>
                </div>
                <div className='flex space-x-2 my-auto text-gray-600 hover:text-gray-900  hover:bg-gray-300 w-fit rounded-full p-2 transition-all duration-300 '>
                    <BsQuestionSquareFill size = {20} />
                    <a href='#'>Problems</a>
                </div>
                <div className='flex space-x-2 my-auto text-gray-600 hover:text-gray-900  hover:bg-gray-300 w-fit rounded-full p-2 transition-all duration-300 '>
                    <VscEmptyWindow  size = {20}/>
                    <a href='#'>Contests</a>
                </div>
                <div className='flex space-x-2 my-auto text-gray-600 hover:text-gray-900  hover:bg-gray-300 w-fit rounded-full p-2 transition-all duration-300 '>
                    <MdOutlineGroups2 size = {20}/>
                    <a href='#'>Groups</a>
                </div>
                
                
            </li>
            <div className='bg-gray-700 text-gray-100 w-2/3 align-middle flex flex-row space-x-3 p-2 
                mx-auto rounded-full items-center justify-center hover:bg-gray-950 cursor-pointer transition-all duration-300'>
                    <a href='#'>Start Now</a>
                    <MdStart size = {20}/>
                </div>
            {/* profile */}
            <div className='flex flex-col pt-6 '>
                <Image 
                src='/profile.jpeg'
                width={80}
                height={80}
                alt='profile'
                className='rounded-full w-16 h-16 mx-auto ring-2 ring-purple-900 pb-2'
                />
                <h1 className='text-center text-xl text-gray-800'>Ruth Wossen</h1>
                <div className='text-gray-500 text-sm mx-auto pt-2'>
                    <h2>Rank : 30054</h2>
                    <h3>Points : 50</h3>
                    {/* <h4>Problems Solved</h4>
                    <h5>Problems Submitted</h5>
                    <h6>Problems Attempted</h6> */}

                </div>
                </div>
            
            
        </div>
  )
}

export default LeftHeaders