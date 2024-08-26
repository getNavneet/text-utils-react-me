import React from 'react';

function About() {
  return (
    <div>
      <section className="bg-gray-100 p-8 rounded-lg shadow-md">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About the Project</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      Hey! I'm <span className="font-semibold">Navneet</span>. I have been learning web development for a long time, and now I have almost completed it. 
      Recently, I started building some projects. The projects I built earlier were based on tutorial guides, 
      but this time, I started building from scratch. Yes, this is also inspired by a <a href="https://youtu.be/kEvfVw5Sq5c?feature=shared" className="text-blue-500 underline">YouTube tutorial, </a>
      but I built it myself.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      I took about 2 weeks to build this project. In the first week, I spent an average of 4 hours per day, 
      and in the second week, I worked around 6 hours a day, totaling 70 hours. Please note that the time span 
      of two weeks was not continuous, meaning I was not consistent. There was a break of around 2 months. 
      I started building this in May 2024, before my college summer break, and then I enjoyed my summer. 
      I resumed this project in August 2024.
    </p>
    <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">A complete open source project</h3>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      This is a completely open-source project. Go and  <a href="https://github.com/getNavneet/text-utils-react-me" className="text-blue-500 underline">clone the project</a>  from GitHub, and feel free to make contributions.
    </p>

    <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Talking About the Difficulty of the Project</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      I think I can consider this a medium difficulty project. Beginners can also try building this kind of web app. 
      This project can help you strengthen concepts like <span className="font-semibold">useEffect, child component, 
      parent component, navigation, NavLink, routing, popups, and carousel</span>.
    </p>

    <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Difficulties I Faced</h3>
    <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed">
      <li className="mt-2">
        As I had started the code for this project 2 months ago, it took me 4-5 hours just to understand my previously written code.
      </li>
      <li className="mt-2">
        The second major difficulty was making a header in which I have two links—one for home and another for a particular component in the home component. 
        This was solved by referencing that element and making it scroll into view using <code className="bg-gray-200 p-1 rounded">scrollIntoView</code>.
      </li>
      <li className="mt-2">
        Selecting the right color so that the website looks good also consumed a lot of my time.
      </li>
      <li className="mt-2">
        Generating a long random word was a challenge. If users generate a very long word like 2000-5000 characters, 
        this was resolved by displaying only 100 words and then showing a "Show More" button.
      </li>
    </ol>

    <p className="text-right text-sm text-gray-500 mt-8">
      Note written on 27th August 2024.
    </p>
  </div>
</section>

      

    



      


      

    </div>
  );
}

export default About;
