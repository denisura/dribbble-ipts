import { render } from '@testing-library/react';

import SharedUiSubscriptionForm from './shared-ui-subscription-form';

describe('SharedUiSubscriptionForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedUiSubscriptionForm title={'title'} ctaLabel={'ctaLabel'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
