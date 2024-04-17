import { Slider } from 'antd';
import React, { useEffect, useState } from 'react';
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
import ModalComponent from '../ModalComponent';
import Api from '../Api';
import SupabasePage from '../Supabase';

const Home = () => {
  useEffect(() => {
    function setCookie(key: string, value: string, daysToExpire: number) {
      // Calculate the expiration date
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + daysToExpire);

      // Format the cookie string with key, value, and expiration date
      const cookieString = `${key}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

      // Set the cookie
      document.cookie = cookieString;
    }
    setCookie('test', 'we testing', 1000 * 60);
  }, []);
  const [showMobile, setShowMobile] = useState<boolean>(false);
  return (
    <div>
      <div className='bg-primary w-full font-courier relative App'>
        <Nav showMobile={showMobile} setShowMobile={setShowMobile} />
        <MobileLinks showMobile={showMobile} />
        <Api />
        <SupabasePage />
        <Hero />
        {/* <Slider /> */}
        <Swiper />
        <HeroTwo />
        <HeroThree />
        <Testimonies />
        <HeroFour />
        <FAQs />
        <Footer />

        {/* <ModalComponent /> */}
      </div>
    </div>
  );
};

export default Home;
