import type { Meta } from '@storybook/react';
import { Container } from '@mui/material';

import { TravelUiDealSubscriptionSection } from './travel-ui-deal-subscription-section';
import { TravelUiThemeProvider } from './travel-ui-theme-provider';

const meta: Meta<typeof TravelUiDealSubscriptionSection> = {
  component: TravelUiDealSubscriptionSection,
  title: 'Sites/Travel/Sections',
  decorators: [
    (Story) => (
      <TravelUiThemeProvider>
        <Container
          maxWidth="xs"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Story />
        </Container>
      </TravelUiThemeProvider>
    ),
  ],
};

export default meta;

export const PromoSubscription = {
  args: {},
};
