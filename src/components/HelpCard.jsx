import React from 'react'

const HelpCard = ({icon, title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-2 bg-white rounded w-full">
      <img src={icon} alt="icon" className="w-10 h-10 mb-2"/>
      <h2 className="mb-2 text-lg font-semibold text-blue-900">{title}</h2>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  )
}

export default HelpCard;
