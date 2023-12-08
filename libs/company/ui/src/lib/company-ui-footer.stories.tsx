import type { Meta, StoryObj } from '@storybook/react';
import { CompanyUiFooter } from './company-ui-footer';
import { CompanyUiThemeProvider } from './company-ui-theme-provider';
import { CompanyDataNavigationProvider } from '@ipts/company-data-navigation-provider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CompanyUiFooter> = {
  component: CompanyUiFooter,
  title: 'Company/Navigation',
  decorators: [
    (Story) => (
      <CompanyUiThemeProvider>
        <CompanyDataNavigationProvider>
          <Story />
        </CompanyDataNavigationProvider>
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

export const Footer = {
  args: {},
};
