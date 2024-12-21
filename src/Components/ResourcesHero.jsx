import React from 'react';
import { Slide } from 'react-slideshow-image';
import { useTranslation } from "react-i18next";
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'auto',
  backgroundPosition: "center",
  backgroundRepeat :"no-repeat",
  height: "90vh"
};

const ResourcesHero = () => {
    const { t, i18n } = useTranslation(); // Get the current language
    const currentLang = i18n.language; // Get the current language

    const slideImages = [
        {
          url: '../public/images/fa.jpeg',
          caption: t("resourceQuote1")
        },
        {
          url: '../public/images/painting.jpeg',
          caption: t("resourceQuote2")
        },
        {
          url: '../public/images/f.jpeg',
          caption: t("resourceQuote3")
        },
    ];

    // Determine styles based on language
    const textStyle = {
      backgroundColor: "rgba(248, 248, 239, 0.9)",
      direction: currentLang === 'fa' ? 'rtl' : 'ltr', // Set direction based on language
      textAlign: currentLang === 'fa' ? 'right' : 'left', // Align text based on language
      fontSize:  "25px"
    };

    return (
      <div className="slide-container">
        <Slide 
          duration={2000} 
          transitionDuration={1000} 
        >
          {slideImages.map((slideImage, index) => (
            <div key={index} style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <div className='col-lg-6 p-5 text-center fw-bolder text-warning' style={textStyle}> 
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    );
}

export default ResourcesHero;
