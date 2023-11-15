import type { Meta } from '@storybook/react';

import {
  SharedUiActionCard,
  defaultTheme,
  SharedUiThemeProvider,
} from '@ipts/core/ui';

import { createTheme } from '@mui/material';

import background from '../assets/story_background.jpg';

const meta: Meta<typeof SharedUiActionCard> = {
  component: SharedUiActionCard,
  title: 'Design System/Cards',
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

export const Action = {
  args: {
    title: '{title}',
    background,
    ctaLabel: '{ctaLabel}',
  },
};
