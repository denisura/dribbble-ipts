import { render } from '@testing-library/react';

import RailUiSubscriptionSection from './rail-ui-subscription-section';

describe('RailUiSubscriptionSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailUiSubscriptionSection />);
    expect(baseElement).toBeTruthy();
  });
});
