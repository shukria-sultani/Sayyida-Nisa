import React from "react";
import LifeLessonsSection from "./LifeLessonsSection";
import { useTranslation } from "react-i18next";
function LifeLessons() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid d-flex flex-column align-items-center life-lesson p-lg-5">
      <h3 className="p-5 text-warning">{t("lifeLessonsTitle")}</h3>
      <p className="fw-bolder p-3 ">{t("introduction")}</p>
      <div className=" container">
        <LifeLessonsSection
          heading={t("worship")}
          bodyText={t("worshipContent")}
          sources={t("worshipSources")}
        />
      </div>

      <div className=" container">
        <LifeLessonsSection
          heading={t("sacrifice")}
          bodyText={t("sacrificeContent")}
          sources={t("sacrificeSources")}
        />
      </div>

      <div className=" container">
        <LifeLessonsSection
          heading={t("simplicity")}
          bodyText={t("simplicityContent")}
        />
      </div>

      <div className=" container">
        <LifeLessonsSection
          heading={t("hijab")}
          bodyText={t("hijabContent")}
          sources={t("hijabSources")}
        />
      </div>

      <div className=" container">
        <LifeLessonsSection
          heading={t("mother")}
          bodyText={t("motherContent")}
        />
      </div>
    </div>
  );
}

export default LifeLessons;
