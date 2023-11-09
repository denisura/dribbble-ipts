import { render } from '@testing-library/react';

import NeutralContainer from './neutral-container';

describe('NeutralContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NeutralContainer />);
    expect(baseElement).toBeTruthy();
  });
});
