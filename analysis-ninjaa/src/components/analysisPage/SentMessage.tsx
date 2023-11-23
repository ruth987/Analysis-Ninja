import React from 'react'

const SentMessage = ({children}) => {
  return (
    <div className='bg-purple-800 text-purple-100 rounded-full w-2/3 p-2'>
        {children}
    </div>
  )
}

export default SentMessage