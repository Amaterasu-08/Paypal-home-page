import React from 'react'
import { useState, useEffect } from 'react'


function SideBarItem({title, activeItem, setActiveItem, setSideBarData}){
    return (
        <li className={`p-4 ${title === activeItem ? 'bg-blue-200 text-blue-900' : ''} cursor-pointer`} 
        onClick={() => {setActiveItem(title); setSideBarData(title)}}>
            {title}
        </li>
    )
}

const SideBar = ({sendsideBarDataToParent}) => {

    const [activeItem, setActiveItem] = useState('Common Questions');
    const [sideBarData, setSideBarData] = useState('Common Questions');
    const items = ['Common Questions','PayPal Help Guides', 'Payments & Transfers', 'Disputes & Limitations',
     'My Account', 'My Wallet', 'Login & Security', 'Seller Tools'];
  
    useEffect(() => {
      sendsideBarDataToParent(sideBarData);
  }, [sideBarData, sendsideBarDataToParent]);

  return (
    
      <ul className="w-full md:w-64 bg-white-500 text-gray-900 space-y-4 overflow-auto md:flex md:flex-col md:space-y-4 md:space-x-0">
      {items.map(item => (
        <SideBarItem 
          title={item}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setSideBarData = {setSideBarData}
        />
      ))}
    </ul>
    
  )
}

export default SideBar
