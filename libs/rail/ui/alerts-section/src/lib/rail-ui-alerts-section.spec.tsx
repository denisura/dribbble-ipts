import { render } from '@testing-library/react';

import RailUiAlertsSection from './rail-ui-alerts-section';

describe('RailUiAlertsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RailUiAlertsSection />);
    expect(baseElement).toBeTruthy();
  });
});
