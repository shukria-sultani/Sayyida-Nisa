import React from "react";
import BiographySections from "./BiographySections";
import {useTranslation } from "react-i18next";

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
            heading={t("marriage")}
            bodyText={t("marriageContent")}
            sources={t("marriageSources")}
          />   
        </div>
        <div className="col-12">
          <BiographySections
            heading={t("titlesOfFatime")}
            bodyText={t("titlesContent")}
            sources={t("titlesSources")}
          />
        </div>
        <div className="col-12">
          <BiographySections
            heading={t("virtues")}
            bodyText={t("virtuesContent")}
            sources={t("virtuesSources")}
          />
        </div>
        <div className="col-12">
          <BiographySections
            heading={t("socialActivities")}
            bodyText={t("socialActivitiesContent")}
            sources={t("socialActivitiesSources")}
          />
        </div>
        <div className="col-12">
          <BiographySections
            heading={t("importance")}
            bodyText={t("importanceContent")}
            sources={t("importanceSources")}
          />
        </div>
        <div className="col-12">
          <BiographySections
            heading={t("martyrdom")}
            bodyText={t("martyrdomContent")}
            sources={t("martyrdomSources")}
          />
        </div>
      </div>
    </div>
  );
}

export default Biography;
