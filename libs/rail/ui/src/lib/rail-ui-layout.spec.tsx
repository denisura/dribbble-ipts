import { render } from '@testing-library/react';

import RailUiLayout from './rail-ui-layout';

describe('RailUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RailUiLayout heroTitle="heroTitle" pageTitle="PageTitle" />
    );
    expect(baseElement).toBeTruthy();
  });
});
