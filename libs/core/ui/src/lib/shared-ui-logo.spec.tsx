import { render } from '@testing-library/react';

import SharedUiLogo from './shared-ui-logo';

describe('SharedUiLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiLogo />);
    expect(baseElement).toBeTruthy();
  });
});
