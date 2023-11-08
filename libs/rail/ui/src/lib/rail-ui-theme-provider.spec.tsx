import { render } from '@testing-library/react';

import RailUiThemeProvider from './rail-ui-theme-provider';

describe('RailUiThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailUiThemeProvider />);
    expect(baseElement).toBeTruthy();
  });
});
