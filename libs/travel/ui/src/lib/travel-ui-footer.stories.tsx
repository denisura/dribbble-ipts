import type { Meta } from '@storybook/react';
import { TravelUiFooter } from './travel-ui-footer';

import { TravelUiThemeProvider } from '@ipts/travel-ui';
import { TravelDataNavigationProvider } from '@ipts/travel-data-navigation-provider';

const meta: Meta<typeof TravelUiFooter> = {
  component: TravelUiFooter,
  title: 'Sites/Travel/Navigation',
  decorators: [
    (Story) => (
      <TravelUiThemeProvider>
        <TravelDataNavigationProvider>
          <Story />
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

export const Footer = {
  args: {},
};
