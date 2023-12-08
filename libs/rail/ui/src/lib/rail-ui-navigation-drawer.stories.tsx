import type { Meta } from '@storybook/react';
import { RailDataNavigationProvider } from '@ipts/rail-data-navigation-provider';
import { DrawerStateProvider } from '@ipts/core/ui';

import { RailUiNavigationDrawer } from './rail-ui-navigation-drawer';
import { RailUiThemeProvider } from './rail-ui-theme-provider';

const meta: Meta<typeof RailUiNavigationDrawer> = {
  component: RailUiNavigationDrawer,
  title: 'Rail/Navigation',
  decorators: [
    (Story) => (
      <RailUiThemeProvider>
        <RailDataNavigationProvider>
          <DrawerStateProvider open={true}>
            <Story title="title" />
          </DrawerStateProvider>
        </RailDataNavigationProvider>
      </RailUiThemeProvider>
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

export const Drawer = {
  args: { title: 'My Drawer Title' },
};
