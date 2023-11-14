import type { Meta, StoryObj } from '@storybook/react';
import { RailUiSubscriptionSection } from './rail-ui-subscription-section';
import { RailUiThemeProvider } from './rail-ui-theme-provider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Container } from '@mui/material';

const meta: Meta<typeof RailUiSubscriptionSection> = {
  component: RailUiSubscriptionSection,
  title: 'Sites/Rail/Sections',
  decorators: [
    (Story) => (
      <RailUiThemeProvider>
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
      </RailUiThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RailUiSubscriptionSection>;

export const AlertsSubscription: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Subscribe to stay alert/gi)).toBeTruthy();
  },
};
