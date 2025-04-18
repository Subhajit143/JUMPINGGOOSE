import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3, // Default for large screens
  slidesToScroll: 2,
  centerPadding: '30px',

  responsive: [
    {
      breakpoint: 768, // Screens below 768px
      settings: {
        slidesToShow: 2, // Show 2 slides for mobile devices
        slidesToScroll: 1,
        centerPadding: '20px'
      },
    },
    {
      breakpoint: 480, // Screens below 480px
      settings: {
        slidesToShow: 1, // Show 1 slide for very small screens
        slidesToScroll: 1,
         centerPadding: '10px'
      },
    },
  ],
};
export const Reviews = () => {
  const data = [
    {
      name: "Akash Baidya",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, mauris vel ultrices volutpat, lectus mauris volutpat velit, in posuere arcu ligula nec velit.",
      designations: "Co-Founder CodeLux PVT LTD,Industry Trainer ",
    },
    {
      name: "Kumar Singh",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, mauris vel ultrices volutpat, lectus mauris volutpat velit, in posuere arcu ligula nec velit.",
      designations: "Consultant At Spencer ",
    },
    {
      name: "Subhajit Majumdar",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, mauris vel ultrices volutpat, lectus mauris volutpat velit, in posuere arcu ligula nec velit.",
      designations:
        "Founder Shubeats Industry,Co-Founder of SubhInfotech Pvt Ltd ",
    },
    {
      name: "ALisa Gurwala",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, mauris vel ultrices volutpat, lectus mauris volutpat velit, in posuere arcu ligula nec velit.",
      designations: "Manager of Amazoner ",
    },
  ];
  return (
    <>
      <div className="self-center items-start text-center">
        <div className="items-center">
          <h1 className="pt-10 font-semibold text-3xl">Cheers & Hurrahs</h1>
        </div>
        <div className="flex flex-col gap-5 mx-5 px-10 sm:px-24">
          <Slider className="" {...settings}>
            {data.map((elem, key) => (
              
              <div>
                  <div
                className="bg-black m-4 p-5 px-4  h-[360px] mx-4"
                key={key}
              >
                <p className="text-6xl text-lime-200">❝</p>
                <p className="text-white py-5">{elem.review}</p>
                <hr className="border-t border-lime-200 my-2 w-8" />
                <h2 className="text-lime-200 font-semibold text-lg">
                  {elem.name}
                </h2>
                <h3 className="text-xs text-lime-200">{elem.designations}</h3>
         
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
