import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RailUiThemeProvider } from '@ipts/rail-ui';
import { BrowserRouter } from '@ipts/core-router';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RailUiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RailUiThemeProvider>
  </StrictMode>
);
