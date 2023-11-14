import type { Meta } from '@storybook/react';
import { TravelUiThemeProvider, TravelUiPopularSection } from '@ipts/travel-ui';

const meta: Meta<typeof TravelUiPopularSection> = {
  component: TravelUiPopularSection,
  title: 'Sites/Travel/Sections',
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

export const PopularDestinactions = {
  args: {},
};
