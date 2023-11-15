import type { Meta, StoryObj } from '@storybook/react';
import { SharedUiSubscriptionForm } from './shared-ui-subscription-form';
import { SharedUiThemeProvider } from './shared-ui-theme-provider';
import { defaultTheme } from './shared-ui-theme';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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
type Story = StoryObj<typeof SharedUiSubscriptionForm>;

export const SubscriptionForm: Story = {
  args: { title: '{title}', body: '{body}', ctaLabel: '{ctaLabel}' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/{title}/gi)).toBeTruthy();
  },
};
