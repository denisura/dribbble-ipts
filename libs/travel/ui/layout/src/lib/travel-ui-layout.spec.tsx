import { render } from '@testing-library/react';

import TravelUiLayout from './travel-ui-layout';

describe('TravelUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelUiLayout />);
    expect(baseElement).toBeTruthy();
  });
});
