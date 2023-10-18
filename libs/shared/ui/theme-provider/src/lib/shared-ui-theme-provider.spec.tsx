import { render } from '@testing-library/react';

import { SharedUiThemeProvider } from './shared-ui-theme-provider';

describe('SharedUiThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiThemeProvider theme={{}} />);
    expect(baseElement).toBeTruthy();
  });
});
