import { render } from '@testing-library/react';

import SharedUiActionCard from './shared-ui-action-card';

describe('SharedUiActionCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiActionCard />);
    expect(baseElement).toBeTruthy();
  });
});
