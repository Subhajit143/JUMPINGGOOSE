import React from 'react'
import Banner from "../assets/Banner.png"
import Hero from '../component/Hero'
import OurWork from '../component/OurWork'
import Brand from '../component/Brand'
import ContactUs from '../component/ContactUs'
import Skills from '../component/Skills'
import { Reviews } from '../component/Reviews'
import FAQs from '../component/FAQ\'s'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <div className='h-screen'>
        <Hero/>
        <OurWork />
        <Brand />
        <ContactUs />
        <Skills />
        <Reviews />
        <FAQs />
        <Footer/>
    </div>
    </>
  )
}

export default Home