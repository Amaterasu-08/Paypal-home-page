import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div>
                <img src="../../images/paypal-icon.png" alt='logo' className='h-6 w-10 mx-4'/>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline ">
                <a href="#" className="text-blue-900 text-lg font-medium mx-8">Personal</a>
                <a href="#" className="text-blue-900 text-lg font-medium mx-8">Buisness</a>
                <a href="#" className="text-blue-900 text-lg font-medium mx-8">Developer</a>
                <a href="#" className="text-blue-900 text-lg font-medium mx-8">Help</a>

              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
            <button type="button" className="text-blue-900 bg-white border border-blue-900 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-small rounded-full text-sm px-5 py-2 mx-10 ">
                Log In
            </button>

            <button type="button" className="focus:outline-none text-white bg-blue-900 focus:ring-4 focus:ring-purple-300 font-small rounded-full text-sm px-4 py-2.5 mx-10 ">Sign Up</button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? '' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">Item 1</a>
          <a href="#" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">Item 2</a>
          <a href="#" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">Item 3</a>
          <div className='flex justify-around flex-nowrap'>
            <button className='text-blue-900 bg-white border border-blue-900 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-small rounded-full px-3 py-1'>
                Log In
            </button>
            <button className='focus:outline-none text-white bg-blue-900 focus:ring-4 focus:ring-purple-300 font-small rounded-full px-3 py-1'>
                Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
