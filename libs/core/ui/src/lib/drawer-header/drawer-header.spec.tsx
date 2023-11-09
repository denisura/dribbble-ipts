import { render } from '@testing-library/react';

import DrawerHeader from './drawer-header';

describe('DrawerHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerHeader />);
    expect(baseElement).toBeTruthy();
  });
});
