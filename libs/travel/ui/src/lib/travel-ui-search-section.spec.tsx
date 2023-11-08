import { render } from '@testing-library/react';

import TravelUiSearchSection from './travel-ui-search-section';

describe('TravelUiSearchSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelUiSearchSection />);
    expect(baseElement).toBeTruthy();
  });
});
