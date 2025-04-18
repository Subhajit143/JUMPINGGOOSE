import React, { useEffect, useState } from "react";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact-us");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="contact-us"
        className={`sm:flex justify-center w-full transition-transform duration-700 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Services Section */}
        <div className="py-10 bg-pink-600 w-full text-white grid place-content-center">
          <h1 className="text-2xl sm:text-2xl font-bold py-5 text-center sm:text-start ">
            Services we provide
          </h1>
          <p className="font-normal text-center px-5 sm:px-0 pb-10 sm:text-start">
            At Sciptstrom Studios we provides everything that has to do with:
          </p>
          <ol className="list-disc sm:pl-10 pl-16 font-medium text-sm sm:text-xl flex flex-col gap-5 pb-5  ">
            <li>Photography & Videography</li>
            <li>Concept Development & Storyboarding</li>
            <li>Campaign Production & Brand Films</li>
            <li>Social Media Content Production</li>
            <li>E-Commerce Catalog Creation</li>
            <li>Reels & Short Form Videos</li>
            <li>Editorial & Creative Shoots</li>
            <li>Interactive Content & AI Integration</li>
            <li>Concept Development & Storyboarding</li>
            <li>Campaign Production & Brand Films</li>
            
          </ol>
        </div>

        {/* Contact Section */}
        <div className="py-10 bg-slate-300 w-full grid text-center place-content-center">
          <h1 className="text-2xl sm:text-2xl  font-bold py-5 text-center  sm:text-start">
            Contact Us
          </h1>
          <form className="space-y-4 w-4/5 sm:w-full mx-auto">
          <div className="flex flex-col">
          <label htmlFor="" className="text-start font-semibold text-sm sm:text-base uppercase">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-slate-300 border-b-2 border-black   text-sm sm:text-xl lg:text-lg"
            />
          </div>
            <div className="flex  flex-row gap-4">
           <div className="flex flex-col w-full">
           <label htmlFor="" className="text-start font-semibold text-sm sm:text-base uppercase">email</label>
              <input
                type="email"
                
                className="w-full px-4 py-2 border-b-2 bg-slate-300 border-black  text-sm sm:text-xl lg:text-lg"
              />
           </div>
           <div className="flex flex-col w-full">
           <label htmlFor="" className="text-start font-semibold text-sm sm:text-base uppercase">Mobile</label>
              <input
                type="number"
                
                className="w-full px-4 py-2 border-b-2 bg-slate-300 border-black  text-sm sm:text-xl lg:text-lg"
              />
           </div>
            </div>
            <div className="flex flex-row gap-4">
            <div className="flex flex-col w-full">
           <label htmlFor="" className="text-start font-semibold text-sm sm:text-base uppercase">Profession</label>
              <input
                type="text"
                
                className="w-full px-4 py-2 border-b-2 bg-slate-300 border-black  text-sm sm:text-xl lg:text-lg"
              />
           </div>
           <div className="flex flex-col w-full">
           <label htmlFor="" className="text-start font-semibold text-sm sm:text-base uppercase">Company</label>
              <input
                type="text"
                
                className="w-full px-4 py-2 border-b-2 bg-slate-300 border-black  text-sm sm:text-xl lg:text-lg"
              />
           </div>
            </div>
            <div className="">
              <h1 className="text-start text-xs sm:text-base font-semibold py-5 uppercase">Specify Your budget</h1>
              <label className="flex text-xs sm:text-base items-center space-x-2 sm:gap-8 ">
                <div className="flex items-center gap-2 ">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-500   appearance-none checked:bg-blue-600 checked:border-black  items-center "
                  />
                  <span className="text-black font-semibold ">1L-2L</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                     className="w-5 h-5 rounded-full border-2 border-gray-500    appearance-none checked:bg-blue-600 checked:border-black  items-center "
                  />
                  <span className="text-gray-700 font-semibold">2L-4L</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                     className="w-5 h-5 rounded-full border-2 border-gray-500    appearance-none checked:bg-blue-600 checked:border-black  items-center "
                  />
                  <span className="text-gray-700 font-semibold">4L-6L</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                     className="w-5 h-5 rounded-full border-2 border-gray-500    appearance-none checked:bg-blue-600 checked:border-black  items-center "
                  />
                  <span className="text-gray-700 font-semibold">Above 6L</span>
                </div>
              </label>
            </div>

            <div className="flex flex-col w-full">
           <label htmlFor="" className="text-start font-semibold text-sm sm:text-base uppercase">Your message</label>
           <textarea
              
              className="w-full px-4 py-2 border-b-2 bg-slate-300 border-black   text-sm sm:text-xl lg:text-lg"
              rows="4"
            />
           </div>
            
            <button
              type="submit"
              className="w-full  text-pink-600 underline py-2 rounded transition duration-300 text-lg uppercase sm:text-xl font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
