import { render } from '@testing-library/react';

import TravelUiLayout from './travel-ui-layout';

describe('TravelUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TravelUiLayout heroTitle="heroTitle" pageTitle="pageTitle" />
    );
    expect(baseElement).toBeTruthy();
  });
});
