import { render } from '@testing-library/react';

import CompanyDataNavigationProvider from './company-data-navigation-provider';

describe('CompanyDataNavigationProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyDataNavigationProvider />);
    expect(baseElement).toBeTruthy();
  });
});
