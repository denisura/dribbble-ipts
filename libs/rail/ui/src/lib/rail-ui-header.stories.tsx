import type { Meta } from '@storybook/react';
import { RailUiHeader } from './rail-ui-header';

import { RailUiThemeProvider } from './rail-ui-theme-provider';
import { RailDataNavigationProvider } from '@ipts/rail-data-navigation-provider';
import { DrawerStateProvider } from '@ipts/core/ui';

const meta: Meta<typeof RailUiHeader> = {
  component: RailUiHeader,
  title: 'Rail/Navigation',
  decorators: [
    (Story) => (
      <RailUiThemeProvider>
        <RailDataNavigationProvider>
          <DrawerStateProvider>
            <Story />
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

export const Header = {
  args: {},
};
