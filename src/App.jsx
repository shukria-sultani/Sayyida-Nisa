import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// import Header from "./Components/Header.jsx";
// import SartingQuote from "./Components/SartingQuote.jsx";
// import Biography from "./Components/Biography.jsx";
// import Footer from "./Components/Footer.jsx";

import HomePage from "./Pages/HomePage"
import LifeLessons from "./Pages/LifeLessons"
import Resources from "./Pages/Resources";
import {Route,
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider} from "react-router-dom"
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
    <Route index element= {<HomePage />}/>
    <Route path ="/lifelessons" element= {<LifeLessons />}/>
    <Route path="/resources" element= {<Resources />} ></Route>
    </Route>
  )
)
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
