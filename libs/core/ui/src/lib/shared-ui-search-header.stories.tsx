import type { Meta } from '@storybook/react';

import {
  SharedUiSearchHeader,
  defaultTheme,
  SharedUiThemeProvider,
} from '@ipts/core/ui';

import { createTheme } from '@mui/material';

import background from '../assets/story_background.jpg';

const meta: Meta<typeof SharedUiSearchHeader> = {
  component: SharedUiSearchHeader,
  title: 'Design System/Search',
  decorators: [
    (Story) => (
      <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
        <Story />
      </SharedUiThemeProvider>
    ),
  ],

  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default meta;

export const Header = {
  args: {
    title: '{title}',
    from: { label: 'FROM', description: 'FROM deatils' },
    to: { label: 'TO', description: 'TO deatils' },
  },
};
