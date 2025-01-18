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
          <h1 className="text-2xl sm:text-4xl font-bold py-10">
            Our Services
          </h1>
          <ol className="list-disc pl-5 font-semibold text-base sm:text-2xl flex flex-col gap-5 ">
            <li>Photography & Videography</li>
            <li>Concept Development & Storyboarding</li>
            <li>Campaign Production & Brand Films</li>
            <li>Social Media Content Production</li>
            <li>E-Commerce Catalog Creation</li>
            <li>Reels & Short Form Videos</li>
            <li>Editorial & Creative Shoots</li>
            <li>Interactive Content & AI Integration</li>
          </ol>
        </div>

        {/* Contact Section */}
        <div className="py-10 bg-slate-300 w-full grid place-content-center">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold py-5">
            Contact Us
          </h1>
          <form className="space-y-4 w-4/5 mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded text-sm sm:text-xl lg:text-lg"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded text-sm sm:text-xl lg:text-lg"
              />
              <input
                type="number"
                placeholder="Mobile"
                className="w-full px-4 py-2 border rounded text-sm sm:text-xl lg:text-lg"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Profession"
                className="w-full px-4 py-2 border rounded text-sm sm:text-xl lg:text-lg"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-2 border rounded text-sm sm:text-xl lg:text-lg"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded text-sm sm:text-xl lg:text-lg"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition duration-300 text-sm sm:text-base lg:text-lg font-semibold"
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
