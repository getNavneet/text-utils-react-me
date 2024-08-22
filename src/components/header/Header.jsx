import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
function Header() {
  return (
    <>
     <nav class="sticky top-0 z-10 bg-lime-300  flex w-screen  items-center justify-between px-4 py-2">
<div className='mx-7 bg-slate-50'>
  <ul class="flex space-x-7 text-green bg-amber-200">
    <li><NavLink  to="/" class="hover:text-red-600">Home</NavLink></li>
    <li><NavLink  to="/about" class="hover:text-red-600">About</NavLink></li>
    <li><NavLink  to="/#guide" class="hover:text-red-600">Guide</NavLink></li>
    <li><NavLink  to="#" class="hover:text-red-600">Explore</NavLink></li>
  </ul>
  </div> 
</nav>
    </>
  );
}

export default Header;
