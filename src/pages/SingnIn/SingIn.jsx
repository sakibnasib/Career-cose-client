import React, { use } from 'react';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import Login from '../../assets/Lotti/Singin.json'
import SocialLoging from '../Shared/SocialLoging';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
const SingIn = () => {
  const {signInUser}=use(AuthContext)
  const handleSihgIn=e=>{
      e.preventDefault();
        const form = e.target;
          const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // sing
        signInUser(email, password)
          .then(result =>{
            console.log(result.user)
           })
           .catch(error => {
            console.log(error)
           })
  }
    return (
       <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie style={{width: '300px'}} animationData={ Login}  loop={true}></Lottie>
        <div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 mb-10">
      <div className="card-body">
         <h1 className="text-5xl font-bold text-center">SingIn!</h1>
        <form onSubmit={handleSihgIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4"> SingIn</button>
        </form>
        <SocialLoging></SocialLoging>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
		<Link to='/register' className="underline dark:text-gray-800">Register</Link>
	</p>
      </div>
    </div>  
        </div>
        </div>
    );
};

export default SingIn;