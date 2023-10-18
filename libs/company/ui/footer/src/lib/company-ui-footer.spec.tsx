import { render } from '@testing-library/react';

import CompanyUiFooter from './company-ui-footer';

describe('CompanyUiFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyUiFooter />);
    expect(baseElement).toBeTruthy();
  });
});
