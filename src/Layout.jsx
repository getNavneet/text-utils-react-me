import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import ScrollLoader from './components/scrollLoader/Scroll.jsx';
function Layout(){
  return (
    <>
    <ScrollLoader/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}


export default Layout;
