import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HomePage from "./Pages/HomePage";
import LifeLessons from "./Pages/LifeLessons";
import Resources from "./Pages/Resources";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Define the router without <Routes>
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    index: true, // This makes it the default route
  },
  {
    path: "/lifelessons",
    element: <LifeLessons />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);

function App() {
  const { i18n } = useTranslation();

  // Effect to load language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    } else {
      i18n.changeLanguage('fa'); // Default to Persian
    }
  }, [i18n]);
  useEffect(() => {
    document.body.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
