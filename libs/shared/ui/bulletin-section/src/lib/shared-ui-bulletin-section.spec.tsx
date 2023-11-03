import { render } from '@testing-library/react';

import SharedUiBulletinSection from './shared-ui-bulletin-section';

describe('SharedUiBulletinSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiBulletinSection />);
    expect(baseElement).toBeTruthy();
  });
});
