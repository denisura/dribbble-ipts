import { render } from '@testing-library/react';

import SharedDataBulletinProvider from './shared-data-bulletin-provider';

describe('SharedDataBulletinProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDataBulletinProvider />);
    expect(baseElement).toBeTruthy();
  });
});
