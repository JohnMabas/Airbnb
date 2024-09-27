import React from 'react'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 m-5' >

        <div className='text-left font-bold text-2xl'>Airbnb</div>
        <div className='flex justify-center flex-grow gap-4'>
            <span className='cursor-pointer hover:text-green-500 font-semibold'> <a href='#'>Stays</a></span>
            <span className='cursor-pointer hover:text-green-500'>Experiences</span>

        </div>
        <div className='text-right cursor-pointer hover:text-green-500 font-semibold'> <a href='#'h>Airbnb your home</a></div>

       
    
     

    </div>
  )
}

export default Navbar
