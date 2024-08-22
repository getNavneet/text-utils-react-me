import React from 'react';
import { NavLink ,Link} from 'react-router-dom';

function Footer() {
  return (
    <>
        <footer className='w-full text-white relative'>
<div className='bg-[#3D005E] flex justify-between items-center '>
<ul class="flex text-green flex-col pl-14 sm:pl-6 p-6 space-y-4 sm:space-y-2">
    <li><NavLink  to="/" class="hover:text-red-600">&rarr; Home</NavLink></li>
    <li><NavLink  to="/about" class="hover:text-red-600">&rarr; About</NavLink></li>
    <li><NavLink  to="/#guide" class="hover:text-red-600">&rarr; Guide</NavLink></li>
    <li><NavLink  to="#" class="hover:text-red-600">&rarr; Explore</NavLink></li>
  </ul>
  <address className='pr-14 sm:pr-10'>
    campwell road , 226003 <br></br>
lucknow ,Uttar Pradesh <br></br>
<span>+91 730-715-9865</span>
  </address>

</div>
    <div className='min-h-12 bg-blue-950 inset-0 flex justify-center items-center'>
        <h1 className="text-center">
            made with ❤ by <a href='https://navneet.website/'>Navneet</a>
        </h1>
    </div>
</footer>
    </>
  );
}

export default Footer;
