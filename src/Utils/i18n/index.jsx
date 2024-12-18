import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translation files 
import enAboutFatima from "../i18n/locales/en/enAboutFatima.json"
import enLifeLessons from "../i18n/locales/en/enLifeLessons.json"
import enQuotes from "../i18n/locales/en/enQuotes.json"

// Persian translation files 
import faAboutFatima from "../i18n/locales/fa/faAboutFatima.json"
import faLifeLessons from "../i18n/locales/fa/faLifeLessons.json"
import faQuotes from "../i18n/locales/fa/faQuotes.json"

const resources = {
  en: {
    translation: {
      ...enAboutFatima,
      ...enLifeLessons,
      ...enQuotes
    }
  },
  fa: {
    translation:{
      ...faAboutFatima,
      ...faLifeLessons,
      ...faQuotes
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;