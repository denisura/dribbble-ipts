import { render } from '@testing-library/react';

import RailUiFooter from './rail-ui-footer';

describe('RailUiFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailUiFooter />);
    expect(baseElement).toBeTruthy();
  });
});
