import { render } from '@testing-library/react';

import CompanyUiIntroSection from './company-ui-intro-section';

describe('CompanyUiIntroSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyUiIntroSection />);
    expect(baseElement).toBeTruthy();
  });
});
