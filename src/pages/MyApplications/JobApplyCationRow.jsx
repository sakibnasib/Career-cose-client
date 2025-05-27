import React from 'react';
import Swal from 'sweetalert2';

const JobApplyCationRow = ({applyCation,index,applyCations,setApplyCations}) => {
    const {company,company_logo,title,gitHub,_id}=applyCation ;

    const handleDelete=(_id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`http://localhost:3000/applications/${_id}`,{
         method: "DELETE",
     })
  .then(data=>{
   if(data.deletedCoun){
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remaning=applyCations.filter(apli=>apli._id !== _id)
    setApplyCations(remaning)
   }
  }).catch(error=>{
    console.log(error)
  })
  }
});

 
    }

    return (
              <tr>
        <th>
          <label>
          {index +1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{company}</div>
              <div className="text-sm opacity-50">{title}</div>
            </div>
          </div>
        </td>
        <td>
         {gitHub}
        </td>
        <td>Purple</td>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
       
    );
};

export default JobApplyCationRow;