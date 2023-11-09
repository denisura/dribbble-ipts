import { render } from '@testing-library/react';

import SharedUiNavigationStack from './shared-ui-navigation-stack';

describe('SharedUiNavigationStack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiNavigationStack />);
    expect(baseElement).toBeTruthy();
  });
});
