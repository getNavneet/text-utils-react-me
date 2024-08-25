import React from "react";
import { NavLink,useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();

  return (
    <>
      <nav className="min-h-14 sticky top-0 z-10 bg-cyan-300 flex w-full items-center justify-between  ">
      <div className="hidden sm:block ml-32 font-bold text-2xl ">
          textCraftz
        </div>
        <div className="  lg:mr-16  m-auto font-semibold text-lg ">
          <ul className="flex px-3 space-x-7 text-green  ">
            <li>
              <NavLink
                to="/"
                className={`${
                  location.pathname === "/" && !location.hash
                    ? "text-gray-700 underline"
                    : "hover:text-red-600 hover:underline"
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-red-600 hover:underline"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#guide"
                className={`${
                  location.hash === "#guide"
                    ? "text-blue-600"
                    : "hover:text-red-600 hover:underline"
                }`}
              >
                Guide
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-red-600 hover:underline"
                }
              >
                Explore
              </NavLink>
            </li>
          </ul>
        </div>
       
      </nav>
    </>
  );
}

export default Header;
