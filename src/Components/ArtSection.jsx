import React from 'react'
import { useTranslation } from "react-i18next";
function ArtSection({image, description, source}) {
    const {t} = useTranslation()
  return (
     <div className="container items-center col-lg-6 pt-5">
          <img src={image}  max-height={"350px"}  max-weight={"500px"} className='col-lg-12' />
           <p className='fw-bolder p-4' style={{fontSize: "20px"}}>{description}</p>
           <button className='art-link rounded-2 col-lg-12  p-3 text-warning'><a href={source} className=''>{t("linkToArt")}</a></button>
     </div>
  )
}

export default ArtSection