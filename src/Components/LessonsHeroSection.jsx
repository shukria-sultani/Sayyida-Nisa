import React from 'react'
import { useTranslation } from "react-i18next";

function LessonsHeroSection() {
  const {t} = useTranslation()
  return (
    <div className='container-fluid life-lessson-hero '>
        <div className="container p-5">
          <p className='text-warning pt-5 ms-lg-5 mt-5 ps-lg-5 fw-bolder display-6 text-center'
             dangerouslySetInnerHTML={{ __html: t("lifeLessonsHero") }}
          >
          </p>
        </div>
    </div>
  )
}

export default LessonsHeroSection