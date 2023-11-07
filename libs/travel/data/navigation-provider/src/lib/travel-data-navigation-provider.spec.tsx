import { render } from '@testing-library/react';

import TravelDataNavigationProvider from './travel-data-navigation-provider';

describe('TravelDataNavigationProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelDataNavigationProvider />);
    expect(baseElement).toBeTruthy();
  });
});
