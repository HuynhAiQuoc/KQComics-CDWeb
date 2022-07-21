import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import 'bootstrap/dist/js/bootstrap.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Suspense>
        <App />
      </Suspense>
    </GlobalStyles>
  </React.StrictMode>
);


reportWebVitals();
