import { render } from '@testing-library/react';

import CompanyUiLayout from './company-ui-layout';

describe('CompanyUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CompanyUiLayout heroTitle={undefined} pageTitle={undefined} />
    );
    expect(baseElement).toBeTruthy();
  });
});
