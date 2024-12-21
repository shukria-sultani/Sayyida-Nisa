import React from 'react'
import { useTranslation } from "react-i18next";
function Documentation() {
const {t} = useTranslation()
  return (

 <div className="d-flex mt-5 flex-column align-items-center text-center pt-5 justify-content-center">
    <h1 className='p-4'>{t("documentation")}</h1>
    
      <iframe  width="500" height="400" src="https://www.youtube.com/embed/xfiv0WUQe1c?si=m9EYFN_4sew9YKrm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className='col-lg-6 col-sm-12  p-5' ></iframe>
</div>

  )
}

export default Documentation