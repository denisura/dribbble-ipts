import type { Meta } from '@storybook/react';

import { TravelUiThemeProvider, TravelUiSearchSection } from '@ipts/travel-ui';

const meta: Meta<typeof TravelUiSearchSection> = {
  component: TravelUiSearchSection,
  title: 'Travel/Sections',
  decorators: [
    (Story) => (
      <TravelUiThemeProvider>
        <Story />
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

export const DestinationSearch = {
  args: {},
};
