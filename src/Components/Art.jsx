import React from 'react';
import ArtSection from './ArtSection';
import { useTranslation } from 'react-i18next';
function Art() {
  const {t} = useTranslation()
  return (
    <div className="container pt-5 mt-5 text-center">
       <h1 className='text-center'>{t("artTitle")}</h1>
      <div className="">
        <ArtSection 
          image={"/images/hazratfatemeh008.jpg"} 
          description={t("art1Description")}
          source={"https://shiaarts.ir/gallery/%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A7-%D8%B3-0"}
        />
        <ArtSection 
          image={"/images/Katibeh(177)-Karbobala.com.jpg"} 
          description={t("art2Description")}
          source={"https://shiaarts.ir/gallery/%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A7-%D8%B3-0"}
        />
        <ArtSection 
          image={"/images/Katibeh(13100)-Karbobala.jpg"} 
          description={t("art3Description")}
          source={"https://shiaarts.ir/gallery/%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A7-%D8%B3-0"}
        />
        <ArtSection 
          image={"/images/hazrat_fatemeh_075.jpg"} 
          description={t("art4Description")}
          source={"https://shiaarts.ir/gallery/%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A7-%D8%B3-0"}
        />
        <ArtSection 
          image={"/images/Alah copy.jpg"} 
          description={t("art5Description")}
          source={"https://shiaarts.ir/gallery/%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A7-%D8%B3-0"}
        />
        <ArtSection 
          image={"/images/463616_-2.jpg"} 
          description={t("art6Description")}
          source={"https://shiaarts.ir/gallery/%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A7-%D8%B3-0"}
        />
      </div>
    </div>
  );
}

export default Art;
