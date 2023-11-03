import { render } from '@testing-library/react';

import RailDataAlertProvider from './rail-data-alert-provider';

describe('RailDataAlertProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailDataAlertProvider />);
    expect(baseElement).toBeTruthy();
  });
});
