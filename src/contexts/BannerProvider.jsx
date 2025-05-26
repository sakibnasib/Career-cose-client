import React, { useState } from 'react';
import { BannerContext } from './BannerContext';
const BannerProvider = ({children}) => {
    const [currentBanner,setCurrentBanner]=useState('Banner1')

    return (
        <BannerContext.Provider value={{currentBanner,setCurrentBanner}}>
            {children}
        </BannerContext.Provider>
    );
};

export default BannerProvider;