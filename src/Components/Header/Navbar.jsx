
import { useContext } from 'react';
import logo from '../../assets/logo.svg'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error))
  }
  const navLinks = (
    <>
     <li className='font-bold'>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        Home
      </NavLink>
      </li>
      <li className='font-bold'>
      <NavLink
        to='/about'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        About
      </NavLink>
      </li>
      <li className='font-bold'>
      <NavLink
        to='/services'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        Services
      </NavLink>
      </li>
        {
          user?.email ? <>       
          <li className='font-bold'> 
            <NavLink
        to='/bookings'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        My Bookings
      </NavLink></li>
          <li className='font-bold'><button onClick={handleLogOut}>Logout</button></li>
          </>
          :
          <li className='font-bold'>
          <NavLink
            to='/login'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            Login
          </NavLink>
          </li>
        }
    </>
  );
  return (
    <div className='navbar bg-base-100 h-28'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                {navLinks}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
            <img src={logo} alt="" />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
        {navLinks}
        </ul>
      </div>
      <div className='navbar-end'>
        <button className="btn btn-outline text-orange-600">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
