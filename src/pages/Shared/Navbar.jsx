
import { use, useContext } from "react";
import { NavLink } from "react-router";
import { BannerContext } from "../../contexts/BannerContext"; // adjust this path as needed
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { setCurrentBanner } = useContext(BannerContext);
  const [isOpen, setIsOpen] = useState(false);
   const toggleDropdown = () => setIsOpen((prev) => !prev);
   const {user, signOutUser}=use(AuthContext)
const handleSignOut=()=>{
  signOutUser()
  .then(() =>{
            console.log('signed out user')
        })
        .catch(error =>{
            console.log(error)
        })
}
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Start: Mobile Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <a>Home</a>
              <ul className="p-2">
                <li>
                  <button onClick={() => setCurrentBanner("Banner1")}>
                    Home1
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentBanner("Banner2")}>
                    Home2
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          <li>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full"
      >
       <NavLink to=''>Home</NavLink>
        <svg
          className="ml-1 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <ul className="menu menu-sm bg-base-100 p-2 shadow-lg rounded-box z-[1] mt-2">
          <li>
            <button
              className="w-full text-left"
              onClick={() => setCurrentBanner("Banner1")}
            >
              Home1
            </button>
          </li>
          <li>
            <button
              className="w-full text-left"
              onClick={() => setCurrentBanner("Banner2")}
            >
              Home2
            </button>
          </li>
        </ul>
      )}
    </li>

          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      {/* End: Auth Links */}
      <div className="navbar-end space-x-2">
        {user? <button onClick={handleSignOut} className='btn'>Sign Out</button> : <>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/singIn">SingIn</NavLink>
        </>}
      </div>
    </div>
  );
};

export default Navbar;
