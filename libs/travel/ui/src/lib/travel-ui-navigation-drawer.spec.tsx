import { render } from '@testing-library/react';

import TravelUiNavigationDrawer from './travel-ui-navigation-drawer';

describe('TravelUiNavigationDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelUiNavigationDrawer title="title" />);
    expect(baseElement).toBeTruthy();
  });
});
