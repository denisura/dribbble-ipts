import { render } from '@testing-library/react';

import PrimaryContainer from './primary-container';

describe('PrimaryContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrimaryContainer />);
    expect(baseElement).toBeTruthy();
  });
});
