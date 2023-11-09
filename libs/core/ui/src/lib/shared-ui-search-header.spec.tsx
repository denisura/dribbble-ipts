import { render } from '@testing-library/react';

import SharedUiSearchHeader from './shared-ui-search-header';

describe('SharedUiSearchHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiSearchHeader />);
    expect(baseElement).toBeTruthy();
  });
});
