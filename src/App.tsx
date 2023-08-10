import React, { useState, useRef } from 'react';
import './App.css';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HeroFour from './components/HeroFour';
import HeroThree from './components/HeroThree';
import HeroTwo from './components/HeroTwo';
import MobileLinks from './components/MobileLinks';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Testimonies from './components/Testimonies';
import './index.css';
import SortTable from './components/SortTable';

const App: React.FC = () => {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  return (
    <div className='bg-primary w-full font-courier relative App'>
      <Nav showMobile={showMobile} setShowMobile={setShowMobile} />
      <MobileLinks showMobile={showMobile} />
      <Hero />
      <Slider />
      <HeroTwo />
      <HeroThree />
      <Testimonies />
      <HeroFour />
      <FAQs />
      <Footer />
      <SortTable />
    </div>
  );
};

export default App;
