import { render } from '@testing-library/react';

import TravelUiDealSubscriptionSection from './travel-ui-deal-subscription-section';

describe('TravelUiDealSubscriptionSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelUiDealSubscriptionSection />);
    expect(baseElement).toBeTruthy();
  });
});
