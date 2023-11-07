import { render } from '@testing-library/react';

import RailDataNavigationProvider from './rail-data-navigation-provider';

describe('RailDataNavigationProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailDataNavigationProvider />);
    expect(baseElement).toBeTruthy();
  });
});
