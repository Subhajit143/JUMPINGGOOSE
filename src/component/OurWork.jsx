import React from 'react'
import pic1  from "../assets/image.png"
import pic2 from "../assets/1000052241 1.png"
import pic3 from "../assets/image 438.png"
import pic4 from "../assets/WESTSIDE.png"

const OurWork = () => {
  return (
    <>
    <div className='flex flex-col items-center text-center justify-center '>
      <div><h1 className='text-2xl font-semibold py-20'>Our Work Says It Best</h1></div>

      <div>
        <div className='flex flex-col sm:flex-row items-center justify-center '>
          <div className=' hover:scale-125 duration-500'>
            <img className='w-2/3 ml-16  sm:w-fit sm:ml-0 ' src={pic1} alt="" />
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className='w-2/3 ml-16   sm:w-fit sm:ml-0' src={pic2} alt="" />
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className='w-2/3 ml-16 sm:w-fit sm:ml-0' src={pic3} alt="" />
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className='w-2/3 ml-16 sm:w-fit sm:ml-0' src={pic4} alt="" />
          </div>
        </div>
      </div>
      <div className='py-5'>
        <h1 className='underline sm:text-xl  font-semibold text-pink-600 hover:text-pink-900 duration-500'>SHOW MORE</h1>
      </div>
    </div>
    </>
  )
}

export default OurWork