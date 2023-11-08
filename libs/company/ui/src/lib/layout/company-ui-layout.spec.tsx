import { render } from '@testing-library/react';

import CompanyUiLayout from './company-ui-layout';

describe('CompanyUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyUiLayout />);
    expect(baseElement).toBeTruthy();
  });
});
