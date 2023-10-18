import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { CompanyUiThemeProvider } from '@ipts/company-ui-theme-provider';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CompanyUiThemeProvider>
      <App />
    </CompanyUiThemeProvider>
  </StrictMode>
);
