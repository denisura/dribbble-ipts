import { render } from '@testing-library/react';

import SharedUiNavigationList from './shared-ui-navigation-list';

describe('SharedUiNavigationList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedUiNavigationList color="inherit" navItems={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
