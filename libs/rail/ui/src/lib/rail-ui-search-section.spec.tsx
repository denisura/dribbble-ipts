import { render } from '@testing-library/react';

import RailUiSearchSection from './rail-ui-search-section';

describe('RailUiSearchSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailUiSearchSection />);
    expect(baseElement).toBeTruthy();
  });
});
