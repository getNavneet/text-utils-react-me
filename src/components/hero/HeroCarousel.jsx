import React, { useState, useEffect ,useRef } from 'react';
import Button from '../../Button';
const slides = [
  { heading: "welcome 🤗 to TextCraftz:",
    para:"The Ultimate Text Toolkit."
   },
  { heading: "Generate Random words.",
    para:"used as sample text and space filler."
   },
  { heading: "Extract e-mail Ids.",
    para:"paste a long para and we will extract e-mail ids from it."
   },
  { heading: "Remove Extra space" ,
    para:"have extra spaces in your para, just paste it here we will remove it."
  },
];
function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  // Function to start the slideshow interval
  const startSlideInterval = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // 5 seconds interval
  };

  // Function to clear the slideshow interval
  const clearSlideInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

 // Start the slideshow when the component mounts
 useEffect(() => {
  startSlideInterval();

  // Clear the interval when the component unmounts
  return () => clearSlideInterval();
}, []);
  const nextSlide = () => {
    clearSlideInterval();
    setCurrentSlide((currentSlide + 1) % slides.length);
    startSlideInterval();

  };

  const prevSlide = () => {
    clearSlideInterval();
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    startSlideInterval();
  };

  return (
    <div className="relative w-full h-40 lg:h-64 flex items-center justify-center  overflow-hidden shadow">
      {/* Slide Text */}
      <div className="p-2 m-6 flex flex-col items-center justify-center  transition-opacity duration-1000 ease-in-out">
        {currentSlide !== 0 && (<>
          <h2 className="text-2xl md:text-4xl font-bold text-center underline decoration-dotted text-orange-600">
          {slides[currentSlide].heading}
        </h2>
        <h3 className="text-xl md:text-3xl pt-2 text-center text-gray-500">
          {slides[currentSlide].para}
        </h3>
          </>)
        }
       {/* code for first slide. */}
        {
  currentSlide === 0 && (
    <>
      <h2 className="text-3xl  md:text-4xl font-bold text-orange-600 text-center">
      welcome 🤗
      </h2>
      <h2 className="text-2xl pb-4 md:text-4xl font-bold text-gray-500 text-center">
      this is TextCraft
      </h2>
      <h2 className="text-xl md:text-3xl text-center text-gray-300">
      The Ultimate Text Toolkit.
      </h2>
    </>
  )
}
        
      </div>

      {/* Previous Button */}
      <Button
        className="hidden sm:block absolute left-4 bg-cyan-600 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </Button>

      {/* Next Button */}
      <Button
        className="hidden sm:block absolute right-4 bg-cyan-600 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </Button>

      {/* Slide Indicators dots */} 
      <div className="absolute bottom-3 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              clearSlideInterval(); // Reset the interval
              setCurrentSlide(index); // Go to the clicked slide
              startSlideInterval(); // Restart the interval
            }}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentSlide === index ? "bg-cyan-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
