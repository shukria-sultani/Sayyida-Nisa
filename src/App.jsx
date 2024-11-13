import React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';

import Header from './Components/Header.jsx'
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  return (
    <>
      <Header></Header>
    </>
  )
}

export default App