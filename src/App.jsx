import React from 'react'


const App = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-[#f8edeb] via-[#ffcad4] to-[#f4acb7]">
    <div className="relative p-8 bg-white rounded-lg shadow-2xl transform transition duration-500 hover:rotate-3 hover:scale-110">
      <div className="absolute top-0 right-0 -mr-12 -mt-12 bg-[#fefcfb] rounded-full p-4 shadow-lg transform rotate-12">
        <div className="text-[#0a1128] text-4xl font-bold">404</div>
      </div>
      <div className="text-center">
        <div className="text-6xl font-extrabold text-gray-800">Oops!</div>
        <div className="text-xl text-gray-600 mt-4">We can't find the page you're looking for.</div>
       
        <button className="mt-6 px-6 py-3 bg-[#c4fff9] text-[#495867] text-lg font-bold rounded-lg shadow-md hover:bg-[#68d8d6] transition duration-300">Go Home</button>
        
      </div>
    </div>
  </div>
  )
}

export default App