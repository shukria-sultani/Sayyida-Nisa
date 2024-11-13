import React from 'react'
import { useTranslation } from 'react-i18next'
function SartingQuote() {
    const {t} = useTranslation();
  return (
     <div className="container-fluid">
        <p>{t('startingquote')}</p>         
          <p>{t('prophetQuote')}</p>
     </div>
  )
}

export default SartingQuote