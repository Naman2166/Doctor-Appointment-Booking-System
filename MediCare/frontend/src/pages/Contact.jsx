//time :- 3 hrs 13 min

import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      
      <div className='text-center text-2xl pt-16 text-gray-500'>
        <p> CONTACT <span className='text-gray-700 font-semibold'>US</span> </p>
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt=''/>

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>Silicon City, Indore, India</p>
          <p className='text-gray-500'>Tel : 123-456-789 <br /> Email : medicare@gmail.com </p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT MEDICARE</p>
          <p className='text-gray-500'>Learn more about our teama and job openings.</p>
          <button className='border border-black rounded-full px-8 py-4 text-sm font-medium bg-blue-300 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>

      </div>

    </div>
  )
}

export default Contact