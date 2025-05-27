import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
const location=useLocation();
     const {user,loading}=use(AuthContext);
     if(loading){
        return <>
        <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
        </>
     }
        if(!user){
           return <Navigate to='/singIn' state={location.pathname}></Navigate>
        }
    return children

};

export default PrivateRoute;