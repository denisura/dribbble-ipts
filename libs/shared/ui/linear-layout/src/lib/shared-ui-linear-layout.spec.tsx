import { render } from '@testing-library/react';

import SharedUiLinearLayout from './shared-ui-linear-layout';

describe('SharedUiLinearLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiLinearLayout />);
    expect(baseElement).toBeTruthy();
  });
});
