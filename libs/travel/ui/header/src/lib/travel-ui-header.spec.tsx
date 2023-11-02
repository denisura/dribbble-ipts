import { render } from '@testing-library/react';

import TravelUiHeader from './travel-ui-header';

describe('TravelUiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TravelUiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
