import React from 'react'

const RecievedMessage = ({children}) => {
  return (
    <div className='bg-gray-400 text-gray-900 rounded-full w-1/2 right-0 p-2'>
        {children}
    </div>
  )
}

export default RecievedMessage