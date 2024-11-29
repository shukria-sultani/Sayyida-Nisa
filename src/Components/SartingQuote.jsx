import React from 'react'
import { useTranslation } from 'react-i18next'
function SartingQuote() {
    const {t} = useTranslation();
  return (
     <div className="container-fluid starting-quote-con  d-flex flex-column">
      <div className="container  rounded-3 col-lg-6 mt-5 fw-bolder p-3  text-center first-quote"
        style={{fontSize:"1.4rem"}}
      >
      <p>{t('startingquote')}</p>  
      </div>
           <div className="container p-4 mt-4 fw-bolder text-center  rounded-3"   style={{fontSize:"1.4rem"}}>
          <p>{t('prophetQuote')}</p>                                                 
           </div>
     </div>
  )
}

export default SartingQuote