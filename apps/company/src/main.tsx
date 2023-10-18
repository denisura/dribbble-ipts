import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { CompanyUiThemeProvider } from '@ipts/company-ui-theme-provider';
import { BrowserRouter } from '@ipts/shared-router';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CompanyUiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CompanyUiThemeProvider>
  </StrictMode>
);
