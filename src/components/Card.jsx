import React from 'react'
import info from "../data/items.json"
import InfoCard from './InfoCard'
import helps from "../data/help.json"
import HelpCard from './HelpCard'

const Card = ({type}) => {
  
    if(type === "info"){
        return(
            <div className='flex justify-center mt-5'>
                {info.map((item) =>(
                    <InfoCard {...item} />
                ))}
            </div>
        )
    }
    else if(type ==="help"){
        return(
            <div className='w-full flex flex-col items-center pt-10'>
                <h1 className='text-2xl font-bold mb-5'>More ways to get help</h1>
                <div className='flex justify-center mt-5 space-x-4'>
                    {helps.map((help) =>(
                    <HelpCard {...help} />
                    ))}
                </div>
            </div>

        )
    }
    else if(type === "survey"){
        return(
            <div className=" w-full mx-auto bg-blue-50 overflow-hidden md:max-w-5xl mt-10">
                <div className="p-8 flex flex-row justify-between">
                    <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-5 ">How are we doing?</h2>
                    <p className="text-gray-500 mb-4">Help improve the <b>PayPal Help Center experience</b> <br/> with some quick feedback.</p>
                    </div>
                    
                    <button className="bg-blue-900 text-white rounded-full my-20 md:my-7 px-9 ">Take the survey</button>
                </div>
            </div>
        )
    }
    else{
        return<h1>Not what u want</h1>
    }
}

export default Card;
