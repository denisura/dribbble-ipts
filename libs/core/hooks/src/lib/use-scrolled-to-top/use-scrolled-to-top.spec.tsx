import { render } from '@testing-library/react';

import UseScrolledToTop from './use-scrolled-to-top';

describe('UseScrolledToTop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseScrolledToTop />);
    expect(baseElement).toBeTruthy();
  });
});
