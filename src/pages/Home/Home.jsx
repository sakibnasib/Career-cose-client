import React, { useContext } from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import { BannerContext } from '../../contexts/BannerContext';
import Steps from './Steps';




const Home = () => {
    const {currentBanner}=useContext(BannerContext)
    return (
        <div className=''>
            {
           currentBanner === 'Banner1' ? 
 <Banner></Banner>:
      <Banner2></Banner2>
            }
     <Steps></Steps>
        </div>
    );
};

export default Home;