import type { Meta } from '@storybook/react';
import { TravelUiNavigationDrawer } from './travel-ui-navigation-drawer';

import { TravelUiThemeProvider } from '@ipts/travel-ui';
import { TravelDataNavigationProvider } from '@ipts/travel-data-navigation-provider';
import { DrawerStateProvider } from '@ipts/core/ui';

const meta: Meta<typeof TravelUiNavigationDrawer> = {
  component: TravelUiNavigationDrawer,
  title: 'Sites/Travel/Navigation',
  decorators: [
    (Story) => (
      <TravelUiThemeProvider>
        <TravelDataNavigationProvider>
          <DrawerStateProvider open={true}>
            <Story title="title" />
          </DrawerStateProvider>
        </TravelDataNavigationProvider>
      </TravelUiThemeProvider>
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
