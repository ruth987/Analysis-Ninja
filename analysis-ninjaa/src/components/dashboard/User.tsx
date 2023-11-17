import React from 'react'
import Image from 'next/image'

const User = () => {
  return (
    <div>
        <div className=' w-1/4 flex flex-col space-x-2 space-y-2 '>
            <Image 
                src='/profile.jpeg'
                alt='profile picture'
                width={90}
                height={90}
                className='rounded-full'
                />
            <p className='text-lg text-center'>Ruth Wossen</p>
            <div className='text-gray-400 flex flex-col mx-auto'>
                <div>RATING: 992</div>
                <div>RANK: newbie</div>
                <div>MAX RATING: 992</div>
                <div>MAX RANK: newbie</div>
            </div>
            <button className='bg-primary text-white font-semibold hover:bg-purple-800 rounded-lg mx-auto'>
                Edit Profile
            </button>
            
        </div>
        <div>

        </div>


    </div>
  )
}

export default User

