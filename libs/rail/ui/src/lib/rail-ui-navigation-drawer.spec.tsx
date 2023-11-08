import { render } from '@testing-library/react';

import RailUiNavigationDrawer from './rail-ui-navigation-drawer';

describe('RailUiNavigationDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailUiNavigationDrawer title="title" />);
    expect(baseElement).toBeTruthy();
  });
});
