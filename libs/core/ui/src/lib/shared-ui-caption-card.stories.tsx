import type { Meta } from '@storybook/react';

import {
  SharedUiCaptionCard,
  defaultTheme,
  SharedUiThemeProvider,
} from '@ipts/core/ui';

import { createTheme } from '@mui/material';

const meta: Meta<typeof SharedUiCaptionCard> = {
  component: SharedUiCaptionCard,
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

export const Caption = {
  args: {
    title: '{Multiline title}',
  },
};
