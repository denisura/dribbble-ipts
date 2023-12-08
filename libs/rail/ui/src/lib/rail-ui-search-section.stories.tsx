import type { Meta } from '@storybook/react';
import { RailUiSearchSection } from './rail-ui-search-section';
import { RailUiThemeProvider } from './rail-ui-theme-provider';

const meta: Meta<typeof RailUiSearchSection> = {
  component: RailUiSearchSection,
  title: 'Rail/Sections',
  decorators: [
    (Story) => (
      <RailUiThemeProvider>
        <Story />
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

export const RoutesSearch = {
  args: {},
};
