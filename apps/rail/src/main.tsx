import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RailUiThemeProvider } from '@ipts/rail-ui-theme-provider';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RailUiThemeProvider>
      <App />
    </RailUiThemeProvider>
  </StrictMode>
);
