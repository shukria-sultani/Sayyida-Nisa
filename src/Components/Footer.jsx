import React from "react";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom"
function Footer() {
  const { t } = useTranslation();
  return (
    <div
      className="container-fluid text-warning  p-5 mt-5"
      style={{ backgroundColor: "#007A33" }}
    >
      <div className=" text-center fw-bolder " style={{ fontSize: "1.4em" }}>
        {t("salawat")}
      </div>
      <div className="container text-center pt-5">
          <h4 className="fw-bolder">{t("quickLinks")}</h4>
        <ul className="list-unstyled " style={{fontSize: "1.1em"}}>
          <li className="pt-2">
            <Link to={'/'} className="text-warning text-decoration-none"> {t('AboutFatime')}</Link>
          </li>
          <li >
            <Link to={"/lifelessons"} className="text-warning text-decoration-none"> {t('LifeLessons')}</Link>
          </li>
          <li >
            <Link to={"/resources"} className="text-warning text-decoration-none"> {t('Resources')}</Link>
          </li>
        </ul>
         <div className="container pt-5 fw-bolder text-center" style={{fontSize: "1.4em"}}>
            {t("zuhoorDua")}
         </div>
      </div>
    </div>
  );
}

export default Footer;
