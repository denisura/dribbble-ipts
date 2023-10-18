import { render } from '@testing-library/react';

import SharedDataNavigationProvider from './shared-data-navigation-provider';

describe('SharedDataNavigationProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDataNavigationProvider value={{}} />);
    expect(baseElement).toBeTruthy();
  });
});
