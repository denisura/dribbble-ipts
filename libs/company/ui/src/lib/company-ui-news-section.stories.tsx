import type { Meta } from '@storybook/react';
import { CompanyUiNewsSection } from './company-ui-news-section';

import { CompanyUiThemeProvider } from './company-ui-theme-provider';
import { CompanyDataNewsProvider } from '@ipts/company-data-news-provider';

const meta: Meta<typeof CompanyUiNewsSection> = {
  component: CompanyUiNewsSection,
  title: 'Sites/Company/Sections',
  decorators: [
    (Story) => (
      <CompanyUiThemeProvider>
        <CompanyDataNewsProvider>
          <Story />
        </CompanyDataNewsProvider>
      </CompanyUiThemeProvider>
    ),
  ],
  argTypes: {
    children: {
      control: 'object',
      options: ['placeholder'],
    },
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default meta;

export const NewsSection = {
  args: {},
};
