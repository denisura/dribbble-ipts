import { render } from '@testing-library/react';

import CompanyUiThemeProvider from './company-ui-theme-provider';

describe('CompanyUiThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyUiThemeProvider />);
    expect(baseElement).toBeTruthy();
  });
});
