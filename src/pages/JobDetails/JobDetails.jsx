import React from "react";
import { Link, useLoaderData } from "react-router";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCategory ,MdOutlineEmail , MdMan3,MdOutlineWorkHistory} from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { LuMapPinCheck } from "react-icons/lu";
const JobDetails = () => {
    const { title,
    description,
    status,
    company_logo,
    requirements,
    salaryRange,
    company,
    location,
jobType,
category,
responsibilities,
hr_email,
hr_name,
applicationDeadline,
_id
}=useLoaderData()
  return (
   <div className="mt-10 mb-10">
     <div className="container flex flex-col w-full   p-6 mx-auto divide-y rounded-md divide-white bg-white shadow-2xl text-gray-800">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
                src={company_logo}
              alt=""
              className="object-cover w-20  rounded-full "
            />
          </div>
          <div>
            <h4 className="font-bold text-[1.4rem]">{company}</h4> 
            <span className="text-sm text-gray-600 flex items-center gap-2"><LuMapPinCheck size={15} color="blue"/> {location}</span>
          </div>
        </div>
        <div className="flex items-center space-y-2 text-yellow-700 ">
           <div className="badge badge-accent text-[1.2rem]">{status}</div>
        </div>
      </div>
      <h1 className="text-center text-[1.4rem] font-bold">{title}</h1> 
      <div className="p-4 space-y-5 text-sm text-gray-600">
        <div className="">
           <div className="md:flex justify-between mb-2">
             <div className="space-y-5">
                <p className="flex items-center gap-2 text-[1rem] font-semibold"><span><MdMan3 size={25}  color="blue"/></span> HR_Name : {hr_name}</p>
            <p className="flex items-center gap-2 text-[1rem] font-semibold"> <span><MdOutlineEmail size={25}  color="blue"/></span>HR_Email : {hr_email}</p>
            <p className="flex items-center gap-2 text-[1rem] font-semibold"><span><MdOutlineWorkHistory size={25}  color="blue"/></span> JobType : {jobType}</p>
             </div>
           <div className="space-y-5">
             <p className="flex items-center gap-2 text-[1rem] font-semibold"> <span><CiCalendarDate size={25}  color="blue"/></span>applicationDeadline:{applicationDeadline}</p>
            <p className="flex items-center gap-2 text-[1rem] font-semibold"><span><MdOutlineCategory size={25}  color="blue"/></span> category: {category}</p>
            <p className="text-[1rem] font-semibold">Responsibilities:<div className="badge badge-soft badge-primary">{responsibilities}</div> </p>
           </div>
           </div>
          <div className="badge space-y-3 mt-2 badge-soft badge-secondary  flex items-center gap-2 text-[1rem] font-semibold">
            <span><FaBangladeshiTakaSign size={25}  color="blue"/></span>
            Salary Range:
            <div className="badge badge-soft  badge-success">
               {salaryRange?.min} To {salaryRange?.max} {salaryRange?.currency}
            </div>
          </div>
        </div>
        <p>
          <span className="font-semibold text-[1rem]">Description:</span>
           {description} 
        </p>
        <div className="">
          {requirements.map((req, index) => (
            <div key={index} className="badge badge-outline badge-info">
              {req}
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <Link to={`/jobApply/${_id}`}>
        {" "}
        <button className="btn btn-block btn-outline btn-primary">
         Apply Now
        </button>
      </Link>
    </div>
   </div>
  );
};

export default JobDetails;
