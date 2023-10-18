import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { TravelUiThemeProvider } from '@ipts/travel-ui-theme-provider';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <TravelUiThemeProvider>
      <App />
    </TravelUiThemeProvider>
  </StrictMode>
);
