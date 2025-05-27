import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  const handleForJobApply=e=>{
e.preventDefault();
        const form = e.target;
        const linkedIn=form.linkedIn.value 
        const gitHub=form.gitHub.value 
        const resume=form.resume.value
        const note=form.note.value
        const application={
            jobId,
            appLicant:user.email,
            linkedIn,
            gitHub,
            resume,
            note
        };
        axios.post('http://localhost:3000/applications', application)
   .then(res=>{
    if(res.data.insertedId){
        Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your Application  has been Submitted",
  showConfirmButton: false,
  timer: 1500
});
    }
   }).catch(error=>{
    console.log(error)
   })
  } 
  return (
    <div className="mt-5 mb-8">
      <h1 className="text-[2rem] font-bold text-center">Job Apply For This : <Link to={`/jobs/${jobId}`}>Details</Link></h1>
      <div className=" flex justify-center items-center mt-6">
        <form onSubmit={handleForJobApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedIn" className="input" placeholder="LinkedIn url" />

          <label className="label">Github link</label>
          <input type="url" name="gitHub" className="input" placeholder="Github url" />

          <label className="label">Resume Link</label>
          <input type="url" name="resume" className="input" placeholder="Resume url" />
          <label className="label">Write a Note</label>
          <textarea className="textarea" name="note" placeholder="Note"></textarea>
           <input type="submit" className="btn" value="Submit" />
        </fieldset>
      </form>
      </div>
    </div>
  );
};

export default JobApply;
