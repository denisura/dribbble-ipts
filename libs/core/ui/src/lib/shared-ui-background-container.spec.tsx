import { render } from '@testing-library/react';

import SharedUiBackgroundContainer from './shared-ui-background-container';

describe('SharedUiBackgroundContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedUiBackgroundContainer backgroundUrl="" />
    );
    expect(baseElement).toBeTruthy();
  });
});
