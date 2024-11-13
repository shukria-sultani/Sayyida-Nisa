import React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';

import Header from './Components/Header.jsx'
import SartingQuote from './Components/SartingQuote.jsx';
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  return (
    <>
      <Header />
      <SartingQuote />
    </>
  )
}

export default App