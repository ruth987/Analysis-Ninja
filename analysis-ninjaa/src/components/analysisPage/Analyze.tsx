import Image from 'next/image'


export default function Analyze() {

  return (
    <div className="flex">

      {/* Code Editor */}
      <div className="w-2/3 p-8">
        <div className='flex flex-row'>
            <div>
                <Image
                    src = '/Vector.svg'
                    alt='logo'
                    width={40}
                    height={40}
                    />
            </div>
            <div><h2 className="text-2xl font-bold mb-4 pt-1">Code</h2></div>
        </div>
        
        
        <textarea
          className="w-full h-96 p-4 rounded border border-gray-300"
        />

        <button className="bg-purple-600 text-white px-4 py-2 rounded mt-4 hover:bg-purple-700">
          Analyze
        </button>

        {/* Checkboxes */}
        <div className="mt-8 flex space-x-4 text-gray-700">
          
          <div className="flex items-center">
            <input id="js" type="checkbox" className="w-4 h-4 accent-purple-600"/>
            <label htmlFor="js" className="ml-2">
              JavaScript
            </label>
          </div>

          {/* // other checkboxes */}

        </div>

      </div>

      {/* Chat */}  
      <div className="w-1/3 border-l p-8">
        
        <h2 className="text-2xl font-bold mb-4">Assistant</h2>

        {/* Messages */}
        <div className="space-y-4 overflow-y-auto h-[28rem]">
          
          <div className="bg-gray-200 p-3 rounded-lg">
            <p className="text-sm">I'm Analysis<span className="text-purple-800">Ninja,</span>, your coding assistant! Let's analyze your code...</p>
          </div>

          {/* // other messages */}

        </div>

        {/* Input */}
        <input
          className="w-full bg-gray-100 mt-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600" 
          placeholder="Ask me anything..."
        />

      </div>

    </div>
  )

}