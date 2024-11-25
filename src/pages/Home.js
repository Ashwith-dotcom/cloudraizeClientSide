import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CloudServices from '../components/CloudServices';
import DevOpsSection from '../components/DevOpsSection';
import DataScience from '../components/DataScience';
import GenerativeAI from '../components/GenerativeAI';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <CloudServices />
      <DevOpsSection />
      <DataScience />
      <GenerativeAI />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home