import { render } from '@testing-library/react';

import SharedUiHero from './shared-ui-hero';

describe('SharedUiHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiHero />);
    expect(baseElement).toBeTruthy();
  });
});
