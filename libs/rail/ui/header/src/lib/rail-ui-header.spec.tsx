import { render } from '@testing-library/react';

import RailUiHeader from './rail-ui-header';

describe('RailUiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailUiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
