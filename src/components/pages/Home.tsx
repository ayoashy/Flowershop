import { Slider } from 'antd';
import React, { useState } from 'react';
import Animate from '../Animate';
import FAQs from '../FAQs';
import Footer from '../Footer';
import Hero from '../Hero';
import HeroFour from '../HeroFour';
import HeroThree from '../HeroThree';
import HeroTwo from '../HeroTwo';
import MobileLinks from '../MobileLinks';
import Nav from '../Nav';
import SortTable from '../SortTable';
import SwitchComponent from '../Switch';
import Testimonies from '../Testimonies';
import Swiper from '../Swiper';

const Home = () => {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  return (
    <div>
      <div className='bg-primary w-full font-courier relative App'>
        <Nav showMobile={showMobile} setShowMobile={setShowMobile} />
        <MobileLinks showMobile={showMobile} />
        <Hero />
        {/* <Slider /> */}
        <Swiper />
        <HeroTwo />
        <HeroThree />
        <Testimonies />
        <HeroFour />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
