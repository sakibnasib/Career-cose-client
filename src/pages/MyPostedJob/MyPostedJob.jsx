import React, { Suspense } from 'react';
import UseAuth from '../../Hooks/UseAuth';
;
import JobsList from './JobsList';
import { JobMakePomise } from '../../api/JobsApi';

const MyPostedJob = () => {
    const {user}=UseAuth();
    return (
        <div>
           <h1>My Posted Job :</h1>
           <Suspense fallback={'loding'}>
      <JobsList JobMakePomise={JobMakePomise(user.email)}></JobsList>
           </Suspense>
        </div>
    );
};

export default MyPostedJob;