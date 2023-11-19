"use client"

import React from 'react'
import { LineChart, Line } from 'recharts'


const data = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];


const LineGraph = () => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow flex space-x-2">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Your Progress</h2>

                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        >
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        </LineChart>

                </div>
                <div className="bg-gray-00 rounded-lg shadow w-full">
            
                    <div className="flex flex-col space-y-2 w-full">

                        <div className="bg-gray-300 rounded-lg px-3 py-4">
                        <h3 className="text-xl font-bold">Basic</h3>
                        <p className="text-gray-700">
                            $9.99/month
                        </p>
                        <button className="bg-purple-800 text-white mt-6 px-4 py-2 rounded-lg hover:bg-purple-900">Select</button>
                        </div>

                        <div className="bg-gray-300 rounded-lg px-6 py-8">
                        <h3 className="text-xl font-bold">Pro</h3>
                        <p className="text-gray-700">
                            $19.99/month  
                        </p>
                        <button className="bg-purple-800 text-white mt-6 px-4 py-2 rounded-lg hover:bg-purple-900">Select</button>
                        </div>

                    </div>
                
                </div>




                </div>
  )
}

export default LineGraph