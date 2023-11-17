import type { Meta } from '@storybook/react';
import { RailUiSubscriptionSection } from './rail-ui-subscription-section';
import { RailUiThemeProvider } from './rail-ui-theme-provider';

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

export const AlertsSubscription = {
  args: {},
};
