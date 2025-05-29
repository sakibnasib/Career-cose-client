import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const Addjob = () => {
  const {user}=UseAuth()
    const handleAddJob=e=>{
        e.preventDefault();
        const form=e.target
        const formdata= new FormData(form);
        const {min,max,currency,...newJob}=Object.fromEntries(formdata.entries());
        newJob.salaryRange={min,max,currency}
        newJob.requirements=newJob.requirements.split(',').map(res=>res.trim())
        newJob.responsibilities= newJob.responsibilities.split(',').map(res=>res.trim());
        newJob.status ="active",
        console.log(newJob)
        axios.post('http://localhost:3000/jobs',newJob)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your AddJob data has been saved",
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
            {/* form */}
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">basick info</legend>
{/* title */}
 <div className=" ">
    {/*  */}
     <div className="">
    <label className="label">Title</label>
  <input type="text" className="input" name='title' placeholder="title" />
  </div>
  {/* location */}
  <div className="">
    <label className="label">Location</label>
  <input type="text" className="input" name='location' placeholder="location" />
  </div>
{/*  */}
  <div className="">
    <label className="label">Company</label>
  <input type="text" className="input" name='company' placeholder="company" />
  </div>
  <div className="">
    <label className="label">Company Logo</label>
  <input type="url" name='company_logo' className="input"  placeholder="company logo" />
  </div>
  {/* job type */}
<div className="">
     <label className="label">JobType</label>
    <div className="filter">
  <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
  <input className="btn" type="radio" value='On-site' name="jobType" aria-label="On-site"/>
  <input className="btn" type="radio" name="jobType" value='Remote' aria-label="Remote"/>
  <input className="btn" type="radio" name="jobType" value='Hybrid' aria-label="Hybrid"/>
</div>
</div>
{/* category */}
<div className="">
     <label className="label">Job Category</label>
     <select defaultValue="Job Category"name='category' className="select">
  <option disabled={true}>Job Category</option>
  <option>Engineering</option>
  <option>Marketing</option>
  <option>Finance</option>
</select>
</div>
{/* applicationDeadline */}
<div className="">
  <label className="input">
  <span className="label">ApplicationDeadline</span>
  <input name='applicationDeadline' type="date" />
</label>  
</div>
{/* salaryRange */}
 <div className="">
    <label className="label">SalaryRange</label>
<div className=" grid md:grid-cols-3 grid-cols-1 gap-2 ">
     <div className="">
    <label className="label">Min</label>
  <input type="text" className="input" name='min' placeholder="min salary" />
  </div>
{/*  */}
  <div className="">
    <label className="label">Max</label>
  <input type="text" className="input" name='max' placeholder="max salary" />
  </div>
  {/* currency */}
  <div className="">
     <label className="label">Currency</label>
     <select defaultValue="Currency"name='currency' className="select">
  <option disabled={true}>Currency</option>
  <option>bdt</option>
  <option>Usd</option>
  <option>eu</option>
</select>
  </div>
</div>
 </div>
{/* description */}
<div className="">
     <label className="label">Description</label>
     <textarea className="textarea" name='description' placeholder="description"></textarea>
</div>
{/* requirements */}
<div className="">
     <label className="label">Requirements</label>
     <textarea className="textarea" name='requirements' placeholder="requirements(separate bu comma)"></textarea>
</div>
{/*responsibilities */}
<div className="">
     <label className="label">Responsibilities</label>
     <textarea className="textarea" name='responsibilities' placeholder="responsibilities(separate bu comma)"></textarea>
</div>
{/* hr_name */}
  <div className="">
    <label className="label">HR Name</label>
  <input type="text" className="input" name='hr_name' placeholder="hr_name" />
  </div>
  {/* hr_email */}
  <div className="">
    <label className="label">HR_Email</label>
  <input type="email" defaultValue={user.email} readOnly className="input" name='hr_email' placeholder="hr_email" />
  </div>
 </div>
 <input type="submit" className='btn w-full' value="Add" />
</fieldset>

            </form>
        </div>
    );
};

export default Addjob;