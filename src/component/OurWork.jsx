import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1  from "../assets/image.png"
import pic2 from "../assets/1000052241 1.png"
import pic3 from "../assets/image 438.png"
import pic4 from "../assets/WESTSIDE.png"
import pic5 from "../assets/Skills/image 445.png"
import pic6 from "../assets/Skills/image 32.png"
import pic7 from "../assets/Skills/RCB.png"




const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4, // Default for large screens
  slidesToScroll: 2,
  
  responsive: [
    {
      breakpoint: 1024, // Screens below 1024px
      settings: {
        slidesToShow: 3, // Show 3 slides for tablets
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Screens below 768px
      settings: {
        slidesToShow: 2, // Show 2 slides for mobile devices
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Screens below 480px
      settings: {
        slidesToShow: 2, // Show 1 slide for very small screens
        slidesToScroll: 1,
      },
    },
  ],
};

const OurWork = () => {
 
  return (
    <>
    <div className='self-center items-start text-center'>
      <div className='items-center'><h1 className='text-2xl font-semibold py-10'>Our Work Says It Best</h1></div>
      <div className='md:px-28'>
      <Slider {...settings}>
        <div><img className='w-fit  ' src={pic1} alt="" /></div>
        <div><img className='w-fit ' src={pic2} alt="" /></div>
        <div><img className='w-fit ' src={pic3} alt="" /></div>
        <div><img className='w-fit ' src={pic4} alt="" /></div>
        <div><img className='w-fit ' src={pic5} alt="" /></div>
        <div><img className='w-fit ' src={pic6} alt="" /></div>
        <div><img className='w-fit ' src={pic7} alt="" /></div>
      </Slider>
      </div>
      <div className='py-5'>
        <h1 className='underline sm:text-xl  font-semibold text-pink-600 hover:text-pink-900 duration-500'>SHOW MORE</h1>
      </div>
    </div>
    </>
  )
}

export default OurWork






{/* <div className='flex flex-col items-center text-center justify-center '>
      <div><h1 className='text-2xl font-semibold py-20'>Our Work Says It Best</h1></div> */}

      
        {/* <div className='flex  items-center justify-center '> */}
          {/* <div className=' hover:scale-125 duration-500'>
            <img className='w-fit  ' src={pic1} alt="" />
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className='w-fit ' src={pic2} alt="" />
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className='w-fit ' src={pic3} alt="" />
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className='w-fit ' src={pic4} alt="" />
          </div> */}
         
        {/* </div> */}

        {/* <Slider {...setting}>
            <div><img className='w-fit  ' src={pic1} alt="" /></div>
            <div><img className='w-fit ' src={pic2} alt="" /></div>
            <div><img className='w-fit ' src={pic3} alt="" /></div>
            <div><img className='w-fit ' src={pic4} alt="" /></div>

          </Slider>
      
      <div className='py-5'>
        <h1 className='underline sm:text-xl  font-semibold text-pink-600 hover:text-pink-900 duration-500'>SHOW MORE</h1>
      </div>
    </div> */}