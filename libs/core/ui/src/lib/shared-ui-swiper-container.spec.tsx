import { render } from '@testing-library/react';

import SharedUiSwiperContainer from './shared-ui-swiper-container';

describe('SharedUiSwiperContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiSwiperContainer />);
    expect(baseElement).toBeTruthy();
  });
});
