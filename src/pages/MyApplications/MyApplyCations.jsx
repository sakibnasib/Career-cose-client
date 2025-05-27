import React, { Suspense } from 'react';
import MyAppleCationStats from './MyAppleCationStats';
import ApplyCationList from './ApplyCationList';
import UseAuth from '../../Hooks/UseAuth'
import { myApplyCationPromise } from '../../api/ApplyCationsApi';

const MyApplyCations = () => {
    const{user} =UseAuth();

    return (
        <div>
          
           <Suspense fallback={`loding`}>
              <ApplyCationList myApplyCationPromise={myApplyCationPromise(user.email)}></ApplyCationList>
           </Suspense>
            <MyAppleCationStats>
             </MyAppleCationStats>
        </div>
    );
};

export default MyApplyCations;