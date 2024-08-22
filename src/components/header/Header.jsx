import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from '../home/Home';
function Header() {
  return (
    <>
     <nav class="flex w-screen bg-red-700 items-center justify-between px-4 py-2">
<div className='mx-7 bg-slate-50'>
  <ul class="flex space-x-7 text-green bg-amber-200">
    <li><NavLink  to="/" class="hover:text-red-600">Home</NavLink></li>
    <li><NavLink  to="/about" class="hover:text-red-600">About</NavLink></li>
    <li><Link  to="/#scrollHere" class="hover:text-red-600">Guide</Link></li>
    <li><Link  to="#" class="hover:text-red-600">Explore</Link></li>
  </ul>
  </div> 
</nav>
    </>
  );
}

export default Header;
