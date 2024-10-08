import React, { useState } from "react";

function TextPreview({ text }) {
  const [showFullText, setShowFullText] = useState(false);

  // Split the text into an array of words
  let displayedText,words ;
   

   words =  text.split(" ") ;
   displayedText = showFullText ? text : words.slice(0, 100).join(" ");


  // Decide whether to show the full text or the first 100 words

  return (
    <>
      <h2 className="pt-6 text-orange-700">text preview:</h2>
      
      {text && (
        <p className="w-5/5 md:w-4/5 lg:w-4/5 p-2 lg:p-10 m-auto ">
        {displayedText} 
        {words.length > 100 && (
        <button className="text-neutral-200" onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? "Show Less" : "... Show More"}
        </button>
      )}
      </p>
      )}

      
    </>
  );
}

export default TextPreview;
