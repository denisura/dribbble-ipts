import { render } from '@testing-library/react';

import SharedUiPrimaryContainer from './shared-ui-primary-container';

describe('SharedUiPrimaryContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiPrimaryContainer />);
    expect(baseElement).toBeTruthy();
  });
});
