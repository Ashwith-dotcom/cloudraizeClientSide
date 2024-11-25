import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Overview from './pages/Overview';
import GenerativeAI from './pages/GenerativeAI';
import DataScience from "./pages/DataScience"
import DataEngineering from "./pages/DataEngineering"
import DevOps from "./pages/DevOps"
import CloudServices from './pages/CloudServices';
import Platforms from './pages/Platforms';
import WhyCloudRaize from './pages/WhyCloudRaize';
import Resources from './pages/Resources';
import Partners from './pages/Partners';
import GetDemo from './pages/GetDemo';
import Navbar from './components/Navbar';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.config({
      autoSleep: 60,
      force3D: true
    });
  }, []);

  return (
    <div className="relative">
       <Router>
        <Navbar/>
        {/* <div className="mt-16"> */}
      {/* Add margin to avoid overlapping with fixed Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/why-cloudraize" element={<WhyCloudRaize />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/get-demo" element={<GetDemo />} />
          <Route path="/solutions/devops" element={<DevOps />} />
          <Route path="/solutions/cloud" element={<CloudServices />} />
          <Route path="/solutions/data-science" element={<DataScience />} />
          <Route path="/solutions/data-engineering" element={<DataEngineering />} />
          <Route path="/solutions/generative-ai" element={<GenerativeAI />} />
          <Route path="/solutions/overview" element={<Overview />} />
        </Routes>
        
    </Router>
    </div>
  );
}

export default App;