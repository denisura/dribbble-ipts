import { render } from '@testing-library/react';

import CompanyUiHeader from './company-ui-header';

describe('CompanyUiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyUiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
