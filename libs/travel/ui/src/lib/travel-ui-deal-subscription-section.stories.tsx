import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@mui/material';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
type Story = StoryObj<typeof TravelUiDealSubscriptionSection>;

export const PromoSubscription: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Subscribe to our deals/gi)).toBeTruthy();
  },
};
