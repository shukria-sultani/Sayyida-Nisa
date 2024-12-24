import React from 'react'
import { useTranslation } from "react-i18next";
function ArtSection({image, description, source}) {
    const {t} = useTranslation()
  return (
     <div className="container  d-flex flex-column flex-wrap align-items-center justify-content-center text-center col-12 pt-5">
          <img src={image}  max-height={"350px"}  max-weight={"500px"} className='col-12 col-lg-6'/>
           <div className='fw-bolder p-3  ' style={{fontSize: "20px"}}>{description}</div>
           <button className='art-link rounded-2 col-lg-6 col-12  p-3 text-warning'><a href={source} target="_blank">{t("linkToArt")}</a></button>
     </div>
  )
}

export default ArtSection