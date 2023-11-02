import { render } from '@testing-library/react';

import TravelUiFooter from './travel-ui-footer';

describe('TravelUiFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelUiFooter />);
    expect(baseElement).toBeTruthy();
  });
});
