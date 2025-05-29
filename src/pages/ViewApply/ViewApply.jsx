import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApply = () => {
  const { job_id } = useParams();
  const applycation = useLoaderData();
  const handleStatusChange=(e,app)=>{
console.log(e.target.value,app)
axios.patch(`http://localhost:3000/applications/${app}`,{status:e.target.value})
.then(res=>{
    if(res.data.modifiedCount){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your status upDate Done",
  showConfirmButton: false,
  timer: 1500
});
    }
}).catch(error=>{
    console.log(error)
})
  }
  return (
    <div>
      <h1>{job_id}</h1>
      <h2>{applycation.length}</h2>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applycation.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.appLicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select onChange={e=>handleStatusChange(e,app._id)} defaultValue={app.status} className="select">
                    <option disabled={true}>UpDate Status</option>
                    <option>Pending</option>
                    <option>Call For InterView</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApply;
