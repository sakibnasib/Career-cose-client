import React, { Suspense, useContext } from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import { BannerContext } from '../../contexts/BannerContext';
import Steps from './Steps';
import Hotjobs from './Hotjobs';




const Home = () => {
    const {currentBanner}=useContext(BannerContext);
    const jobsPromice=fetch('http://localhost:3000/jobs').then(res=>res.json())
    return (
        <div className=''>
            {
           currentBanner === 'Banner1' ? 
 <Banner></Banner>:
      <Banner2></Banner2>
            }
            <Suspense fallback={`loding`}>
                <Hotjobs jobsPromice={jobsPromice}></Hotjobs>
            </Suspense>
     <Steps></Steps>
        </div>
    );
};

export default Home;