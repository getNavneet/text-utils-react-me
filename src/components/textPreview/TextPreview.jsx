import React, { useState } from 'react';

function TextPreview({ text }) {
  const [showFullText, setShowFullText] = useState(false);

  // Split the text into an array of words
  const words = text.split(' ');

  // Decide whether to show the full text or the first 100 words
  const displayedText = showFullText ? text : words.slice(0, 100).join(' ');

  return (
    <>
         <h2>preview:</h2>
        <p className="w-5/5 md:w-4/5 lg:w-4/5 p-6 lg:p-10 m-auto bg-red-950">{displayedText}</p>
      
      
      {words.length > 100 && (
        <button onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? 'Show Less' : 'Show More'}
        </button>
      )}
    </>
  );
}

export default TextPreview;
