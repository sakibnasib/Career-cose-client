import React, { use } from 'react';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import Registers from '../../assets/Lotti/Register.json'
import SocialLoging from '../Shared/SocialLoging';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
const Register = () => {
  const { createUser}=use(AuthContext)
  const handleRegister=e=>{
      e.preventDefault();
        const form = e.target;
          const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // 
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })

  }
    return (
      <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie style={{width: '300px'}} animationData={ Registers}  loop={true}></Lottie>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 mb-10">
      <div className="card-body">
         <h1 className="text-5xl font-bold text-center">Register!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"name='password' className="input" placeholder="Password" />
          <button type='submit'  className="btn btn-neutral mt-4">Register</button>
        </form>
        <SocialLoging></SocialLoging>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">You already have an account?
		<Link to='/singIn' className="underline dark:text-gray-800">Sign up</Link>
	</p>
      </div>
    </div>
    </div>
    );
};

export default Register;