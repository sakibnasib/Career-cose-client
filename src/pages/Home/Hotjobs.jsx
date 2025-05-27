import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const Hotjobs = ({jobsPromice}) => {
    const jobs=use(jobsPromice)
    return (
        <div className='mt-5'>
            <h1 className='text-center text-[3rem] font-bold'>Jobs of the day</h1>
            <p className='text-center text[1.2rem]'>Search and connect with the right candidates faster.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {
                 jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)   
                }
            </div>
        </div>
    );
};

export default Hotjobs;