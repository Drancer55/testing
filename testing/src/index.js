import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './Translations/ES/global.json';
import global_en from './Translations/EN/global.json';

// i18next es una herramienta para traducir de forma práctica algunos textos en diversos idiomas
// a modo de arreglo de objetos se establece el idioma inicial, así como los recursos guardados en la carpeta Translations
i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* i18next puede usarse estilo react-context (a manera global)*/}
    <I18nextProvider i18n={i18next}> 
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
