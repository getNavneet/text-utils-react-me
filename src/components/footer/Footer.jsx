import React from 'react';
import { NavLink} from 'react-router-dom';
import github from "../../assets/github.svg"
import insta from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import whatsapp from "../../assets/whatsapp.svg"

function Footer() {
  return (
    <>
        <footer className='w-full text-white relative '>
<div className='bg-cyan-900 flex flex-row justify-between  items-center'>
<ul class="flex  flex-col ml-7 m-6 lg:ml-44 space-y-4 sm:space-y-2 ">
    <li><NavLink  to="/" >&rarr; Home</NavLink></li>
    <li><NavLink  to="/about" >&rarr; About</NavLink></li>
    <li><NavLink  to="/#guide" >&rarr; Guide</NavLink></li>
    <li><NavLink  to="#" >&rarr; Explore</NavLink></li>
  </ul>
  <address className='m-2 mr-5 lg:mr-28  '>
    campwell road , 226003 <br></br>
lucknow ,Uttar Pradesh <br></br>
<span><a href="tel:+917307159865">+91 730-715-9865</a></span>
  </address>
</div>

<div className="flex flex-row justify-center items-center space-x-5 lg:space-x-8 p-4 bg-cyan-900  ">
          <a href="https://github.com/getNavneet" target="_blank" rel="noreferrer">
            <img src={github} alt="linkedin" className="w-10 lg:w-13 " />
          </a>
          <a href="https://x.com/get2Navneet" target="_blank" rel="noreferrer">
            <img src={twitter} alt="github" className="w-11 lg:w-14" />
          </a>
          <a href="https://www.instagram.com/bittu_boss__01_/" target="_blank" rel="noreferrer">
            <img src={insta} alt="instagram" className="w-9 lg:w-11" />
          </a>
          <a href="https://wa.me/+917307159865?text=hello%20Navneet" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="twitter" className="w-9 lg:w-11" />
          </a>
          
        </div>

    <div className='min-h-12  flex flex-col bg-cyan-950 inset-0  justify-center items-center'>
    <p className='p-3'>&copy; 2024 textCraftz</p>
        <h1 className="text-center pb-3">
            made with ❤ by <a href='https://navneet.website/'><span className=''>Navneet</span></a>
        </h1>
    </div>
</footer>
    </>
  );
}

export default Footer;
