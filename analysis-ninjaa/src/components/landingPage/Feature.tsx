import React from 'react'

const Feature = () => {
  return (
    <div className=''>
        <div className='flex flex-col items-center justify-center py-20 bg-gray-200 bg-cover bg-center'>
            <div className='text-5xl font-light text-center pb-12'>
            Features
            </div>
            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
            <div className='bg-purple-800 text-purple-100 rounded-lg p-4 w-80 h-80'>
                <div className='text-2xl font-semibold pb-4'>
                Code Analysis
                </div>
                <div className='text-lg font-extralight'>
                It brings your last codeforces submission and compairs it with the best solution. Also suggests you how to improve your code.
                </div>
            </div>
            <div className='bg-purple-800 text-purple-100 rounded-lg p-4 w-80 h-80'>
                <div className='text-2xl font-semibold pb-4'>
                AI supported chatbot
                </div>
                <div className='text-lg font-extralight'>
                You can select the programming language you are comfortable with, infomations or how you want to analyze that code then it will talk to you refering to your prompt.
                </div>
            </div>
            <div className='bg-purple-800 text-purple-100 rounded-lg p-4 w-80 h-80'>
                <div className='text-2xl font-semibold pb-4'>
                Practice Suggestions
                </div>
                <div className='text-lg font-extralight '>
                It gives practice problems that are related to the problem you have analyzed and also suggests you the best resources to learn.
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Feature