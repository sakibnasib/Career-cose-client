import React from "react";
import { LuMapPinCheck } from "react-icons/lu";
import { Link } from "react-router";
const JobCard = ({ job }) => {
  const {
    title,
    description,
    status,
    company_logo,
    requirements,
    salaryRange,
    company,
    location,
    _id
  } = job;
  return (
    <div className="container flex flex-col w-full hover:bg-violet-50  p-6 mx-auto divide-y rounded-md divide-white bg-white shadow-2xl text-gray-800">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={company_logo}
              alt=""
              className="object-cover w-16  rounded-full "
            />
          </div>
          <div>
            <h4 className="font-bold">{company}</h4>
            <span className="text-xs text-gray-600 flex items-center gap-2"><LuMapPinCheck size={15}/> {location}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-yellow-700">
          <div className="badge badge-accent">{status}</div>
        </div>
      </div>
      <h1 className="text-center text-[1rem] font-bold">{title}</h1>
      <div className="p-4 space-y-2 text-sm text-gray-600">
        <div className="">
          <div className="badge badge-soft badge-secondary mr-2">
           Salary Range:
            <div className="badge badge-soft badge-success">
              {salaryRange?.min} To {salaryRange?.max} {salaryRange?.currency}
            </div>
          </div>
        </div>
        <p>
          <span className="font-semibold">Description:</span>
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
     <Link to={`/jobs/${_id}`}> <button className="btn btn-block btn-outline btn-primary">View Details</button></Link>
    </div>
  );
};

export default JobCard;
