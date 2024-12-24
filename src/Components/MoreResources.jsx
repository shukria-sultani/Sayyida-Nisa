import React from "react";
import { useTranslation } from "react-i18next";
function MoreResources() {
const {t} = useTranslation()
  return (
     <div className="container d-flex flex-column col-lg-6  mt-5 pt-5 text-center">
         <img src="../public/images/salawat.PNG" alt=""  />
         <div className="container pt-3">
              <h1>{t("moreResourcesTitle")}</h1>
            <p style={{fontSize: "20px"}}>{t("moreResourcesContent")}</p>
           <button type="button" className="art-link col-12 col-lg-6 p-2 rounded-2"><a href="https://montazer.ir/la24-2/" target="_blank" className=" ">{t("moreResourcesLink")}</a></button>
         </div>
     </div>
  );
}

export default MoreResources;
