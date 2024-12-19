import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import 'font-awesome/css/font-awesome.min.css';

function Quotes() {
  const quotes = [
    "quote1",
    "quote2",
    "quote3",
    "quote4",
    "quote5",
    "quote6",
    "quote7",
    "quote8",
    "quote9",
    "quote10",
  ];
  
  const sources = [
    "quote1Source",
    "quote2Source",
    "quote3Source",
    "quote4Source",
    "quote5Source",
    "quote6Source",
    "quote7Source",
    "quote8Source",
    "quote9Source",
    "quote10Source",
  ];

  const { t } = useTranslation();
  
  // Set initial index and state for the current quote
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate new index, wrap around if at the end
      return (prevIndex + 1) % quotes.length;
    });
  };

 
  const prevQuote = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate new index, wrap around if at the beginning
      return (prevIndex - 1 + quotes.length) % quotes.length;
    });
  };

  return (
    <div className="container mt-5 col-lg-6 main-quote-con text-center">
      <div className="container p-5 butterflies"></div>
      <div className="container quote-title text-success">
        {t("hadith")}
      </div>
      <div className="container text-center quote">
        <p className="p-3">
          {t(quotes[currentIndex])}
        </p>
        <hr />
        <span>
          {t(sources[currentIndex])}
        </span>
      </div>
      <div className="container p-5">
      <button className="p-3 ms-3 bg-success border-warning text-warning fw-bolder" onClick={prevQuote}>
      <i className="fa fa-arrow-left"></i>
        </button>
        <button className="p-3 ms-3 bg-success border-warning text-warning fw-bolder" onClick={nextQuote}>
         <i className="fa fa-arrow-right"></i>
        </button>
       
      </div>
    </div>
  );
}

export default Quotes;
