import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { TravelUiThemeProvider } from '@ipts/travel-ui';
import { BrowserRouter } from '@ipts/core-router';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <TravelUiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TravelUiThemeProvider>
  </StrictMode>
);
