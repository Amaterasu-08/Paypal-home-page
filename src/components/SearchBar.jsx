import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-2/3 pt-6 mx-auto">
      <div className='mb-4 text-2xl text-center'>How can we help?</div>
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    <FontAwesomeIcon icon={faMagnifyingGlass} />    </span>
    <input className="rounded-full focus:ring-blue-800 pl-10 pr-4 py-2 w-full border border-blue-900" type="text" placeholder="Search by keyword"/>
  </div>
</div>

  )
}

export default SearchBar
