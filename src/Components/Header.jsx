import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
function Header() {
  const activeLink = ({ isActive }) =>
    isActive ? "nav-link active p-3  text-warning" : "nav-link p-3 text-warning";

  const { t, i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('selectedLang', lang);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#007A33" }}>
      <div className="container">
        <a className="navbar-brand text-warning fw-bolder display-2" href="#" style={{ fontSize: '1.9rem' }}>
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
        <div className="collapse navbar-collapse m-3 ps-lg-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={activeLink} to="/" style={{ fontSize: '1.3rem' }}>
                {t("AboutFatime")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={activeLink} to="/lifelessons" style={{ fontSize: '1.3rem' }}>
                {t("LifeLessons")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={activeLink} to="/resources" style={{ fontSize: '1.3rem' }}>
                {t("Resources")}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link p-3 dropdown-toggle text-warning"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: '1.1rem' }}
              >
                {t("Language")}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "#007A33" }}>
                <a className="dropdown-item text-warning" href="#" onClick={() => changeLang('en')}>
                  {t("Language1")}
                </a>
                <a className="dropdown-item text-warning" href="#" onClick={() => changeLang('fa')}>
                  {t("Language2")}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
