import { render } from '@testing-library/react';

import CompanyUiNewsSection from './company-ui-news-section';

describe('CompanyUiNewsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyUiNewsSection />);
    expect(baseElement).toBeTruthy();
  });
});
