import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
function Header() {
  const { t, i18n } = useTranslation();
 const changeLang = (lang) =>{
      i18n.changeLanguage(lang)
 }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#007A33 " }}
    >
      <div className="container ">
        <a className="navbar-brand text-warning fw-bolder" href="#">
          {t("Name")}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container ms-lg-5 ps-5">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-warning" href="#">
                {t("AboutFatime")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-warning" href="#">
                {t("LifeLessons")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-warning" href="#">
                {t("Rescources")}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-warning "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("Language")}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "#007A33" }}
              >
                <a className="dropdown-item   text-warning" href="#" onClick={() => changeLang('en')}>
                  {t("Language1")}
                </a>
                <a className="dropdown-item   text-warning" href="#" onClick={() => changeLang('fa')}>
                  {t("Language2")}
                </a>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
