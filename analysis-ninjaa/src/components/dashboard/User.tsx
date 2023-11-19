"use client"
import React from 'react'
import LeftHeaders from './LeftHeaders';
import DashboardBar from './DashboardBar';
import ProblemTable from './ProblemTable';
import LineGraph from './LineGraph';

const User = () => {
     
  return (
    <div className='flex flex-row bg-gray-300 p-8 h-screen space-x-4'>
        {/* left headers */}
        <LeftHeaders />
        
        <div className='flex flex-col w-4/5 h-screen space-y-2 '>
            <div className='flex flex-col w-full space-y-2'>
            {/* // Add search bar */}
            <DashboardBar />
            {/* Other content goes here */}
            </div>

            {/* // Last solved problems */}
            <ProblemTable />
            
            {/* // Analysis graph */}
            {/* // Line Chart */}
            <LineGraph />
            
        </div>
</div>
  )
}

export default User

