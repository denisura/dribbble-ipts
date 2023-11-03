import { render } from '@testing-library/react';

import SharedUiCaptionCard from './shared-ui-caption-card';

describe('SharedUiCaptionCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiCaptionCard />);
    expect(baseElement).toBeTruthy();
  });
});
