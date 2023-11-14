import type { Meta } from '@storybook/react';
import { RailUiFooter } from './rail-ui-footer';

import { RailUiThemeProvider } from '@ipts/rail-ui';
import { RailDataNavigationProvider } from '@ipts/rail-data-navigation-provider';

const meta: Meta<typeof RailUiFooter> = {
  component: RailUiFooter,
  title: 'Sites/Rail/Navigation',
  decorators: [
    (Story) => (
      <RailUiThemeProvider>
        <RailDataNavigationProvider>
          <Story />
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

export const Footer = {
  args: {},
};
