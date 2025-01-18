import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../assets/Brands/Artboard 1_2 1.png";
import pic2 from "../assets/Brands/Asset 10@4x 1.png";
import pic3 from "../assets/Brands/Asset 1@4x 1.png";
import pic4 from "../assets/Brands/Asset 2@4x 1.png";
import pic5 from "../assets/Brands/Asset 3@4x 1.png"
import pic6 from "../assets/Brands/Asset 4@4x 1.png"
import pic7 from "../assets/Brands/Asset 5@4x 2.png"
import pic8 from "../assets/Brands/Asset 6@4x 1.png"
import pic9 from "../assets/Brands/Asset 7@4x 1.png"
import pic10 from "../assets/Brands/Asset 8@4x 1.png"
import pic11 from "../assets/Brands/Asset 9@4x 1.png"
import pic12 from "../assets/Brands/images (1)roadster logo.png"
import pic13 from "../assets/Brands/peter england logo 1.png"

const trustedBrands = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  
  
];

const Brand = () => {
  // Slider settings
  // const settings = {
  //   dots: false, // Hides navigation dots
  //   infinite: true, // Enables infinite looping
  //   speed: 100, // Transition speed
  //   slidesToShow: 7, // Number of logos visible at once
  //   slidesToScroll: 1, // Number of logos to scroll at once
  //   autoplay: true, // Enables autoplay
  //   autoplaySpeed: 2000, // Speed of autoplay in milliseconds
  //   responsive: [
  //     {
  //       breakpoint: 768, // For mobile devices
  //       settings: {
  //         slidesToShow: 3, // Show 3 logos at once
  //       },
  //     },
  //     {
  //       breakpoint: 480, // For very small devices
  //       settings: {
  //         slidesToShow: 2, // Show 2 logos at once
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      {/* <div className="flex flex-col items-center text-center justify-center">
       
          <Slider {...settings}>
            {trustedBrands.map((brand, index) => (
              <div key={index} className="px-4">
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                //   className="w-full object-contain h-20 mx-auto"
                />
              </div>
            ))}
          </Slider>
        
      </div> */}



<div className=" py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
        Brands Thats Trusted Us
      </h2>
      <div className="relative overflow-hidden ">
        {/* Outer Wrapper */}
        <div className="flex items-center space-x-6 animate-scollSmall sm:animate-scroll whitespace-nowrap">
          {/* Duplicate logos to create infinite effect */}
          {trustedBrands.concat(trustedBrands).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="px-4 w-56 sm:w-[200px] sm:h-[35px] "
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Brand;
