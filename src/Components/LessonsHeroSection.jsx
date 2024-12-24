import React from 'react'
import { useTranslation } from "react-i18next";

function LessonsHeroSection() {
  const {t} = useTranslation()
  return (
    <div className='container-fluid life-lessson-hero '>
        <div className="container pt-5 pt-sm-2  ">
          <h3 className='text-warning pt-md-5 mt-md-5   fw-bolder text-center'
             dangerouslySetInnerHTML={{ __html: t("lifeLessonsHero") }}
           >
          </h3>
        </div>
    </div>
  )
}

export default LessonsHeroSection