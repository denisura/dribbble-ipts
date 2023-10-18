import { render } from '@testing-library/react';

import CompanyUiNavigationDrawer from './company-ui-navigation-drawer';

describe('CompanyUiNavigationDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyUiNavigationDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
