import type { Meta } from '@storybook/react';
import { SharedUiSubscriptionForm } from './shared-ui-subscription-form';
import { SharedUiThemeProvider } from './shared-ui-theme-provider';
import { defaultTheme } from './shared-ui-theme';

import { createTheme } from '@mui/material';

const meta: Meta<typeof SharedUiSubscriptionForm> = {
  component: SharedUiSubscriptionForm,
  title: 'Design System/Forms',
  decorators: [
    (Story) => (
      <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
        <Story />
      </SharedUiThemeProvider>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default meta;

export const SubscriptionForm = {
  args: { title: '{title}', body: '{body}', ctaLabel: '{ctaLabel}' },
};
