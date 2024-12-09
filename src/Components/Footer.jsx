import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div
      className="container-fluid text-warning  p-5 mt-5"
      style={{ backgroundColor: "#007A33" }}
    >
      <div className=" text-center fw-bolder " style={{ fontSize: "1.5em" }}>
        {t("salawat")}
      </div>
      <div className="container pt-5">
          <h4 className="fw-bolder">{t("quickLinks")}</h4>
        <ul className="list-unstyled " style={{fontSize: "1.1em"}}>
          <li className="text-decoration-none">
            <a href="" className="text-warning"> {t('AboutFatime')}</a>
          </li>
          <li >
            <a href="" className="text-warning"> {t('LifeLessons')}</a>
          </li>
          <li >
            <a href="" className="text-warning"> {t('Resources')}</a>
          </li>
        </ul>
         <div className="container fw-bolder text-center" style={{fontSize: "2em"}}>
            {t("zuhoorDua")}
         </div>
      </div>
    </div>
  );
}

export default Footer;
