import { render } from '@testing-library/react';

import CompanyUiNewsSubscriptionSection from './company-ui-news-subscription-section';

describe('CompanyUiNewsSubscriptionSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyUiNewsSubscriptionSection />);
    expect(baseElement).toBeTruthy();
  });
});
