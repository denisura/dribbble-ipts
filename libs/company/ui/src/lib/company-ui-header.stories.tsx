import type { Meta, StoryObj } from '@storybook/react';
import { CompanyUiHeader } from './company-ui-header';
import { CompanyUiThemeProvider } from './company-ui-theme-provider';
import { CompanyDataNavigationProvider } from '@ipts/company-data-navigation-provider';
import { DrawerStateProvider } from '@ipts/core/ui';

const meta: Meta<typeof CompanyUiHeader> = {
  component: CompanyUiHeader,
  title: 'Sites/Company/Navigation',
  decorators: [
    (Story) => (
      <CompanyUiThemeProvider>
        <CompanyDataNavigationProvider>
          <DrawerStateProvider>
            <Story />
          </DrawerStateProvider>
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

export const Header = {
  args: { title: 'My Title' },
};
