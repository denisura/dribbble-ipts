import { render } from '@testing-library/react';

import TravelUiPopularSection from './travel-ui-popular-section';

describe('TravelUiPopularSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelUiPopularSection />);
    expect(baseElement).toBeTruthy();
  });
});
