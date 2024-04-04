import React from 'react'
import SideBar from './SideBar'
import Faq from './Faq'
import { useState } from 'react'

const Container = () => {

  const [sideBarData, setSideBarData] = useState("");
  
  const handleDataFromChild=(data)=>{
    setSideBarData(data);
  }
  return (
    <div className="flex mt-10">
      <div className="w-1/4 bg-white-500 text-white p-4">
        <SideBar sendsideBarDataToParent={handleDataFromChild}/>
      </div>
      <div className=" w-1/2  p-4 space-y-4">
        <Faq sideBarQuestion={sideBarData}/>
      </div>
      <div className="w-1/4 bg-white-300 flex items-center  ">
        <div className="  max-w-sm mx-auto bg-gray-200  shadow-md overflow-hidden md:mr-10  md:max-w-2xl">
            <div className="p-8 ">
              <div className="uppercase tracking-wide text-sm text-black-900 rounded-l font-serif font-semibold">Get customized help with your account and access your message center.</div>
              <button className="mt-5 px-4 py-2 text-blue-900 bg-gray-200 border-2 border-blue-900 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-small rounded-full">
                Log In
              </button>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Container;
