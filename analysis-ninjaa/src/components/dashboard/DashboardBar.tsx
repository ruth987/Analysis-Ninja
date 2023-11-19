import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const DashboardBar = () => {
  return (
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
  )
}

export default DashboardBar