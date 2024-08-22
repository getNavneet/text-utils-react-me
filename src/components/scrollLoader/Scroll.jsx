import React, { useEffect, useState } from 'react';
import './loader.css'; // Import CSS file for loader styling

function ScrollLoader() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop; //current scroll position
      const scrollHeight = document.documentElement.scrollHeight; //total scrollable height
      const clientHeight = document.documentElement.clientHeight; //height of the viewport 

      const newScrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercent(newScrollPercent); //change in a state 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {

      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <div
      className="loader"
      style={{ width: `${scrollPercent}%` }}
    />
  );
}

export default ScrollLoader;
