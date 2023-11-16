import type { Meta, StoryObj } from '@storybook/react';
import { CompanyUiNewsSubscriptionSection } from './company-ui-news-subscription-section';
import { CompanyUiThemeProvider } from './company-ui-theme-provider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CompanyUiNewsSubscriptionSection> = {
  component: CompanyUiNewsSubscriptionSection,
  title: 'Sites/Company/Sections',
  decorators: [
    (Story) => (
      <CompanyUiThemeProvider>
        <Story />
      </CompanyUiThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CompanyUiNewsSubscriptionSection>;

export const NewsSubscription: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Subscribe to our news letter/gi)).toBeTruthy();
  },
};
