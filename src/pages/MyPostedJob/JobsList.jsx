import React, { use } from 'react';
import { Link } from 'react-router';

const JobsList = ({JobMakePomise}) => {
    const jobs=use(JobMakePomise)
    
    return (
        <div>
            <h2>total : {jobs.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Tatile</th>
        <th>ApplicationDeadline</th>
        <th>View Total applicated</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        jobs.map((job,index)=>  <tr key={job._id}>
        <th>{index + 1}</th>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td><Link to={`/applications/${job._id}`}>View Apply</Link></td>
      </tr>)
    }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default JobsList;