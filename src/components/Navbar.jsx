import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import { SiHomeassistant } from "react-icons/si";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/update">Update Profile</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About Us</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="mx-5 md:mx-24 lg:mx-28 mt-10 mb-20 ">
      <div className="navbar  py-6 rounded-2xl">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="text-2xl md:text-3xl ">
            <SiHomeassistant />
          </div>
          <Link to="/">
            <h2 className="ml-3 text-xl md:text-3xl font-extrabold drop-shadow-lg text-sky-900">
              Dobby&apos;s Hut
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div
                className="tooltip user-profile mr-2 md:mr-4"
                data-tip={user.displayName}
              >
                <img
                  className="profile-picture w-12 h-12 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
              <button className="btn text-sky-900" onClick={handleLogout}>
                LogOut
              </button>
            </>
          ) : (
            <>
              <div className="bg-gray-100 p-4 mr-3 rounded-full">
                <FaUser></FaUser>
              </div>

              <NavLink to="/login">
                <button className="btn text-sky-900">Login</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
