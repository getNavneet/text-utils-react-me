import { useState ,useRef} from "react";
import React from "react";
import Button from "../../../Button";
function Home() {
  const textRef=useRef(null)
  const [text,setText]=useState('')
  // const [previewText,setPreviewText]=useState(text)
  const [countW, setcountW] = useState(0);
  // To optimize the countWords() function for handling text changes, especially when text is being deleted in a React app, you can modify the handleOnChange function to pass the updated text to the countWords function. This ensures that you're always counting the words in the most current version of the text.
  function handleOnChange(e) {
    const newText = e.target.value;
    setText(newText);
    const wordsCount = countWords(newText);
    setcountW(wordsCount);
  }
  function handleUpperCase(){
    // const new= text.toUpperCase()
    setText(text.toUpperCase())
  }
  function handleLowerCase(){
    setText(text.toLowerCase())
  }
  function handleClearAll(){
    setText("")
    setcountW(0);
  }
  function handleExtraSpace(){
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  function handleCopyText(){
    textRef.current?.select();
    textRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(text)
  }
  function countWords(text) {
    
    // Using regular expression to count words
    const wordCount = text.match(/\b\w+\b/g) || [];
    return wordCount.length;
}
function extractEmails() {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  const mails= text.match(emailRegex) || [];
  setText(mails);
}

  return (
    <>
      <div className="text-yellow-900 text-center text-3xl pt-7 pb-7 bg-slate-100">
        {/* <h1>hello with ngrok56</h1> */}
      </div>
      <div className="w-screen bg-orange-800 text-center">
        <h1 className="text-centre text-2xl text-neutral-50 p-4">
          Enter text below to Analyse
        </h1>
        <textarea
          className=" bg-gray-200 rounded px-3 py-2 mx-auto focus:outline-none resize-vertical"
          placeholder="Start typing... or paste text here"
          style={{ width: "80%", height: "200px" }}
          value={text}
          onChange={handleOnChange}
          autoFocus
          // rows="10"
          // cols="100"
          ref={textRef}
        ></textarea>
        <div className="p-1  bg-orange-300">
          <Button className="m-1" onClick={handleUpperCase} >to UpperCase</Button>
          <Button className="m-1" onClick={handleLowerCase} >to LowerCase</Button>
          <Button className="m-1" onClick={handleClearAll} >clear all</Button>
          <Button className="m-1" onClick={handleCopyText} >copy text</Button>
          <Button className="m-1" onClick={handleExtraSpace} >remove extra space</Button>
          <Button className="m-1" onClick={extractEmails} >extract Emails</Button>
        </div>
        <h1 className="text-2xl p-2 bg-yellow-700 inline-block ">your text summary :</h1>
        <p>
          {countW} words and {text.length} characters
        </p>
        <h2>preview:</h2>
        <p>
          {text}
        </p>
      </div>
    </>
  );
}

export default Home;
