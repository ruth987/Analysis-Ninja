import React from 'react'
import Image from 'next/image'
import { MdHome } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import { VscEmptyWindow } from "react-icons/vsc";
import { MdStart } from "react-icons/md";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { FaUserCircle } from 'react-icons/fa';

const sampleProblems = [
  { number: 1, title: 'Problem 1', rating: 1200, user: 'user1', date: '1 day ago' },
  { number: 2, title: 'Problem 2', rating: 1500, user: 'user2', date: '2 days ago' },
  { number: 3, title: 'Problem 3', rating: 1800, user: 'user3', date: 'a week ago' },
];

const User = () => {
     
  return (
    <div className='flex flex-row bg-gray-300 p-8 h-screen space-x-4'>
        {/* left headers */}
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
        {/* // Add search bar */}
        <div className='flex flex-col w-4/5 h-screen space-y-2 '>
            <div className='flex flex-col w-full space-y-2'>
            <div className="flex p-4 rounded-lg w-full bg-gray-200">
                <div className="flex flex-1 w-1/2 relative">
                <IoSearchOutline className="absolute w-5 h-5 text-gray-400 ml-4 top-1/2 transform -translate-y-1/2" />
                <input 
                    className="w-1/2 px-4 py-2 text-gray-700 border rounded-full focus:outline-none focus:ring-1 focus:ring-purple-800 bg-gray-50"
                    placeholder="      Search..." 
                />
                </div>
                <div className="flex items-center ml-auto space-x-2 border border-1 border-gray-300 rounded-full p-2">
                <LuSun className="w-6 h-6" />
                {/* Add your Toggle component or other elements for dark/light mode */}
                <FaMoon className="w-6 h-6 text-gray-700" />
                </div>
            </div>
            {/* Other content goes here */}
            </div>

            {/* // Last solved problems */}
            <div className="p-4 rounded-lg h-1/2 bg-gray-200 text-gray-700">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Last Solved Problems</h2>

                <table className="w-full">
                    <thead>
                    <tr>
                        <th className="px-4 py-2">Problem Number</th>
                        <th className="px-4 py-2">Problem Title</th>
                        <th className="px-4 py-2">Rating</th>
                        <th className="px-4 py-2">User Profile</th>
                        <th className="px-4 py-2">Date Solved/Analyzed</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sampleProblems.map((problem, index) => (
                        <tr key={index}>
                        <td className="pl-24 px-4 py-2 border-b border-gray-300">{problem.number}</td>
                        <td className="px-4 py-2 border-b border-gray-300">{problem.title}</td>
                        <td className="px-4 py-2 border-b border-gray-300">{problem.rating}</td>
                        <td className="px-4 py-2 border-b border-gray-300">
                            <div className='flex items-center'>
                            <FaUserCircle className="text-blue-500 w-8 h-8 pr-2" />
                            {problem.user}
                            </div>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-300">{problem.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            <div className='flex'>
                {/* // Analysis graph */}
                <div className="bg-white p-4 rounded-lg">

                <h2 className="text-xl font-bold mb-4">Your Progress</h2>


                </div>
                 {/* // Services cards */}
                <div className="bg-white p-4 rounded-lg">

                <div className="grid grid-cols-2 gap-4">

                    <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="text-purple-800 font-bold">Basic</h3>
                    {/* // Pricing & features */}
                    </div>

                    <div className="bg-purple-200 p-4 rounded-lg">
                    <h3 className="text-purple-800 font-bold">Pro</h3>
                    {/* // Pricing & features  */}
                    </div>

                </div>

            </div>

        </div>
</div>
    </div>
  )
}

export default User

