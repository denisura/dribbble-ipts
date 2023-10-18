import { render } from '@testing-library/react';

import TravelUiThemeProvider from './travel-ui-theme-provider';

describe('TravelUiThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelUiThemeProvider />);
    expect(baseElement).toBeTruthy();
  });
});
