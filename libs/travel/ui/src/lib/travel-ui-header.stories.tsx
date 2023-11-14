import type { Meta } from '@storybook/react';
import { TravelUiHeader } from './travel-ui-header';

import { TravelUiThemeProvider } from '@ipts/travel-ui';
import { TravelDataNavigationProvider } from '@ipts/travel-data-navigation-provider';
import { DrawerStateProvider } from '@ipts/core/ui';

const meta: Meta<typeof TravelUiHeader> = {
  component: TravelUiHeader,
  title: 'Sites/Travel/Navigation',
  decorators: [
    (Story) => (
      <TravelUiThemeProvider>
        <TravelDataNavigationProvider>
          <DrawerStateProvider>
            <Story />
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

export const Header = {
  args: {},
};
