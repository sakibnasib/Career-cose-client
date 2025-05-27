import React, { use, useEffect, useState } from 'react';
import JobApplyCationRow from './JobApplyCationRow';

const ApplyCationList = ({myApplyCationPromise}) => {
   const applyCation=use(myApplyCationPromise);
    const [applyCations,setApplyCations]=useState([])
    useEffect(() => {
         
        setApplyCations(applyCation);
    },[applyCation]);
    return (
        
        <div>
            <h1>{applyCations.length}</h1>
            {/* table */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          
          </label>
        </th>
        <th>Name</th>
        <th>Github</th>
        <th>Resume</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/*tbody*/}
    {
        applyCations.map((applyCation,index)=><JobApplyCationRow
        applyCations={applyCations} setApplyCations={setApplyCations}
        key={applyCation._id} index={index} applyCation={applyCation}></JobApplyCationRow>)
    }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ApplyCationList;