import React from 'react'
import BiographySections from './BiographySections'
import { useTranslation } from 'react-i18next'
function Biography() {
  const {t} = useTranslation();
  return (
     <div className="container">
          <div className="container mt-5">
            <h3>{t("title")}</h3>
            <BiographySections
              heading={t("earlyLife")}
              bodyText={t("earlyLifeContent")}
            />
                   
            
            
          </div>
     </div>
  )
}

export default Biography