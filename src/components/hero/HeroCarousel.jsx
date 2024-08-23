import React, { useState, useEffect ,useRef } from 'react';

const slides = [
  { heading: "welcome to TextCraft:",
    para:"The Ultimate Text Toolkit."
   },
  { heading: "Slide 2: Discover amazing features.",
    para:"this is para."
   },
  { heading: "Slide 3: Join us and get started today.",
    para:"this is para."
   },
  { heading: "Slide 4: Thank you for visiting!" ,
    para:"this is para."
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
    }, 3000); // 3 seconds interval
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
    <div className="relative w-full h-64 flex items-center justify-center bg-gray-200 overflow-hidden">
      {/* Slide Text */}
      <div className="flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          {slides[currentSlide].heading}
        </h2>
        <h2 className="text-xl md:text-3xl font-bold text-center">
          {slides[currentSlide].para}
        </h2>
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-4 bg-blue-500 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-4 bg-blue-500 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Slide Indicators dots */} 
      <div className="absolute bottom-4 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              clearSlideInterval(); // Reset the interval
              setCurrentSlide(index); // Go to the clicked slide
              startSlideInterval(); // Restart the interval
            }}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
