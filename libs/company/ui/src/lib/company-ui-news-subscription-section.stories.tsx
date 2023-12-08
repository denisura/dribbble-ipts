import type { Meta } from '@storybook/react';
import { CompanyUiNewsSubscriptionSection } from './company-ui-news-subscription-section';
import { CompanyUiThemeProvider } from './company-ui-theme-provider';

const meta: Meta<typeof CompanyUiNewsSubscriptionSection> = {
  component: CompanyUiNewsSubscriptionSection,
  title: 'Company/Sections',
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

export const NewsSubscription = {
  args: {},
};
