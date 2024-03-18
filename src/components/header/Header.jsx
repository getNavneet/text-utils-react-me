import React from 'react';

function Header() {
  return (
    <>
     <nav class="flex w-screen bg-red-700 items-center justify-between px-4 py-2">
<div className='mx-7 bg-slate-50'>
  <ul class="flex space-x-7 text-green bg-amber-200">
    <li><a href="#" class="hover:text-red-600">Home</a></li>
    <li><a href="#" class="hover:text-red-600">About</a></li>
    <li><a href="#" class="hover:text-red-600">Guide</a></li>
    <li><a href="#" class="hover:text-red-600">Explore</a></li>
  </ul>
  </div>
 
</nav>

    </>
  );
}

export default Header;
