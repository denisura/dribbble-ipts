import type { Meta, StoryObj } from '@storybook/react';
import { SharedUiSubscriptionForm } from './shared-ui-subscription-form';
import { SharedUiThemeProvider } from '@ipts/shared-ui-theme-provider';
import { defaultTheme, createTheme } from '@ipts/shared-ui-theme';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SharedUiSubscriptionForm> = {
  component: SharedUiSubscriptionForm,
  title: 'Shared/Forms',
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
          <Story />
        </SharedUiThemeProvider>
      </div>
    ),
  ],
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
