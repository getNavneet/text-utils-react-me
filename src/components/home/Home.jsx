import React from "react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import TextPreview from "../textPreview/TextPreview";
import Button from "../../Button";
import { generateLorem } from "../../utils/generateWords";
import Slideshow from "../hero/HeroCarousel";
import Popup from "../popup/RandomWords";
function Home() {
  const textRef = useRef(null);
  const guideRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    // Check if the location's hash matches "#guide"
    if (location.hash === "#guide") {
      // Scroll to the guide section when the component renders
      guideRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to top if navigating to Home without #guide hash
      window.scrollTo(0, 0);
    }
  }, [location]);
  const [text, setText] = useState("");

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [len, setLen] = useState(5);
  const [type, setType] = useState("lorem");

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = "visible";
  };
  const popupDone = () => {
    const txt = generateLorem(len);
    setcountW(len);
    setText(txt);
    closePopup();
  };

  
  const [countW, setcountW] = useState(0);

  function handleOnChange(e) {
    const newText = e.target.value;
    setText(newText);
    const wordsCount = countWords(newText);
    setcountW(wordsCount);
  }
  function handleUpperCase() {
    // const new= text.toUpperCase()
    setText(text.toUpperCase());
  }
  function handleLowerCase() {
    setText(text.toLowerCase());
  }
  function handleClearAll() {
    setText("");
    setcountW(0);
  }
  function handleExtraSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  function handleCopyText() {
    textRef.current?.select();
    textRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(text);
  }
  function countWords(text) {
    // Using regular expression to count words
    const wordCount = text.match(/\b\w+\b/g) || [];
    return wordCount.length;
  }
  function extractEmails() {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const mails = text.match(emailRegex) || [];
    setText(mails);
  }
  function extractPhoneNumbers() {
    // Regular expression to match phone numbers in various formats
    const phoneRegex =
      /(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}/g;
    // Extract phone numbers from the text
    const phoneNumbers = text.match(phoneRegex) || [];
    setText(phoneNumbers);
  }
  return (
    <>
      {/* <HeroSection/> */}
      <Slideshow></Slideshow>
      <div className="text-center mt-4 bg-slate-100 "></div>
      <div className="w-full bg-cyan-600 text-center">
        <h1 className="text-centre text-2xl text-neutral-50 p-4">
          Enter text below to Analyse
        </h1>
        <textarea
          className=" bg-cyan-800 rounded px-3 py-2 mx-auto focus:outline-none resize-vertical shadow-xl border"
          placeholder="Start typing... or paste text here"
          style={{ width: "80%", height: "200px" }}
          value={text}
          onChange={handleOnChange}
          autoFocus
          // rows="10"
          // cols="100"
          ref={textRef}
        ></textarea>
        <div className="p-1 w-5/6 m-auto ">
          <Button className="m-1 px-4 py-2 shadow-xl  " onClick={openPopup}>
            generate random words
          </Button>

          <Button className="m-1 px-4 py-2 shadow-xl" onClick={handleUpperCase}>
            to UpperCase
          </Button>
          <Button className="m-1 px-4 py-2 shadow-xl" onClick={handleLowerCase}>
            to LowerCase
          </Button>
          <Button className="m-1 px-4 py-2 shadow-xl" onClick={handleClearAll}>
            clear all
          </Button>
          <Button className="m-1 px-4 py-2 shadow-xl" onClick={handleCopyText}>
            copy text
          </Button>
          <Button className="m-1 px-4 py-2 shadow-xl" onClick={handleExtraSpace}>
            remove extra space
          </Button>
          <Button className="m-1 px-4 py-2 shadow-xl" onClick={extractEmails}>
            extract Emails
          </Button>
          <Button className="m-1 px-4 py-2 shadow-xl" onClick={extractPhoneNumbers}>
            extract phone no
          </Button>
        </div>
        <h1 className="text-2xl p-2  inline-block ">
          your text summary :
        </h1>
        <p>
          {countW} words and {text.length} characters
        </p>
        {
          text &&
          <TextPreview text={text} />}

      </div>
      <div
        ref={guideRef}
        class=" w-screen flex flex-col justify-center items-center bg-grey-1s00"
      >
        <div class=" w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 class="text-3xl font-bold mb-4">
            User Guide for Text Utility React App
          </h1>

          <h2 class="text-2xl font-bold mb-2 " id="scrollHere">
            Introduction
          </h2>
          <p>
            Welcome to the Text Utility React App! This app provides various
            functions to manipulate text input, including converting text to
            lowercase, uppercase, removing extra spaces, and extracting mobile
            numbers and emails.
          </p>

          <h2 class="text-2xl font-bold my-2">Getting Started</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              <strong>Accessing the App:</strong> Open your web browser and
              navigate to the URL where the Text Utility React App is hosted.
              You can also run the app locally by cloning the repository and
              running it using npm or yarn.
            </li>
            <li>
              <strong>Interface Overview:</strong> Upon loading the app, you'll
              see a simple user interface with a text input field and several
              buttons corresponding to different text manipulation functions.
            </li>
          </ol>

          <h2 class="text-2xl font-bold my-2">Using the Features</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              <strong>Converting Text Case:</strong>
              <ul class="list-disc list-inside">
                <li>
                  <strong>To Lowercase:</strong> Click on the "Convert to
                  Lowercase" button to change all text in the input field to
                  lowercase.
                </li>
                <li>
                  <strong>To Uppercase:</strong> Click on the "Convert to
                  Uppercase" button to change all text in the input field to
                  uppercase.
                </li>
              </ul>
            </li>
            <li>
              <strong>Removing Extra Spaces:</strong> Click on the "Remove Extra
              Spaces" button to remove any extra spaces (more than one
              consecutive space) from the text in the input field.
            </li>
            <li>
              <strong>Extracting Mobile Numbers:</strong> Click on the "Extract
              Mobile Numbers" button to find and display any mobile phone
              numbers present in the text in the input field. This feature will
              help you quickly identify and extract mobile numbers from a chunk
              of text.
            </li>
            <li>
              <strong>Extracting Emails:</strong> Click on the "Extract Emails"
              button to find and display any email addresses present in the text
              in the input field. This feature will help you quickly identify
              and extract email addresses from a chunk of text.
            </li>
          </ol>

          <h2 class="text-2xl font-bold my-2">Tips and Best Practices</h2>
          <ul class="list-disc list-inside mb-4">
            <li>
              <strong>Input Text:</strong> Paste or type the text you want to
              manipulate into the text input field. The app will perform the
              selected operation(s) on this text.
            </li>
            <li>
              <strong>Multiple Operations:</strong> You can perform multiple
              operations sequentially. For example, you can convert text to
              lowercase, remove extra spaces, and extract mobile numbers all in
              one go.
            </li>
            <li>
              <strong>Clearing Text:</strong> Use the "Clear Text" button to
              clear the input field and start fresh if needed.
            </li>
          </ul>

          <h2 class="text-2xl font-bold my-2">Example Usage</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              <strong>Basic Manipulation:</strong>
              <ul class="list-disc list-inside">
                <li>Enter text into the input field.</li>
                <li>
                  Click on "Convert to Lowercase" to convert the text to
                  lowercase.
                </li>
                <li>
                  Click on "Remove Extra Spaces" to clean up any extra spaces.
                </li>
                <li>
                  Click on "Extract Mobile Numbers" to find and display any
                  mobile numbers present in the text.
                </li>
              </ul>
            </li>
            <li>
              <strong>Advanced Extraction:</strong>
              <ul class="list-disc list-inside">
                <li>
                  Enter a longer piece of text containing mobile numbers and
                  email addresses into the input field.
                </li>
                <li>
                  Click on "Extract Mobile Numbers" to find and display any
                  mobile numbers present in the text.
                </li>
                <li>
                  Click on "Extract Emails" to find and display any email
                  addresses present in the text.
                </li>
              </ul>
            </li>
          </ol>

          <h2 class="text-2xl font-bold my-2">Conclusion</h2>
          <p>
            The Text Utility React App offers convenient features for
            manipulating text, including converting case, removing extra spaces,
            and extracting mobile numbers and email addresses. Whether you're
            cleaning up text for analysis or extracting contact information,
            this app has you covered. Enjoy using the app and feel free to
            provide feedback or suggestions for improvement!
          </p>
        </div>
      </div>

      {isPopupOpen && (
        <Popup
          len={len}
          setLen={setLen}
          setType={setType}
          type={type}
          closePopup={closePopup}
          popupDone={popupDone}
        />
      )}
    </>
  );
}

export default Home;
