import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next'; // Import the provider
import './index.css';
import i18n from './Utils/i18n/index.jsx'; // Ensure this is your i18n configuration
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}> {/* Wrap App with I18nextProvider */}
      <App />
    </I18nextProvider>
  </StrictMode>,
);
