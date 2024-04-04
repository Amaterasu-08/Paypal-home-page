import React from 'react'

const InfoCard = ({icon, title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-2 bg-white rounded shadow-lg w-full
     sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <img src={icon} alt="icon" className="w-10 h-10 mb-2"/>
      <h2 className="mb-2 text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  )
}

export default InfoCard
