import React from "react";
import Button from "../../Button";

const Popup = ({ closePopup, popupDone, len, setLen, type, setType }) => {
  // Handle word count change
  const handleRandomWordCount = (e) => {
    setLen(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    popupDone(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <Button
          className="absolute bg-transparent top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
          onClick={closePopup}
        >
          &times;
        </Button>

        <div>
          <form onSubmit={handleSubmit} className="w-[100%] p-5">
            {/* Number of words input */}
            <label
              htmlFor="wordsCount"
              className="text-green-800 h-[60px] mb-[30px] p-1 my-3 text-left"
            >
              Number of words:
            </label>
            <input
              id="wordsCount"
              type="number"
              onChange={handleRandomWordCount}
              value={len}
              placeholder="Eg. 100"
              className="w-full h-[45px] mt-2 rounded-md bg-slate-100 border-2 border-black-300 px-3 placeholder:pl-0 text-green-800 outline-green-600"
            />

            {/* Type select */}
            <label className="text-green-800 h-[60px] mb-[30px] p-1 my-3 text-left">
              Type:
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full h-[45px] mt-2 mb-2 rounded-md bg-slate-100 border-2 border-black-300 px-3 placeholder:pl-3 text-green-800 outline-green-600"
            >
              <option value="lorem">Lorem Ipsum</option>
              <option value="random">Random</option>
            </select>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-green-300 m-auto mt-4 p-2 w-[150px] text-center rounded-lg font-bold text-green-800"
            >
              Done
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
