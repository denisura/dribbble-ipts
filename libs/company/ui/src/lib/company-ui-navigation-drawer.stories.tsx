import type { Meta, StoryObj } from '@storybook/react';
import { CompanyUiNavigationDrawer } from './company-ui-navigation-drawer';

import { CompanyUiThemeProvider } from './company-ui-theme-provider';
import { CompanyDataNavigationProvider } from '@ipts/company-data-navigation-provider';
import { DrawerStateProvider } from '@ipts/core/ui';

const meta: Meta<typeof CompanyUiNavigationDrawer> = {
  component: CompanyUiNavigationDrawer,
  title: 'Company/Navigation',
  decorators: [
    (Story) => (
      <CompanyUiThemeProvider>
        <CompanyDataNavigationProvider>
          <DrawerStateProvider open={true}>
            <Story title="title" />
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
type Story = StoryObj<typeof CompanyUiNavigationDrawer>;

export const Drawer = {
  args: { title: 'My Drawer Title' },
};
