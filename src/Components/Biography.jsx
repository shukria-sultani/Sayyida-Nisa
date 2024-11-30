import React from "react";
import BiographySections from "./BiographySections";
import { useTranslation } from "react-i18next";

function Biography() {
  const { t } = useTranslation(); 
  return (
    <div className="container-fluid mt-5 pt-5">
      <h3 className="text-center fw-bolder">{t("title")}</h3>
      <div className="row">
        <div className="col-12">
          <BiographySections
            heading={t("earlyLife")}
            bodyText={t("earlyLifeContent")}
            sources={t("earlyLifeSources")}
          />
        </div>
        <div className="col-12">
          <BiographySections
            heading={t("earlyLife")}
            bodyText={t("earlyLifeContent")}
            sources={t("earlyLifeSources")}
          />   
        </div>
        <div className="col-12">
          <BiographySections
            heading={t("earlyLife")}
            bodyText={t("earlyLifeContent")}
            sources={t("earlyLifeSources")}
          />
        </div>
      </div>
    </div>
  );
}

export default Biography;
